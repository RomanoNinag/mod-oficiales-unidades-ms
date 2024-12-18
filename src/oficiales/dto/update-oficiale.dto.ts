import { PartialType } from '@nestjs/mapped-types';
import { CreateOficialeDto } from './create-oficiale.dto';

export class UpdateOficialeDto extends PartialType(CreateOficialeDto) {
  id: number;
}
