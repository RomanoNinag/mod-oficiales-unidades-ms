import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('personas')
export class Persona {
    @PrimaryGeneratedColumn()
    id_persona: number;

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
