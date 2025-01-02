import { Inject, Injectable } from '@nestjs/common';
import { OficialesService } from 'src/oficiales/oficiales.service';
import { UnidadesService } from 'src/unidades/unidades.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
    constructor(
        @Inject()
        private readonly unidadesService: UnidadesService,

        @Inject()
        private readonly oficialesService: OficialesService
    ) { }

    async runSeedOfiUni() {

        await this.deleteTables();

        // insertamos datos
        await this.insertUnidades();
        await this.insertOficiales();
        return 'datos insertados';
    }

    private async deleteTables() {
        this.unidadesService.truncateUnidades();
        this.oficialesService.truncateOficiales();
    }

    private async insertDataSequentially<T>(data: T[], service: { create: (item: T) => Promise<any> }) {
        for (const item of data) {
            await service.create(item);
        }
        return true;
    }
    private async insertUnidades() {
        return this.insertDataSequentially(initialData.unidades, this.unidadesService);
    }
    private async insertOficiales() {
        return this.insertDataSequentially(initialData.oficiales, this.oficialesService);
    }
}
