import { Injectable } from '@nestjs/common';
import { CreateIncidenteUnidadDto } from './dto/create-incidente-unidad.dto';
import { UpdateIncidenteUnidadDto } from './dto/update-incidente-unidad.dto';

@Injectable()
export class IncidenteUnidadService {
  create(createIncidenteUnidadDto: CreateIncidenteUnidadDto) {
    return 'This action adds a new incidenteUnidad';
  }

  findAll() {
    return `This action returns all incidenteUnidad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} incidenteUnidad`;
  }

  update(id: number, updateIncidenteUnidadDto: UpdateIncidenteUnidadDto) {
    return `This action updates a #${id} incidenteUnidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} incidenteUnidad`;
  }
}
