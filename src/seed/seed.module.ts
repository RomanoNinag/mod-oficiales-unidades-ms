import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { UnidadesModule } from 'src/unidades/unidades.module';
import { OficialesModule } from 'src/oficiales/oficiales.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    UnidadesModule,
    OficialesModule
  ]
})
export class SeedModule { }
