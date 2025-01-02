import { IsNumber, IsString } from "class-validator";
import { Persona } from "./persona.entity";
import { Column, Entity } from "typeorm";

@Entity('oficiales')
export class Oficial extends Persona {

    @Column({
        type: 'text',
    })
    nro_escalafon: string;

    @Column({
        type: 'int',
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
