import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Departamento } from "../enums/departamento.enum";

@Entity('unidades')
export class Unidad {
    @PrimaryGeneratedColumn('uuid')
    id_unidad_policial: string;

    @Column({
        type: 'text',
        unique: true
    })
    nombre_unidad: string;
    @Column('text')
    provincia: string;
    @Column('text')
    municipio: string;
    @Column({
        type: 'text'
    })
    responsable: string;

    @Column({
        type: 'enum',
        enum: Departamento,
        nullable: true
    })
    departamento: String;
}
