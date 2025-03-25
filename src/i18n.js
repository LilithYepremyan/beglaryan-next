import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import locales from '../public/locales';

let localeFromUrl = null;

if (typeof window !== 'undefined') {
  const url = new URL(window.location.href);
  localeFromUrl = url.searchParams.get('lang');

  if (locales[localeFromUrl]) {
    localStorage.setItem('bfLang', localeFromUrl);
  }
}

export const currentLang =
  localeFromUrl ||
  (typeof window !== 'undefined' && localStorage.getItem('bfLang')) ||
  process.env.NEXT_PUBLIC_LOCALE ||
  'en';

i18n.use(initReactI18next).init({
  resources: locales,
  lng: currentLang,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
