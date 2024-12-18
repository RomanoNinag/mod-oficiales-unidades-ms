import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OficialesService } from './oficiales.service';
import { CreateOficialeDto } from './dto/create-oficiale.dto';
import { UpdateOficialeDto } from './dto/update-oficiale.dto';

@Controller()
export class OficialesController {
  constructor(private readonly oficialesService: OficialesService) {}

  @MessagePattern('createOficiale')
  create(@Payload() createOficialeDto: CreateOficialeDto) {
    return this.oficialesService.create(createOficialeDto);
  }

  @MessagePattern('findAllOficiales')
  findAll() {
    return this.oficialesService.findAll();
  }

  @MessagePattern('findOneOficiale')
  findOne(@Payload() id: number) {
    return this.oficialesService.findOne(id);
  }

  @MessagePattern('updateOficiale')
  update(@Payload() updateOficialeDto: UpdateOficialeDto) {
    return this.oficialesService.update(updateOficialeDto.id, updateOficialeDto);
  }

  @MessagePattern('removeOficiale')
  remove(@Payload() id: number) {
    return this.oficialesService.remove(id);
  }
}
