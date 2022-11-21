import { PROJECT_CONTEXT, PROJECT_ROLE } from '../components/projects/models/project';

export const ProfessionalProjectsList = [
  {
    id: 1,
    name: 'Elgom App',
    description:
      'Proyecto para la digitalización de los procesos de creación, seguimiento, documentación, facturación y\
      monitorización de proyectos y trabajos sub-contratados por Union Fenosa.',
    company: 'CtGalega de Software',
    client: 'Elgom',
    link: 'https://www.elgom.es',
    role: PROJECT_ROLE.ARCHITECT,
    context: PROJECT_CONTEXT.FULLSTACK,
    language: 'Typescript',
    technologies: ['Angular', 'Nodejs', 'Nestjs', 'MongoDb', 'Mysql', 'Firebase', 'OpenStreetMaps', 'TypeORM'],
    initDate: '01-01-2020',
    endDate: '01-01-2022',
  },
  {
    id: 2,
    name: 'Board App',
    description:
      'Proyecto multicliente destinado a mostrar de forma gráfica e interactiva datos de distintas áreas administrativas\
       de una empresa, tales como contabilidad, facturación, personal, logística, seguimientos de proyectos etc.',
    company: 'CtGalega de Software',
    client: 'PYMES',
    role: PROJECT_ROLE.ARCHITECT,
    context: PROJECT_CONTEXT.FULLSTACK,
    language: 'Typescript',
    technologies: ['Angular', 'Nodejs', 'Nestjs', 'MongoDb', 'Mssql', 'Firebase', 'ChartJs'],
    initDate: '01-01-2020',
    endDate: '01-01-2020',
  },
  {
    id: 3,
    name: 'De mano a mano',
    description:
      'Proyecto multiplataforma para desarrollar un sistema completo (multiusuario y multicliente) de encargo y reparto\
       a domicilio de productos de las empresas aderidas al sistema. Se desarrolló una app movil para IOS y Android,\
      un backoffice de gestión Web y un servicio web para atender todas las necesidades del sistema.',
    company: 'CtGalega de Software',
    client: 'PYMES',
    link: 'https://demanoamano.es',
    role: PROJECT_ROLE.ARCHITECT,
    context: PROJECT_CONTEXT.FULLSTACK,
    language: 'Typescript',
    technologies: ['Angular', 'Nodejs', 'Nestjs', 'MongoDb', 'Mysql', 'Firebase', 'ChartJs', 'Azure', 'TypeORM'],
    initDate: '01-01-2020',
    endDate: '01-01-2021',
  },
  {
    id: 4,
    name: 'Sire',
    description:
      'Desarrollo de una aplicación web destinada al seguimiento,control y gestión de incidencias eléctricas del sistema\
       eléctrico gallego en tiempo real, con la posibilidad de generar informes programados y de proveer datos a\
       otros sistemas de la administración pública.',
    company: 'CtGalega de Software',
    client: 'PYMES',
    role: PROJECT_ROLE.ARCHITECT,
    context: PROJECT_CONTEXT.FULLSTACK,
    language: 'Typescript',
    technologies: [
      'Angular',
      'Nodejs',
      'Nestjs',
      'MongoDb',
      'Mysql',
      'Firebase',
      'ChartJs',
      'Azure',
      'TypeORM',
      'OpenStreetMaps',
    ],
    initDate: '01-01-2019',
    endDate: '01-01-2020',
  },
  {
    id: 5,
    name: 'NewGenApp',
    description: 'Aplicación bancaria enfocada a usuarios menores de edad del Banco Albilad.',
    company: 'AtSitemas',
    client: 'Bank Albilad',
    role: PROJECT_ROLE.ARCHITECT,
    context: PROJECT_CONTEXT.BACK,
    language: 'Typescript',
    technologies: [
      'Nodejs',
      'Nestjs',
      'MongoDb',
      'Mssql',
      'Azure Notifications',
      'Azure Queues',
      'Redis Cache',
      'TypeORM',
      'Mongoose',
    ],
    initDate: '01-01-2022',
    endDate: '01-01-2023',
  },
];
