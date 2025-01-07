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

  @MessagePattern('findAllUniTieneArma')
  findAll() {
    return this.uniTieneArmaService.findAll();
  }

  @MessagePattern('findOneUniTieneArma')
  findOne(@Payload() id: number) {
    return this.uniTieneArmaService.findOne(id);
  }

  @MessagePattern('updateUniTieneArma')
  update(@Payload() updateUniTieneArmaDto: UpdateUniTieneArmaDto) {
    return this.uniTieneArmaService.update(updateUniTieneArmaDto.id, updateUniTieneArmaDto);
  }

  @MessagePattern('removeUniTieneArma')
  remove(@Payload() id: number) {
    return this.uniTieneArmaService.remove(id);
  }
}
