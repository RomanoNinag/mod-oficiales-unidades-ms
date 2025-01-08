import { Module } from '@nestjs/common';
import { UniTieneEquipoService } from './uni-tiene-equipo.service';
import { UniTieneEquipoController } from './uni-tiene-equipo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniTieneEquipo } from './entities/uni-tiene-equipo.entity';

@Module({
  controllers: [UniTieneEquipoController],
  providers: [UniTieneEquipoService],
  imports: [
    TypeOrmModule.forFeature([UniTieneEquipo])
  ]
})
export class UniTieneEquipoModule { }
