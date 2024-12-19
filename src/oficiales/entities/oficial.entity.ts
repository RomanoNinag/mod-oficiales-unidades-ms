import { IsNumber, IsString } from "class-validator";
import { Persona } from "./persona.entity";
import { Column } from "typeorm";

export class Oficial extends Persona {

    @Column({
        type: 'text',
    })
    nro_escalafon: string;

    @Column({
        type: 'number',
    })
    promocion: number;

    @Column({
        type: 'date',
    })
    fecha_ingreso_institucion: Date;

    @Column({
        type: 'text',
    })
    grado: string;
}
