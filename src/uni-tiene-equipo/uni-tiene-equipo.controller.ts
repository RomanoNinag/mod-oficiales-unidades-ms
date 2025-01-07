import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UniTieneEquipoService } from './uni-tiene-equipo.service';
import { CreateUniTieneEquipoDto } from './dto/create-uni-tiene-equipo.dto';
import { UpdateUniTieneEquipoDto } from './dto/update-uni-tiene-equipo.dto';

@Controller()
export class UniTieneEquipoController {
  constructor(private readonly uniTieneEquipoService: UniTieneEquipoService) {}

  @MessagePattern('createUniTieneEquipo')
  create(@Payload() createUniTieneEquipoDto: CreateUniTieneEquipoDto) {
    return this.uniTieneEquipoService.create(createUniTieneEquipoDto);
  }

  @MessagePattern('findAllUniTieneEquipo')
  findAll() {
    return this.uniTieneEquipoService.findAll();
  }

  @MessagePattern('findOneUniTieneEquipo')
  findOne(@Payload() id: number) {
    return this.uniTieneEquipoService.findOne(id);
  }

  @MessagePattern('updateUniTieneEquipo')
  update(@Payload() updateUniTieneEquipoDto: UpdateUniTieneEquipoDto) {
    return this.uniTieneEquipoService.update(updateUniTieneEquipoDto.id, updateUniTieneEquipoDto);
  }

  @MessagePattern('removeUniTieneEquipo')
  remove(@Payload() id: number) {
    return this.uniTieneEquipoService.remove(id);
  }
}
