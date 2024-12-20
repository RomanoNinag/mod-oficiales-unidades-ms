import { Module } from '@nestjs/common';
import { OficialesService } from './oficiales.service';
import { OficialesController } from './oficiales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Oficial } from './entities/oficial.entity';

@Module({
  controllers: [OficialesController],
  providers: [OficialesService],
  imports: [
    TypeOrmModule.forFeature([Oficial]),
  ],
})
export class OficialesModule { }
