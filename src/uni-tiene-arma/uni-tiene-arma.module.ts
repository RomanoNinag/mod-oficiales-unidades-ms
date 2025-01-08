import { Module } from '@nestjs/common';
import { UniTieneArmaService } from './uni-tiene-arma.service';
import { UniTieneArmaController } from './uni-tiene-arma.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniTieneArma } from './entities/uni-tiene-arma.entity';
import { OficialesModule } from 'src/oficiales/oficiales.module';
import { RabbitMqModule } from 'src/transporters/rabbit-mq.module';

@Module({
  controllers: [UniTieneArmaController],
  providers: [UniTieneArmaService],
  imports: [
    TypeOrmModule.forFeature([UniTieneArma]),
    OficialesModule,
    RabbitMqModule
  ]
})
export class UniTieneArmaModule { }
