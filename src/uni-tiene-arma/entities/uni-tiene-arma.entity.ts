import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('uni_tiene_arma')
export class UniTieneArma {
    @PrimaryGeneratedColumn('uuid')
    id_unitienearma: string;

    @Column('uuid', {

    })
    id_arma: string;

    @Column('uuid', {

    })
    id_uni: string;

    @Column('date', {

    })
    fecha_entrega: Date;

    @Column('text', {

    })
    nro_acta_entrega: string;

    @Column('date', {

    })
    fecha_registro: Date;

    @Column('text', {
        nullable: true
    })
    procedencia: string;

    @Column('text', {
        nullable: true
    })
    entrega_encalidad_de: string;

    @Column('text', {

    })
    verif_existencia: string;
}
