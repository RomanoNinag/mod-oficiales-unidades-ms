import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnidadesModule } from './unidades/unidades.module';
import { OficialesModule } from './oficiales/oficiales.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from './config/envs';
import { FunTieneArmaModule } from './fun-tiene-arma/fun-tiene-arma.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'postgres',
      url: envs.databaseUrl,
      autoLoadEntities: true,
      synchronize: true,
    }),

    UnidadesModule,
    OficialesModule,
    FunTieneArmaModule,
    SeedModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [TypeOrmModule]
})
export class AppModule { }
