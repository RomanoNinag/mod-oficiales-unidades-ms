import { Module } from '@nestjs/common';
import { UniTieneEquipoService } from './uni-tiene-equipo.service';
import { UniTieneEquipoController } from './uni-tiene-equipo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniTieneEquipo } from './entities/uni-tiene-equipo.entity';
import { UnidadesModule } from 'src/unidades/unidades.module';
import { RabbitMqModule } from 'src/transporters/rabbit-mq.module';

@Module({
  controllers: [UniTieneEquipoController],
  providers: [UniTieneEquipoService],
  imports: [
    TypeOrmModule.forFeature([UniTieneEquipo]),
    UnidadesModule,
    RabbitMqModule
  ]
})
export class UniTieneEquipoModule { }
