import { Injectable } from '@nestjs/common';
import { CreateUniTieneEquipoDto } from './dto/create-uni-tiene-equipo.dto';
import { UpdateUniTieneEquipoDto } from './dto/update-uni-tiene-equipo.dto';

@Injectable()
export class UniTieneEquipoService {
  create(createUniTieneEquipoDto: CreateUniTieneEquipoDto) {
    return 'This action adds a new uniTieneEquipo';
  }

  findAll() {
    return `This action returns all uniTieneEquipo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} uniTieneEquipo`;
  }

  update(id: number, updateUniTieneEquipoDto: UpdateUniTieneEquipoDto) {
    return `This action updates a #${id} uniTieneEquipo`;
  }

  remove(id: number) {
    return `This action removes a #${id} uniTieneEquipo`;
  }
}
