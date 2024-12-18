import { Module } from '@nestjs/common';
import { OficialesService } from './oficiales.service';
import { OficialesController } from './oficiales.controller';

@Module({
  controllers: [OficialesController],
  providers: [OficialesService],
})
export class OficialesModule {}
