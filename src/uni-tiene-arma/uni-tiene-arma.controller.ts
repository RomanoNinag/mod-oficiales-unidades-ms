import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UniTieneArmaService } from './uni-tiene-arma.service';
import { CreateUniTieneArmaDto } from './dto/create-uni-tiene-arma.dto';
import { UpdateUniTieneArmaDto } from './dto/update-uni-tiene-arma.dto';

@Controller()
export class UniTieneArmaController {
  constructor(private readonly uniTieneArmaService: UniTieneArmaService) { }

  @MessagePattern('create.ofiuni.uniTieneArma')
  create(@Payload() createUniTieneArmaDto: CreateUniTieneArmaDto) {
    return this.uniTieneArmaService.create(createUniTieneArmaDto);
  }

  @MessagePattern('get.ofiuni.uniTieneArma')
  findAll() {
    return this.uniTieneArmaService.findAll();
  }

  @MessagePattern('get.ofiuni.uniTieneArma.id')
  findOne(@Payload('id') id: string) {
    return this.uniTieneArmaService.findOne(id);
  }

  @MessagePattern('update.ofiuni.uniTieneArma')
  update(@Payload() updateUniTieneArmaDto: UpdateUniTieneArmaDto) {
    return this.uniTieneArmaService.update(updateUniTieneArmaDto.id, updateUniTieneArmaDto);
  }

  @MessagePattern('delete.ofiuni.uniTieneArma')
  remove(@Payload('id') id: string) {
    return this.uniTieneArmaService.softDelete(id);
  }
}
