import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateOficialeDto {
    @IsString()
    @IsNotEmpty()
    ci: string;

    @IsString()
    @IsNotEmpty()
    nombres: string;

    @IsString()
    @IsNotEmpty()
    ap_paterno: string;

    @IsString()
    @IsOptional() // Asumiendo que ap_materno puede ser opcional
    ap_materno: string;

    @IsString()
    @IsOptional() // Asumiendo que genero puede ser opcional
    genero: string;

    @IsDate()
    fecha_nacimiento: string;

    @IsNumber()
    nro_escalafon: number;

    @IsString()
    @IsOptional() // Asumiendo que promocion puede ser opcional
    promocion: string;

    @IsDate()
    fecha_ingreso_institucion: Date;

    @IsString()
    @IsNotEmpty()
    grado: string;
}
