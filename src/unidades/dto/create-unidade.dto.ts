import { IsEnum, IsNumber, IsPositive, IsString } from "class-validator";
import { Departamento } from "../enums/departamento.enum";
import { Expose, Transform } from "class-transformer";

export class CreateUnidadDto {

    @IsString()
    @Expose()
    nombre_unidad: string;

    @IsString()
    provincia: string;

    @IsString()
    municipio: string;

    @IsString()
    responsable: string;

    @IsEnum(Departamento, {
        message: `El departamento debe ser uno de los siguientes valores: ${Object.values(Departamento).join(',')}`
    })
    @Transform(({ value }) => {
        if (typeof value !== 'string') return value;

        const departamentosValidos: Record<string, Departamento> = {
            "CHUQUISACA": Departamento.Chuquisaca,
            "LA PAZ": Departamento.LaPaz,
            "COCHABAMBA": Departamento.Cochabamba,
            "ORURO": Departamento.Oruro,
            "POTOSI": Departamento.Potosi,
            "TARIJA": Departamento.Tarija,
            "SANTA CRUZ": Departamento.SantaCruz,
            "BENI": Departamento.Beni,
            "PANDO": Departamento.Pando
        };

        return departamentosValidos[value.toUpperCase()] || value;
    })
    @Expose()
    departamento: String;
}
