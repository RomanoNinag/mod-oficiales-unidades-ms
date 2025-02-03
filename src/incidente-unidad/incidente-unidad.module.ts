import { Module } from '@nestjs/common';
import { IncidenteUnidadService } from './incidente-unidad.service';
import { IncidenteUnidadController } from './incidente-unidad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncidenteUnidad } from './entities/incidente-unidad.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([IncidenteUnidad]),
  ],
  controllers: [IncidenteUnidadController],
  providers: [IncidenteUnidadService],
})
export class IncidenteUnidadModule { }
