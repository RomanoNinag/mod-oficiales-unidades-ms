import { Module } from '@nestjs/common';
import { UniTieneEquipoService } from './uni-tiene-equipo.service';
import { UniTieneEquipoController } from './uni-tiene-equipo.controller';

@Module({
  controllers: [UniTieneEquipoController],
  providers: [UniTieneEquipoService],
})
export class UniTieneEquipoModule {}
