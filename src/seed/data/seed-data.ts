import { Departamento } from "src/unidades/enums/departamento.enum";

interface SeedUnidad {
    nombre_unidad: string;
    provincia: string;
    municipio: string;
    responsable: string;
    departamento: Departamento | null;
}

interface SeedOficial {
    ci: string;
    nombres: string;
    ap_paterno: string;
    ap_materno: string;
    genero: string;
    fecha_nacimiento: Date;
    nro_escalafon: string;
    promocion: number;
    fecha_ingreso_institucion: Date;
    grado: string;
}

interface SeedData {
    unidades: SeedUnidad[];
    oficiales: SeedOficial[];
}
export const initialData: SeedData = {
    // otros datos...
    unidades: [
        {
            nombre_unidad: "Unidad Táctica Especial",
            provincia: "Murillo",
            municipio: "La Paz",
            responsable: "Sala de armas cmdo dptal La Paz",
            departamento: Departamento.LaPaz
        },
        {
            nombre_unidad: "Comando Departamental",
            provincia: "Cercado",
            municipio: "Cochabamba",
            responsable: "Puesto policial de Villa Pagador",
            departamento: Departamento.Cochabamba
        },
        {
            nombre_unidad: "Comando Departamental de Santa Cruz",
            provincia: "Andrés Ibáñez",
            municipio: "Santa Cruz",
            responsable: "Aeropuerto Viru Viru",
            departamento: Departamento.SantaCruz
        },
        {
            nombre_unidad: "Comando Departamental de Chuquisaca",
            provincia: "Oropeza",
            municipio: "Sucre",
            responsable: "Epi 1ro de Mayo",
            departamento: Departamento.Chuquisaca
        },
        {
            nombre_unidad: "Comando Departamental de Tarija",
            provincia: "Cercado",
            municipio: "Tarija",
            responsable: "Modulos Policiales",
            departamento: Departamento.Tarija
        },
        {
            nombre_unidad: "Comando Departamental de Potosí",
            provincia: "Tomás Frías",
            municipio: "Potosí",
            responsable: "Puesto Policial de la Villa Imperial",
            departamento: Departamento.Potosi
        },
        {
            nombre_unidad: "Comando Departamental de Oruro",
            provincia: "Cercado",
            municipio: "Oruro",
            responsable: "Puesto policial de la ciudad de Oruro",
            departamento: Departamento.Oruro
        },
        {
            nombre_unidad: "Comando Departamental de Beni",
            provincia: "Cercado",
            municipio: "Trinidad",
            responsable: "Sala de armas comando dptal Beni",
            departamento: Departamento.Beni
        },
        {
            nombre_unidad: "Comando Departamental de Pando",
            provincia: "Nicolás Suárez",
            municipio: "Cobija",
            responsable: "Puesto de puerto Copacabana",
            departamento: Departamento.Pando
        }
    ],
    oficiales: [
        {
            ci: "52415678",
            nombres: "Roberto",
            ap_paterno: "Fernández",
            ap_materno: "Jiménez",
            genero: "Masculino",
            fecha_nacimiento: new Date("1984-04-10"),
            nro_escalafon: "B001",
            promocion: 2004,
            fecha_ingreso_institucion: new Date("2004-09-15"),
            grado: "Mayor"
        },
        {
            ci: "48726539",
            nombres: "Carmen",
            ap_paterno: "Rojas",
            ap_materno: "Lara",
            genero: "Femenino",
            fecha_nacimiento: new Date("1989-07-22"),
            nro_escalafon: "B002",
            promocion: 2009,
            fecha_ingreso_institucion: new Date("2009-03-10"),
            grado: "Capitán"
        },
        {
            ci: "78901235",
            nombres: "Luis Alberto",
            ap_paterno: "Torres",
            ap_materno: "Mendez",
            genero: "Masculino",
            fecha_nacimiento: new Date("1982-12-15"),
            nro_escalafon: "B003",
            promocion: 2002,
            fecha_ingreso_institucion: new Date("2002-01-20"),
            grado: "Teniente"
        },
        {
            ci: "89012345",
            nombres: "Ana María",
            ap_paterno: "Gómez",
            ap_materno: "Quiroga",
            genero: "Femenino",
            fecha_nacimiento: new Date("1990-08-30"),
            nro_escalafon: "B004",
            promocion: 2010,
            fecha_ingreso_institucion: new Date("2010-04-25"),
            grado: "Sargento"
        },
        {
            ci: "90123456",
            nombres: "Jorge",
            ap_paterno: "Silva",
            ap_materno: "Paredes",
            genero: "Masculino",
            fecha_nacimiento: new Date("1986-03-14"),
            nro_escalafon: "B005",
            promocion: 2006,
            fecha_ingreso_institucion: new Date("2006-05-18"),
            grado: "Coronel"
        },
        {
            ci: "01234567",
            nombres: "Claudia",
            ap_paterno: "Castro",
            ap_materno: "Fernandez",
            genero: "Femenino",
            fecha_nacimiento: new Date("1991-11-11"),
            nro_escalafon: "B006",
            promocion: 2011,
            fecha_ingreso_institucion: new Date("2011-06-01"),
            grado: "Capitán"
        },
        {
            ci: "12345678",
            nombres: "Carlos",
            ap_paterno: "Morales",
            ap_materno: "Salazar",
            genero: "Masculino",
            fecha_nacimiento: new Date("1978-09-22"),
            nro_escalafon: "B007",
            promocion: 1998,
            fecha_ingreso_institucion: new Date("1998-08-15"),
            grado: "General"
        },
        {
            ci: "23456789",
            nombres: "Mónica",
            ap_paterno: "Vargas",
            ap_materno: "Torrico",
            genero: "Femenino",
            fecha_nacimiento: new Date("1992-02-05"),
            nro_escalafon: "B008",
            promocion: 2012,
            fecha_ingreso_institucion: new Date("2012-09-20"),
            grado: "Subteniente"
        },
        {
            ci: "34567890",
            nombres: "David",
            ap_paterno: "López",
            ap_materno: "Aguilar",
            genero: "Masculino",
            fecha_nacimiento: new Date("1985-05-25"),
            nro_escalafon: "B009",
            promocion: 2005,
            fecha_ingreso_institucion: new Date("2005-03-30"),
            grado: "Capitán"
        },
        {
            ci: "45678901",
            nombres: "Sandra",
            ap_paterno: "Pérez",
            ap_materno: "Gutiérrez",
            genero: "Femenino",
            fecha_nacimiento: new Date("1993-07-19"),
            nro_escalafon: "B010",
            promocion: 2013,
            fecha_ingreso_institucion: new Date("2013-11-10"),
            grado: "Teniente"
        },
        {
            ci: "56789012",
            nombres: "Esteban",
            ap_paterno: "Correa",
            ap_materno: "Campos",
            genero: "Masculino",
            fecha_nacimiento: new Date("1979-04-12"),
            nro_escalafon: "B011",
            promocion: 1999,
            fecha_ingreso_institucion: new Date("1999-07-22"),
            grado: "Mayor"
        },
        {
            ci: "67890123",
            nombres: "Patricia",
            ap_paterno: "Ortiz",
            ap_materno: "Vega",
            genero: "Femenino",
            fecha_nacimiento: new Date("1988-10-30"),
            nro_escalafon: "B012",
            promocion: 2008,
            fecha_ingreso_institucion: new Date("2008-05-15"),
            grado: "Subteniente"
        },
        {
            ci: "78901234",
            nombres: "Gabriel",
            ap_paterno: "Blanco",
            ap_materno: "Moreno",
            genero: "Masculino",
            fecha_nacimiento: new Date("1981-01-17"),
            nro_escalafon: "B013",
            promocion: 2001,
            fecha_ingreso_institucion: new Date("2001-04-10"),
            grado: "Coronel"
        },
        {
            ci: "89012347",
            nombres: "Beatriz",
            ap_paterno: "Durán",
            ap_materno: "López",
            genero: "Femenino",
            fecha_nacimiento: new Date("1989-03-09"),
            nro_escalafon: "B014",
            promocion: 2009,
            fecha_ingreso_institucion: new Date("2009-08-20"),
            grado: "Mayor"
        },
        {
            ci: "90123452",
            nombres: "Oscar",
            ap_paterno: "Martínez",
            ap_materno: "Rivera",
            genero: "Masculino",
            fecha_nacimiento: new Date("1983-12-11"),
            nro_escalafon: "B015",
            promocion: 2003,
            fecha_ingreso_institucion: new Date("2003-02-25"),
            grado: "Teniente"
        },
        {
            ci: "01234560",
            nombres: "Laura",
            ap_paterno: "Quintana",
            ap_materno: "Serrano",
            genero: "Femenino",
            fecha_nacimiento: new Date("1990-11-01"),
            nro_escalafon: "B016",
            promocion: 2010,
            fecha_ingreso_institucion: new Date("2010-06-30"),
            grado: "Capitán"
        },
        {
            ci: "12345671",
            nombres: "Marco",
            ap_paterno: "Espinoza",
            ap_materno: "Cruz",
            genero: "Masculino",
            fecha_nacimiento: new Date("1980-08-15"),
            nro_escalafon: "B017",
            promocion: 2000,
            fecha_ingreso_institucion: new Date("2000-09-05"),
            grado: "Subteniente"
        },
        {
            ci: "23456784",
            nombres: "Diana",
            ap_paterno: "Carvajal",
            ap_materno: "Molina",
            genero: "Femenino",
            fecha_nacimiento: new Date("1987-06-20"),
            nro_escalafon: "B018",
            promocion: 2007,
            fecha_ingreso_institucion: new Date("2007-03-19"),
            grado: "Sargento"
        },
    ]
};