import { Module } from '@nestjs/common';
import { FunTieneArmaService } from './fun-tiene-arma.service';
import { FunTieneArmaController } from './fun-tiene-arma.controller';

@Module({
  controllers: [FunTieneArmaController],
  providers: [FunTieneArmaService],
})
export class FunTieneArmaModule {}
