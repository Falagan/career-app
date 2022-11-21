import { TECH_LEVELS } from '../../../shared/models/tech-levels';

export interface Tool {
  id: number;
  name: string;
  i18n: string;
  level: TECH_LEVELS;
  versions: string[];
  description: string;
  link: string;
}
