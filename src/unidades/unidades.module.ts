import { Module } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { UnidadesController } from './unidades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unidad } from './entities/unidade.entity';

@Module({
  controllers: [UnidadesController],
  providers: [UnidadesService],
  imports: [
    // Importamos el módulo de TypeOrm
    TypeOrmModule.forFeature([Unidad])
  ],
  exports: [
    UnidadesService
  ]
})
export class UnidadesModule { }
