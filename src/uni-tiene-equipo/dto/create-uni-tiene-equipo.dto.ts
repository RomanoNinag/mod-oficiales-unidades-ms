import { IsString, IsUUID } from "class-validator";

export class CreateUniTieneEquipoDto {

    @IsUUID()
    id_unidad: string;
    @IsUUID()
    id_equipo: string;
    @IsString()
    nro_acta_entrega: string;
    @IsString()
    procedencia: string;
    @IsString()
    cod_reg: string;
}
