import { Inject, Injectable } from '@nestjs/common';
import { CreateImportDatumDto } from './dto/create-import-datum.dto';
import { UpdateImportDatumDto } from './dto/update-import-datum.dto';
import { UnidadesService } from 'src/unidades/unidades.service';
import { OficialesService } from 'src/oficiales/oficiales.service';
import { FunTieneArmaService } from 'src/fun-tiene-arma/fun-tiene-arma.service';
import { plainToInstance } from 'class-transformer';
import { CreateUnidadDto } from 'src/unidades/dto';
import { ClientProxy } from '@nestjs/microservices';
import { RABBITMQ_SERVICE } from 'src/config';

@Injectable()
export class ImportDataService {
  constructor(
    private readonly unidadesService: UnidadesService,
    private readonly oficialesService: OficialesService,
    private readonly funTieneArmaService: FunTieneArmaService,

    @Inject(RABBITMQ_SERVICE) private readonly client: ClientProxy,
  ) { }
  async importLote(data: any) {
    console.log('importLote', data.armas);

    // console.log('unidades ------------- ', { data: data.unidades });
    const resultadosUnidades = await this.insertUnidades(data.unidades);
    return {
      message: 'importLote finalizada',
      resultado: resultadosUnidades
    };
  }

  private async insertDataSequentially<T>(data: T[], service: { create: (item: T) => Promise<any> }) {

    const resultados = {
      insertados: [],
      ya_existentes: [],
      errores: []
    }
    for (const item of data) {
      try {
        const insertedItem = await service.create(item);
        resultados.insertados.push(insertedItem);
      } catch (error) {
        if (error.code === '23505' || error.message.includes('Ya existe una unidad con ese nombre')) {
          resultados.ya_existentes.push(item);
        } else {
          resultados.errores.push({ item, error: error.message });
        }
      }
      // await service.create(item);
    }
    return resultados;
  }
  private async insertUnidades(data: any[]) {

    const unidadesDto: CreateUnidadDto[] = plainToInstance(CreateUnidadDto, data, {
      excludeExtraneousValues: true
    });

    return this.insertDataSequentially(unidadesDto, this.unidadesService);
  }
  // private async insertArmas(data: any[]) {

  //   const armaDto: CreateUnidadDto[] = plainToInstance(CreateUnidadDto, data, {
  //     excludeExtraneousValues: true
  //   });

  //   return this.insertDataSequentially(unidadesDto, this.unidadesService);
  // }

  private async insertOficiales(data: any) {
    return this.insertDataSequentially(data, this.oficialesService);
  }

  private async insertFunTieneArma(data: any) {
    return this.insertDataSequentially(data, this.funTieneArmaService);
  }
}
