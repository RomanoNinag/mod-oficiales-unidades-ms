import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FunTieneArmaService } from './fun-tiene-arma.service';
import { CreateFunTieneArmaDto } from './dto/create-fun-tiene-arma.dto';
import { UpdateFunTieneArmaDto } from './dto/update-fun-tiene-arma.dto';

@Controller()
export class FunTieneArmaController {
  constructor(private readonly funTieneArmaService: FunTieneArmaService) { }

  @MessagePattern('crear.ofiuni.funTieneArma')
  create(@Payload() createFunTieneArmaDto: CreateFunTieneArmaDto) {
    return this.funTieneArmaService.create(createFunTieneArmaDto);
  }

  @MessagePattern('get.ofiuni.funTieneArma')
  findAll() {
    return this.funTieneArmaService.findAll();
  }

  @MessagePattern('get.ofiuni.funTieneArma.rp')
  findAllRP() {
    return this.funTieneArmaService.findAllRP();
  }

  @MessagePattern('get.ofiuni.funTieneArma.srp')
  findAllSRP() {
    return this.funTieneArmaService.findAllSRP();
  }

  @MessagePattern('get.ofiuni.funTieneArma.id')
  findOne(@Payload('id') id: string) {
    return this.funTieneArmaService.findOne(id);
  }

  @MessagePattern('update.ofiuni.funTieneArma')
  update(@Payload() updateFunTieneArmaDto: UpdateFunTieneArmaDto) {
    return this.funTieneArmaService.update(updateFunTieneArmaDto.id, updateFunTieneArmaDto);
  }

  @MessagePattern('delete.ofiuni.funTieneArma')
  remove(@Payload('id') id: string) {
    return this.funTieneArmaService.softDelete(id);
  }
}
