import { Module } from '@nestjs/common';
import { UniTieneArmaService } from './uni-tiene-arma.service';
import { UniTieneArmaController } from './uni-tiene-arma.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniTieneArma } from './entities/uni-tiene-arma.entity';
import { RabbitMqModule } from 'src/transporters/rabbit-mq.module';
import { UnidadesModule } from 'src/unidades/unidades.module';

@Module({
  controllers: [UniTieneArmaController],
  providers: [UniTieneArmaService],
  imports: [
    TypeOrmModule.forFeature([UniTieneArma]),
    UnidadesModule,
    RabbitMqModule
  ]
})
export class UniTieneArmaModule { }
