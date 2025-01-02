import { Injectable } from '@nestjs/common';
import { CreateFunTieneArmaDto } from './dto/create-fun-tiene-arma.dto';
import { UpdateFunTieneArmaDto } from './dto/update-fun-tiene-arma.dto';

@Injectable()
export class FunTieneArmaService {
  create(createFunTieneArmaDto: CreateFunTieneArmaDto) {
    return 'This action adds a new funTieneArma';
  }

  findAll() {
    return `This action returns all funTieneArma`;
  }

  findOne(id: number) {
    return `This action returns a #${id} funTieneArma`;
  }

  update(id: number, updateFunTieneArmaDto: UpdateFunTieneArmaDto) {
    return `This action updates a #${id} funTieneArma`;
  }

  remove(id: number) {
    return `This action removes a #${id} funTieneArma`;
  }
}
