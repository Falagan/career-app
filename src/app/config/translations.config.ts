import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from '../../assets/i18n/en';
import { es } from '../../assets/i18n/es';
import { LANGUAGES } from '../shared/models/languages';

export default i18next.use(initReactI18next).init({
  resources: {
    ...en,
    ...es,
  },
  lng: LANGUAGES.ES,
  fallbackLng: LANGUAGES.EN,
});
