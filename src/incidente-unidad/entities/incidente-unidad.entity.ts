import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('incidente_unidad')
export class IncidenteUnidad {
    @PrimaryGeneratedColumn()
    id_incidente_u: number;

    @Column('uuid')
    id_articulo: string;

    
}
