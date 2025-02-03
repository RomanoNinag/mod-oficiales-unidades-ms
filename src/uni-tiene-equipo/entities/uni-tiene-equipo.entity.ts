import { BaseEntity } from "src/common/entities/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('uni_tiene_equipo')
export class UniTieneEquipo extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id_unitieneequipo: string;

    @Column('integer', {

    })
    id_unidad: number;

    @Column('uuid', {

    })
    id_equipo: string;
    @Column('text', {

    })
    nro_acta_entrega: string;

    @Column('text', {

    })
    procedencia: string;

    @Column('text', {
        unique: true
    })
    cod_reg: string;
}
