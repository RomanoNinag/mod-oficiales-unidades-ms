import { Injectable } from '@nestjs/common';
import { CreateUniTieneArmaDto } from './dto/create-uni-tiene-arma.dto';
import { UpdateUniTieneArmaDto } from './dto/update-uni-tiene-arma.dto';

@Injectable()
export class UniTieneArmaService {
  create(createUniTieneArmaDto: CreateUniTieneArmaDto) {
    return 'This action adds a new uniTieneArma';
  }

  findAll() {
    return `This action returns all uniTieneArma`;
  }

  findOne(id: number) {
    return `This action returns a #${id} uniTieneArma`;
  }

  update(id: number, updateUniTieneArmaDto: UpdateUniTieneArmaDto) {
    return `This action updates a #${id} uniTieneArma`;
  }

  remove(id: number) {
    return `This action removes a #${id} uniTieneArma`;
  }
}
