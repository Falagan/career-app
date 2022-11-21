import { ContactList } from '../static/contact-list';
import { LanguagesList } from '../static/languages-list';
import { ProfessionalProjectsList } from '../static/professional-projects-list';
import { ProgrammingLanguagesList } from '../static/programming-languages-list';
import { ToolsList } from '../static/tools-list';

export const LocalRepository = {
  getTools: () => ToolsList,
  getContacts: () => ContactList,
  getProgrammingLanguages: () => ProgrammingLanguagesList,
  getLanguages: () => LanguagesList,
  getProfesionalProjects: () => ProfessionalProjectsList,
};
