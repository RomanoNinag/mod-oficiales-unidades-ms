import { PartialType } from '@nestjs/mapped-types';
import { CreateUniTieneEquipoDto } from './create-uni-tiene-equipo.dto';

export class UpdateUniTieneEquipoDto extends PartialType(CreateUniTieneEquipoDto) {
  id: number;
}
