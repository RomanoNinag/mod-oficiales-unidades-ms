import { Module } from '@nestjs/common';
import { IncidenteUnidadService } from './incidente-unidad.service';
import { IncidenteUnidadController } from './incidente-unidad.controller';

@Module({
  controllers: [IncidenteUnidadController],
  providers: [IncidenteUnidadService],
})
export class IncidenteUnidadModule {}
