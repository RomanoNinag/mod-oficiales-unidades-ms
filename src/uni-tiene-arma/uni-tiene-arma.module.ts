import { Module } from '@nestjs/common';
import { UniTieneArmaService } from './uni-tiene-arma.service';
import { UniTieneArmaController } from './uni-tiene-arma.controller';

@Module({
  controllers: [UniTieneArmaController],
  providers: [UniTieneArmaService],
})
export class UniTieneArmaModule {}
