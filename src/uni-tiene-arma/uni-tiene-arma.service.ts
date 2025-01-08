import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUniTieneArmaDto } from './dto/create-uni-tiene-arma.dto';
import { UpdateUniTieneArmaDto } from './dto/update-uni-tiene-arma.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UniTieneArma } from './entities/uni-tiene-arma.entity';
import { DataSource, Repository } from 'typeorm';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { RABBITMQ_SERVICE } from 'src/config';
import { UnidadesService } from 'src/unidades/unidades.service';
import { catchError, firstValueFrom, of } from 'rxjs';

@Injectable()
export class UniTieneArmaService {
  constructor(
    @InjectRepository(UniTieneArma)
    private readonly uniTieneArmaRepository: Repository<UniTieneArma>,
    private readonly dataSource: DataSource,
    // local services
    private readonly unidadService: UnidadesService,

    // micro services
    @Inject(RABBITMQ_SERVICE) private readonly client: ClientProxy,
  ) { }
  async create(createUniTieneArmaDto: CreateUniTieneArmaDto) {
    try {
      const unidad = await this.unidadService.findOne(createUniTieneArmaDto.id_uni);

      const arma = await firstValueFrom(
        this.client.send('get.articulo.arma.id', { id: createUniTieneArmaDto.id_arma })
          .pipe(
            catchError(error => {
              return of(null);
            })
          )
      );
      const uniTieneArma = this.uniTieneArmaRepository.create(createUniTieneArmaDto);
      await this.uniTieneArmaRepository.save(uniTieneArma);
      return {
        uniTieneArma,
        unidad,
        arma
      };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    const uniTieneArma = await this.uniTieneArmaRepository.find({
      where: {
        deleted_at: null,
      },
    });
    const registros = await Promise.all(uniTieneArma.map(async (uniTieneArma) => {
      const unidad = await this.unidadService.findOne(uniTieneArma.id_uni);
      const arma = await firstValueFrom(
        this.client.send('get.articulo.arma.id', { id: uniTieneArma.id_arma })
          .pipe(
            catchError(error => {
              return of(null);
            })
          )
      );
      return {
        uniTieneArma,
        unidad,
        arma
      };
    }));
    return registros;
  }

  async findOne(id: string) {
    const uniTieneArma = await this.uniTieneArmaRepository.findOne({
      where: {
        id_unitienearma: id,
        deleted_at: null,
      }
    });
    if (!uniTieneArma) {
      throw new RpcException({
        status: HttpStatus.NOT_FOUND,
        message: 'No se encontró la relación entre unidad y arma',
      });
    }
    return uniTieneArma;
  }

  async update(id: string, updateUniTieneArmaDto: UpdateUniTieneArmaDto) {
    try {
      const uniTieneArma = await this.uniTieneArmaRepository.preload({
        id_unitienearma: id,
        ...updateUniTieneArmaDto,
      });
      if (!uniTieneArma) {
        throw new RpcException({
          status: HttpStatus.NOT_FOUND,
          message: 'No se encontró la relación entre unidad y arma',
        });
      }
      return await this.uniTieneArmaRepository.save(uniTieneArma);
    } catch (error) {
      if (error instanceof RpcException) {
        throw error;
      }
      this.handleDBExceptions(error);
    }
  }

  remove(id: string) {
    return `This action removes a #${id} uniTieneArma`;
  }

  async softDelete(id: string) {
    const uniTieneArma = await this.findOne(id);
    uniTieneArma.deleted_at = new Date();
    await this.uniTieneArmaRepository.save(uniTieneArma);
    return uniTieneArma;
  }

  private handleDBExceptions(error) {
    console.log(error);

    if (error.code === '23505') {
      throw new RpcException({
        status: HttpStatus.BAD_REQUEST,
        message: error.detail,
      })
    }
    console.log(error)
    throw new RpcException('Otro tipo de error de base de datos!')
  }
  async truncateOficiales(): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    try {
      await queryRunner.query(`TRUNCATE TABLE "ofi_tiene_arma" CASCADE`);
    } catch (error) {
      this.handleDBExceptions(error);
    } finally {
      await queryRunner.release();
    }
  }
}
