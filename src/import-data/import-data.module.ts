import { Module } from '@nestjs/common';
import { ImportDataService } from './import-data.service';
import { ImportDataController } from './import-data.controller';
import { UnidadesModule } from 'src/unidades/unidades.module';
import { OficialesModule } from 'src/oficiales/oficiales.module';
import { FunTieneArmaModule } from 'src/fun-tiene-arma/fun-tiene-arma.module';
import { RabbitMqModule } from 'src/transporters/rabbit-mq.module';

@Module({
  imports: [
    UnidadesModule,
    OficialesModule,
    FunTieneArmaModule,
    RabbitMqModule
  ],
  controllers: [ImportDataController],
  providers: [ImportDataService],
})
export class ImportDataModule { }
