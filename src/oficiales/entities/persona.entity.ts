import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Persona {
    @PrimaryGeneratedColumn('uuid')
    id_persona: string;

    @Column({
        type: 'text',
        nullable: false,
        unique: true
    })
    ci: string;

    @Column({
        type: 'text',
    })
    nombres: string;

    @Column({
        type: 'text',
    })
    ap_paterno: string;

    @Column({
        type: 'text',
    })
    ap_materno: string;

    @Column({
        type: 'text',
    })
    genero: string;

    @Column({
        type: 'date',
    })
    fecha_nacimiento: Date;

}