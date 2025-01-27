import { BaseEntity } from "src/common/entities/base.entity";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('fun_tiene_arma')
@Unique(['id_fun_pol', 'id_arma'])
export class FunTieneArma extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id_funTieneArma: string;

    @Column('uuid', {
        unique: true
    })
    id_arma: string;

    @Column('uuid', {

    })
    id_fun_pol: number;

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
        unique: true
    })
    cod_registro: string;

    @Column('text', {
        nullable: true
    })
    procedencia: string;

    @Column('bool', {
        default: false
    })
    recurso_propio: boolean;

    @Column('text', {
        nullable: true
    })
    obsevaciones: string;
}
