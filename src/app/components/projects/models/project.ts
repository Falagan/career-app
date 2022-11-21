export interface Project {
  id: number;
  name: string;
  description: string;
  company?: string;
  client?: string;
  link?: string;
  cloneLink?: string;
  role?: PROJECT_ROLE;
  context?: PROJECT_CONTEXT;
  language: string;
  technologies: string[];
  initDate: string;
  endDate: string;
}

export enum PROJECT_ROLE {
  ARCHITECT = 'architect',
  DEVELOPER = 'developer',
}

export enum PROJECT_CONTEXT {
  FRONT = 'front',
  BACK = 'back',
  FULLSTACK = 'fullstack',
}
