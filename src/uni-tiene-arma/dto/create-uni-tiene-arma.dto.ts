import { IsDate, IsString, IsUUID } from "class-validator";

export class CreateUniTieneArmaDto {
    @IsUUID()
    id_arma: string;

    @IsUUID()
    id_uni: string;

    @IsDate()
    fecha_entrega: Date;

    @IsString()
    nro_acta_entrega: string;

    @IsDate()
    fecha_registro: Date;

    @IsString()
    procedencia: string;

    @IsString()
    entrega_encalidad_de: string;

    @IsString()
    verif_existencia: string;
}