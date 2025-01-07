import { PartialType } from '@nestjs/mapped-types';
import { CreateFunTieneArmaDto } from './create-fun-tiene-arma.dto';
import { IsString, IsUUID } from 'class-validator';

export class UpdateFunTieneArmaDto extends PartialType(CreateFunTieneArmaDto) {
  @IsUUID()
  @IsString()
  id: string;
}
