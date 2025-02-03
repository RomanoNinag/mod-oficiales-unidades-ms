import { Unidad } from "src/unidades/entities/unidade.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('incidente_unidad')
export class IncidenteUnidad {
    @PrimaryGeneratedColumn()
    id_incidente_u: number;

    @Column('uuid')
    id_articulo: string;

    @Column('int')
    id_unidad: number;

    @ManyToOne(() => Unidad)
    @JoinColumn({ name: 'id_unidad' })
    unidad: Unidad;

    @Column('date')
    fecha: Date;

    @Column('text')
    nro_informe: string;

    @Column('text')
    situacion: string;

    @Column('text')
    nro_caso_investigacion: string;
}
