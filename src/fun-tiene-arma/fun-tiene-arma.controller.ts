import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FunTieneArmaService } from './fun-tiene-arma.service';
import { CreateFunTieneArmaDto } from './dto/create-fun-tiene-arma.dto';
import { UpdateFunTieneArmaDto } from './dto/update-fun-tiene-arma.dto';

@Controller()
export class FunTieneArmaController {
  constructor(private readonly funTieneArmaService: FunTieneArmaService) {}

  @MessagePattern('createFunTieneArma')
  create(@Payload() createFunTieneArmaDto: CreateFunTieneArmaDto) {
    return this.funTieneArmaService.create(createFunTieneArmaDto);
  }

  @MessagePattern('findAllFunTieneArma')
  findAll() {
    return this.funTieneArmaService.findAll();
  }

  @MessagePattern('findOneFunTieneArma')
  findOne(@Payload() id: number) {
    return this.funTieneArmaService.findOne(id);
  }

  @MessagePattern('updateFunTieneArma')
  update(@Payload() updateFunTieneArmaDto: UpdateFunTieneArmaDto) {
    return this.funTieneArmaService.update(updateFunTieneArmaDto.id, updateFunTieneArmaDto);
  }

  @MessagePattern('removeFunTieneArma')
  remove(@Payload() id: number) {
    return this.funTieneArmaService.remove(id);
  }
}
