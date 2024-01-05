import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Configuración de idiomas y recursos
const resources = {
  es: {
    translation: {
      lenguage: 'Idioma',
        home: 'Inicio',
        menu: 'Menú',
        aboutUs: 'Nosotros',
        globo: 'Haz tu pedido',
        title: 'Alimentar un estilo de vida feliz y saludable',
        subtitle: 'Sumérgete en un mundo de bienestar y sabor con nuestras creaciones únicas',
        subtitle2: 'de acaí bowls y smoothies, para hacer que te sientas mejor que nunca',
        slogan: 'Siente el sabor, siente',
        gozice: 'Gozice',
        ourmenu: 'Ver menú',
        english: 'Inglés',
      spanish: 'Español',
      bowls: 'Nuestros Bowls',
      smoothies: 'Nuestros Smoothies'
    },
  },
  en: {
    translation: {
      lenguage: 'Lenguage',
     home: 'Home',
     menu: 'Menu',
     aboutUs: 'About Us',
     globo: 'Take your order',
     title: 'Nurturing happy and healthy lifestyle',
      subtitle: 'Immerse yourself in a world of wellness and flavor with our unique',
      subtitle2: 'acai bowls and smoothie creations, to make you feel better than ever before.',
      slogan: 'Feel the taste, feel',
      gozice: 'Gozice',
      ourmenu: 'Our menú',
      english: 'English',
      spanish: 'Spanish',
      bowls: 'Our Bowls',
      smoothies: 'Our Smoothies'
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // idioma por defecto
    fallbackLng: 'es', // idioma de fallback si la traducción no está disponible
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
