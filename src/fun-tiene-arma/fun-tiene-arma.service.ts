import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateFunTieneArmaDto } from './dto/create-fun-tiene-arma.dto';
import { UpdateFunTieneArmaDto } from './dto/update-fun-tiene-arma.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FunTieneArma } from './entities/fun-tiene-arma.entity';
import { DataSource, Repository } from 'typeorm';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { OficialesService } from 'src/oficiales/oficiales.service';
import { RABBITMQ_SERVICE } from 'src/config';
import { catchError, firstValueFrom, of } from 'rxjs';

@Injectable()
export class FunTieneArmaService {
  constructor(
    @InjectRepository(FunTieneArma)
    private readonly funTieneArmaRepository: Repository<FunTieneArma>,
    private readonly dataSource: DataSource,
    // local services
    private readonly oficialService: OficialesService,
    // micro services
    @Inject(RABBITMQ_SERVICE) private readonly client: ClientProxy,
  ) { }
  async create(createFunTieneArmaDto: CreateFunTieneArmaDto) {
    try {

      const oficial = await this.oficialService.findOne(createFunTieneArmaDto.id_fun_pol);

      if (!oficial) {
        throw new RpcException({
          status: HttpStatus.NOT_FOUND,
          message: 'No se encontró el oficial',
        });
      }
      const arma = await firstValueFrom(
        this.client.send('get.articulo.arma.id', { id: createFunTieneArmaDto.id_arma })
          .pipe(
            catchError(error => {
              return of(null);
            })
          )
      );

      if (!arma) {
        throw new RpcException({
          status: HttpStatus.NOT_FOUND,
          message: 'No se encontró el arma',
        });
      }
      const funTieneArma = this.funTieneArmaRepository.create(createFunTieneArmaDto);

      await this.funTieneArmaRepository.save(funTieneArma);

      const newArma = await firstValueFrom(
        this.client.send('update.articulo.arma', {
          id: createFunTieneArmaDto.id_arma,
          asignado: true,
        })
          .pipe(
            catchError(error => {
              return of(null);
            })
          )
      );

      return {
        funTieneArma,
        oficial,
        newArma
      };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    const funTieneArma = await this.funTieneArmaRepository.find({
      where: {
        deleted_at: null,
      },
    });

    const registros = await Promise.all(funTieneArma.map(async (funTieneArma) => {
      const oficial = await this.oficialService.findOne(funTieneArma.id_fun_pol);

      const arma = await firstValueFrom(
        this.client.send('get.articulo.arma.id', { id: funTieneArma.id_arma })
          .pipe(
            catchError(error => {
              return of(null);
            })
          )
      );

      return {
        funTieneArma,
        oficial,
        arma,
      }
    }));
    return registros;
  }



  async findAllRP() {
    const funTieneArmaRP = await this.funTieneArmaRepository.find({
      where: {
        deleted_at: null,
        recurso_propio: true,
      },
    });
    const registros = await Promise.all(funTieneArmaRP.map(async (funTieneArma) => {
      const oficial = await this.oficialService.findOne(funTieneArma.id_fun_pol);

      const arma = await firstValueFrom(
        this.client.send('get.articulo.arma.id', { id: funTieneArma.id_arma })
          .pipe(
            catchError(error => {
              return of(null);
            })
          )
      );

      return {
        funTieneArma,
        oficial,
        arma,
      }
    }));
    return registros;
  }

  async findAllSRP() {
    const funTieneArmaSRP = await this.funTieneArmaRepository.find({
      where: {
        deleted_at: null,
        recurso_propio: false,
      },
    });
    const registros = await Promise.all(funTieneArmaSRP.map(async (funTieneArma) => {
      const oficial = await this.oficialService.findOne(funTieneArma.id_fun_pol);

      const arma = await firstValueFrom(
        this.client.send('get.articulo.arma.id', { id: funTieneArma.id_arma })
          .pipe(
            catchError(error => {
              return of(null);
            })
          )
      );

      return {
        funTieneArma,
        oficial,
        arma,
      }
    }));
    return registros;
  }
  async findOneById(id: string) {
    const funTieneArma = await this.funTieneArmaRepository.findOne({
      where: {
        id_funTieneArma: id,
        deleted_at: null,
      }
    });
    return funTieneArma;
  }
  async findOne(id: string) {
    const funTieneArma = await this.funTieneArmaRepository.findOne({
      where: {
        id_funTieneArma: id,
        deleted_at: null,
      }
    });

    if (!funTieneArma) {
      throw new RpcException({
        status: HttpStatus.NOT_FOUND,
        message: 'No se encontró la relación entre funcionario y arma',
      });
    }
    const oficial = await this.oficialService.findOne(funTieneArma.id_fun_pol);

    const arma = await firstValueFrom(
      this.client.send('get.articulo.arma.id', { id: funTieneArma.id_arma })
        .pipe(
          catchError(error => {
            return of(null);
          })
        )
    );
    return {
      funTieneArma,
      oficial,
      arma,
    };
  }

  async update(id: string, updateFunTieneArmaDto: UpdateFunTieneArmaDto) {
    try {
      const funTieneArma = await this.funTieneArmaRepository.preload({
        id_funTieneArma: id,
        ...updateFunTieneArmaDto,
      });
      if (!funTieneArma) {
        throw new RpcException({
          status: HttpStatus.NOT_FOUND,
          message: 'No se encontró la relación entre funcionario y arma',
        });
      }
      await this.funTieneArmaRepository.save(funTieneArma);
      return funTieneArma;

    } catch (error) {
      if (error instanceof RpcException) {
        throw error;
      }
      this.handleDBExceptions(error);
    }
  }

  remove(id: string) {
    return `This action removes a #${id} funTieneArma`;
  }

  async softDelete(id: string) {
    const funTieneArma = await this.findOneById(id);
    funTieneArma.deleted_at = new Date();
    await this.funTieneArmaRepository.save(funTieneArma);
    return funTieneArma;
  }

  private handleDBExceptions(error) {
    console.log(error);

    if (error instanceof RpcException) {
      throw error;
    }
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
      await queryRunner.query(`TRUNCATE TABLE "uni_tiene_arma" CASCADE`);
    } catch (error) {
      this.handleDBExceptions(error);
    } finally {
      await queryRunner.release();
    }
  }
}
