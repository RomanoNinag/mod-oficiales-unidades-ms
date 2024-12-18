import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnidadesModule } from './unidades/unidades.module';
import { OficialesModule } from './oficiales/oficiales.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from './config/envs';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'postgres',
      url: envs.databaseUrl,
      autoLoadEntities: true,
      synchronize: true,
    }),

    UnidadesModule,
    OficialesModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [TypeOrmModule]
})
export class AppModule { }
