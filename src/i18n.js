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
      smoothies: 'Nuestros Smoothies',
      classic: 'Acai, granola, mantequilla de cacahuete, plátano, fresa, arándanos y coco.',
      rainbow: 'Acai, mango, pitaya, granola, plátano, fresa y arándanos.',
      blue: 'Acai, chía azul, granola, mantequilla de almendras, plátano, arándanos y semillas de cáñamo.',
      bliss: 'Acai, granola, plátano, fresa, cacao & doble mantequilla de cacahuete.',
      classicSmoothie: 'fresas, plátano, yogur desnatado y chocolate blanco.',
      chocozice: 'chocolate, coco, yogur desnatado y plátano.',
      avozice: 'espinacas, manzana verde, kiwi, jengibre y limón.',
      detozice: 'espinacas, col rizada, mango, piña, plátano y jengibre.',
      mangozice: 'mango, piña, zumo de naranja y plátano.',
      oranzice: 'fresa, zumo de naranja, piña y lima.',
      butterzice: 'mantequilla de cacahuete, chocolate y plátano.'
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
      smoothies: 'Our Smoothies',
      classic: 'Acai, granola, peanut butter, banana, strawberry, blueberry & coconut.',
      rainbow: 'Acai, mango, pitaya, granola, banana, strawberry & blueberry.',
      blue: 'Acai, blue chia, granola, almond butter, banana, blueberry & hemp seeds.',
      bliss: 'Acai, granola, banana, strawberry, cacao & double peanut butter.',
      classicSmoothie: 'strawberrys, banana, non fat yogurt & white chocolate.',
      chocozice: 'chocolate, cocounat, non fat yogurt & banana.',
      avozice: 'spinach, green apple, kiwi, ginger & lemon.',
      detozice: 'spinach, kale, mango, pineapple, banana &  ginger.',
      mangozice: 'mango, pineapple, orange juice & banana.',
      oranzice: 'strawberry, orange juice, pineapple & lime.',
      butterzice: 'peanut butter, chocolate & banana.'
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
