import { Controller } from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { UnidadesService } from './unidades.service';
import { CreateUnidadDto, UpdateUnidadDto } from './dto/';


@Controller()
export class UnidadesController {
  constructor(private readonly unidadesService: UnidadesService) { }

  @MessagePattern('crear.unidad')
  create(@Payload() createUnidadeDto: CreateUnidadDto) {
    return this.unidadesService.create(createUnidadeDto);

  }

  @MessagePattern('get.unidades')
  findAll() {
    return this.unidadesService.findAll();
  }

  @MessagePattern('get.unidad.id')
  findOne(@Payload() id: string) {
    return this.unidadesService.findOne(+id);
  }

  @MessagePattern('updateUnidade')
  update(@Payload() updateUnidadeDto: UpdateUnidadDto) {
    return this.unidadesService.update(updateUnidadeDto.id, updateUnidadeDto);
  }

  @MessagePattern('removeUnidade')
  remove(@Payload() id: number) {
    return this.unidadesService.remove(id);
  }
}
