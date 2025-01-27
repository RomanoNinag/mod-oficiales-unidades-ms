import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateOficialeDto } from './dto/create-oficiale.dto';
import { UpdateOficialeDto } from './dto/update-oficiale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Oficial } from './entities/oficial.entity';
import { DataSource, Repository } from 'typeorm';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class OficialesService {
  constructor(
    @InjectRepository(Oficial)
    private readonly oficialesRepository: Repository<Oficial>,
    private readonly dataSource: DataSource,
  ) { }
  async create(createOficialeDto: CreateOficialeDto) {
    try {
      const oficial = this.oficialesRepository.create(createOficialeDto);
      await this.oficialesRepository.save(oficial);
      return oficial;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.oficialesRepository.find();
  }

  findOne(id: number) {
    return this.oficialesRepository.findOneBy({ id_persona: id });
  }

  update(id: number, updateOficialeDto: UpdateOficialeDto) {
    return `This action updates a #${id} oficiale`;
  }

  remove(id: number) {
    return `This action removes a #${id} oficiale`;
  }
  private handleDBExceptions(error) {
    console.log(error);

    if (error.code === '23505') {
      throw new RpcException({
        status: HttpStatus.BAD_REQUEST,
        // message: 'Ya existe una oficial con ese nombre',
        message: error.detail,
      })
    }
    // throw new BadRequestException(error.detail);
    // this.logger.error(error);
    console.log(error)
    throw new RpcException('Otro tipo de error de base de datos!')
  }
  async truncateOficiales(): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    try {
      await queryRunner.query(`TRUNCATE TABLE "oficiales" RESTART IDENTITY CASCADE`);
    } catch (error) {
      this.handleDBExceptions(error);
    } finally {
      await queryRunner.release();
    }
  }
}
