import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IncidenteUnidadService } from './incidente-unidad.service';
import { CreateIncidenteUnidadDto } from './dto/create-incidente-unidad.dto';
import { UpdateIncidenteUnidadDto } from './dto/update-incidente-unidad.dto';

@Controller()
export class IncidenteUnidadController {
  constructor(private readonly incidenteUnidadService: IncidenteUnidadService) {}

  @MessagePattern('createIncidenteUnidad')
  create(@Payload() createIncidenteUnidadDto: CreateIncidenteUnidadDto) {
    return this.incidenteUnidadService.create(createIncidenteUnidadDto);
  }

  @MessagePattern('findAllIncidenteUnidad')
  findAll() {
    return this.incidenteUnidadService.findAll();
  }

  @MessagePattern('findOneIncidenteUnidad')
  findOne(@Payload() id: number) {
    return this.incidenteUnidadService.findOne(id);
  }

  @MessagePattern('updateIncidenteUnidad')
  update(@Payload() updateIncidenteUnidadDto: UpdateIncidenteUnidadDto) {
    return this.incidenteUnidadService.update(updateIncidenteUnidadDto.id, updateIncidenteUnidadDto);
  }

  @MessagePattern('removeIncidenteUnidad')
  remove(@Payload() id: number) {
    return this.incidenteUnidadService.remove(id);
  }
}
