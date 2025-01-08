import { PartialType } from '@nestjs/mapped-types';
import { CreateUniTieneArmaDto } from './create-uni-tiene-arma.dto';
import { IsString, IsUUID } from 'class-validator';

export class UpdateUniTieneArmaDto extends PartialType(CreateUniTieneArmaDto) {
  @IsString()
  @IsUUID()
  id: string;
}
