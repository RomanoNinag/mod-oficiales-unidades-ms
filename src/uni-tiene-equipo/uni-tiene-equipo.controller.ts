import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UniTieneEquipoService } from './uni-tiene-equipo.service';
import { CreateUniTieneEquipoDto } from './dto/create-uni-tiene-equipo.dto';
import { UpdateUniTieneEquipoDto } from './dto/update-uni-tiene-equipo.dto';

@Controller()
export class UniTieneEquipoController {
  constructor(private readonly uniTieneEquipoService: UniTieneEquipoService) { }

  @MessagePattern('create.ofiuni.uniTieneEquipo')
  create(@Payload() createUniTieneEquipoDto: CreateUniTieneEquipoDto) {
    return this.uniTieneEquipoService.create(createUniTieneEquipoDto);
  }

  @MessagePattern('get.ofiuni.uniTieneEquipo')
  findAll() {
    return this.uniTieneEquipoService.findAll();
  }

  @MessagePattern('get.ofiuni.uniTieneEquipo.id')
  findOne(@Payload('id') id: string) {
    return this.uniTieneEquipoService.findOne(id);
  }

  @MessagePattern('update.ofiuni.uniTieneEquipo')
  update(@Payload() updateUniTieneEquipoDto: UpdateUniTieneEquipoDto) {
    return this.uniTieneEquipoService.update(updateUniTieneEquipoDto.id, updateUniTieneEquipoDto);
  }

  @MessagePattern('delete.ofiuni.uniTieneEquipo')
  remove(@Payload('id') id: string) {
    return this.uniTieneEquipoService.softDelete(id);
  }
}
