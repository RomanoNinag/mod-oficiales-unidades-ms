import { Injectable } from '@nestjs/common';
import { CreateOficialeDto } from './dto/create-oficiale.dto';
import { UpdateOficialeDto } from './dto/update-oficiale.dto';

@Injectable()
export class OficialesService {
  create(createOficialeDto: CreateOficialeDto) {
    return 'This action adds a new oficiale';
  }

  findAll() {
    return `This action returns all oficiales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} oficiale`;
  }

  update(id: number, updateOficialeDto: UpdateOficialeDto) {
    return `This action updates a #${id} oficiale`;
  }

  remove(id: number) {
    return `This action removes a #${id} oficiale`;
  }
}
