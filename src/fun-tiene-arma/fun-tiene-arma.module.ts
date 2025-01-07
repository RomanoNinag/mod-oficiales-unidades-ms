import { Module } from '@nestjs/common';
import { FunTieneArmaService } from './fun-tiene-arma.service';
import { FunTieneArmaController } from './fun-tiene-arma.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FunTieneArma } from './entities/fun-tiene-arma.entity';

@Module({
  controllers: [FunTieneArmaController],
  providers: [FunTieneArmaService],
  imports: [
    TypeOrmModule.forFeature([FunTieneArma]),
  ],
  exports: [
    FunTieneArmaService
  ]
})
export class FunTieneArmaModule {}
