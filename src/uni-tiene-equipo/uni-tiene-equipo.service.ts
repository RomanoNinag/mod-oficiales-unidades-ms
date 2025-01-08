import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUniTieneEquipoDto } from './dto/create-uni-tiene-equipo.dto';
import { UpdateUniTieneEquipoDto } from './dto/update-uni-tiene-equipo.dto';
import { UniTieneEquipo } from './entities/uni-tiene-equipo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class UniTieneEquipoService {
  constructor(
    @InjectRepository(UniTieneEquipo)
    private readonly uniTieneEquipoRepository: Repository<UniTieneEquipo>,
    private readonly dataSource: DataSource,
  ) { }
  async create(createUniTieneEquipoDto: CreateUniTieneEquipoDto) {
    try {
      const uniTieneEquipo = this.uniTieneEquipoRepository.create(createUniTieneEquipoDto);
      await this.uniTieneEquipoRepository.save(uniTieneEquipo);
      return uniTieneEquipo;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    return await this.uniTieneEquipoRepository.find({
      where: {
        deleted_at: null,
      },
    });
  }

  async findOne(id: string) {
    const uniTieneEquipo = await this.uniTieneEquipoRepository.findOne({
      where: {
        id_unitieneequipo: id,
        deleted_at: null,
      }
    });
    if (!uniTieneEquipo) {
      throw new RpcException({
        status: HttpStatus.NOT_FOUND,
        message: 'No se encontró la relación entre unidad y equipo',
      });
    }
    return uniTieneEquipo;
  }

  async update(id: string, updateUniTieneEquipoDto: UpdateUniTieneEquipoDto) {
    try {
      const uniTieneEquipo = await this.uniTieneEquipoRepository.preload({
        id_unitieneequipo: id,
        ...updateUniTieneEquipoDto,
      });
      if (!uniTieneEquipo) {
        throw new RpcException({
          status: HttpStatus.NOT_FOUND,
          message: 'No se encontró la relación entre unidad y equipo',
        });
      }
      await this.uniTieneEquipoRepository.save(uniTieneEquipo);
      return uniTieneEquipo;
    } catch (error) {
      
      this.handleDBExceptions(error);
    }
  }

  remove(id: string) {
    return `This action removes a #${id} uniTieneEquipo`;
  }

  async softDelete(id: string) {
    const uniTieneEquipo = await this.findOne(id);
    uniTieneEquipo.deleted_at = new Date();
    await this.uniTieneEquipoRepository.save(uniTieneEquipo);
    return uniTieneEquipo;
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
      await queryRunner.query(`TRUNCATE TABLE "uni_tiene_equipo" CASCADE`);
    } catch (error) {
      this.handleDBExceptions(error);
    } finally {
      await queryRunner.release();
    }
  }
}
