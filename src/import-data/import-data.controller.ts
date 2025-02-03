import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImportDataService } from './import-data.service';
import { CreateImportDatumDto } from './dto/create-import-datum.dto';
import { UpdateImportDatumDto } from './dto/update-import-datum.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ImportDataController {
  constructor(private readonly importDataService: ImportDataService) { }

  @MessagePattern('insert.lote')
  async importLote(@Payload() data: any) {
    return this.importDataService.importLote(data);
  }
}
