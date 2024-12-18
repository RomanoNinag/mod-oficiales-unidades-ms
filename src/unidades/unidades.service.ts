import { BadRequestException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUnidadDto } from './dto/create-unidade.dto';
import { UpdateUnidadDto } from './dto/update-unidade.dto';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Unidad } from './entities/unidade.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UnidadesService {

  constructor(
    @InjectRepository(Unidad)
    private readonly unidadRepository: Repository<Unidad>,
    private readonly dataSource: DataSource,
  ) { }

  async create(createUnidadeDto: CreateUnidadDto) {
    try {
      const unidad = this.unidadRepository.create(createUnidadeDto);
      await this.unidadRepository.save(unidad);
      return unidad;
    } catch (error) {
      // console.log(error);
      this.handleDBExceptions(error);
      // throw new RpcException(error)
    }
  }

  findAll() {
    return this.unidadRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} unidade`;
  }

  update(id: number, updateUnidadeDto: UpdateUnidadDto) {
    return `This action updates a #${id} unidade`;
  }

  remove(id: number) {
    return `This action removes a #${id} unidade`;
  }

  private handleDBExceptions(error) {
    if (error.code === '23505') {
      throw new RpcException({
        status: HttpStatus.BAD_REQUEST,
        message: 'Ya existe una unidad con ese nombre',
      })
    }
    // throw new BadRequestException(error.detail);
    // this.logger.error(error);
    console.log(error)
    throw new RpcException('Otro tipo de error de base de datos!')
  }
}
