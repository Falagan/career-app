import { TECH_LEVELS } from '../../../shared/models/tech-levels';

export interface ProgrammingLanguage {
  id: number;
  name: string;
  i18n: string;
  level: TECH_LEVELS;
  description: string;
}
