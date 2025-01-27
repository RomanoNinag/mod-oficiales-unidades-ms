import { PartialType } from '@nestjs/mapped-types';
import { CreateIncidenteUnidadDto } from './create-incidente-unidad.dto';

export class UpdateIncidenteUnidadDto extends PartialType(CreateIncidenteUnidadDto) {
  id: number;
}
