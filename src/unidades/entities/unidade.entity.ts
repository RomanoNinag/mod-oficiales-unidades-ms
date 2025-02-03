import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Departamento } from "../enums/departamento.enum";

@Entity('unidades')
export class Unidad {
    @PrimaryGeneratedColumn()
    id_unidad_policial: number;

    @Column({
        type: 'text',
        unique: true
    })
    nombre_unidad: string;

    @Column('text', {
        nullable: true
    })
    provincia: string;
    @Column('text', {
        nullable: true
    })
    municipio: string;
    @Column({
        type: 'text',
        nullable: true
    })
    responsable: string;

    @Column({
        type: 'enum',
        enum: Departamento,
        nullable: true
    })
    departamento: String;

    // @Column({
    //     type: 'text',
    //     nullable: true
    // })
    // direccion: string;
}
