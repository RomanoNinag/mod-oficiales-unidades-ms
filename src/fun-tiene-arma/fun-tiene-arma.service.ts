import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateFunTieneArmaDto } from './dto/create-fun-tiene-arma.dto';
import { UpdateFunTieneArmaDto } from './dto/update-fun-tiene-arma.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FunTieneArma } from './entities/fun-tiene-arma.entity';
import { DataSource, Repository } from 'typeorm';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class FunTieneArmaService {
  constructor(
    @InjectRepository(FunTieneArma)
    private readonly funTieneArmaRepository: Repository<FunTieneArma>,
    private readonly dataSource: DataSource,
  ) { }
  async create(createFunTieneArmaDto: CreateFunTieneArmaDto) {
    try {
      const funTieneArma = this.funTieneArmaRepository.create(createFunTieneArmaDto);
      await this.funTieneArmaRepository.save(funTieneArma);
      return funTieneArma;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    return await this.funTieneArmaRepository.find({
      where: {
        deleted_at: null,
      },
    });
  }

  async findAllRP() {
    return await this.funTieneArmaRepository.find({
      where: {
        deleted_at: null,
        recurso_propio: true,
      },
    });
  }

  async findAllSRP() {
    return await this.funTieneArmaRepository.find({
      where: {
        deleted_at: null,
        recurso_propio: false,
      },
    });
  }

  async findOne(id: string) {
    // let funTieneArma: FunTieneArma;
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
    return funTieneArma;
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
    const funTieneArma = await this.findOne(id);
    funTieneArma.deleted_at = new Date();
    await this.funTieneArmaRepository.save(funTieneArma);
    return funTieneArma;
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
