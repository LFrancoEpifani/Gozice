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
        globoResponsive: 'Pedir',
        title: 'Alimentar un estilo de vida feliz y saludable',
        subtitle: 'Sumérgete en un mundo de bienestar y sabor con nuestras creacione súnicas de acaí bowls y smoothies.',
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
      classicSmoothie: 'Fresas, plátano, yogur desnatado y chocolate blanco.',
      chocozice: 'Chocolate, coco, yogur desnatado y plátano.',
      avozice: 'Espinacas, manzana verde, kiwi, jengibre y limón.',
      detozice: 'Espinacas, col rizada, mango, piña, plátano y jengibre.',
      mangozice: 'Mango, piña, zumo de naranja y plátano.',
      oranzice: 'Fresa, zumo de naranja, piña y lima.',
      butterzice: 'Mantequilla de cacahuete, chocolate y plátano.',
      about: 'Nosotros',
      mission: 'Misión',
      high: 'Alta calidad',
      service: 'Servicio',
      aboutText: 'En Gozice, creemos en la extraordinaria capacidad que tiene la nutrición para transformar vidas. Nuestra pasión por el bienestar y la salud nos ha llevado a crear una marca dedicada a proporcionar a nuestros clientes la mejor experiencia en smoothies y acai bowls, diseñados para nutrir el cuerpo y el alma.',
      missionText: 'Nuestra misión es sencilla pero poderosa: nutrir tu bienestar. Creemos en la importancia de ofrecer opciones nutritivas y deliciosas que hagan que cuidarte sea fácil y delicioso. Nos esforzamos por inspirarte a tomar decisiones más saludables, brindándote la energía y vitalidad que necesitas para enfrentar tu día. ',
      highText: 'En Gozice ofrecemos productos de la más alta calidad en cada sorbo y bocado. Nos esforzamos por superar tus expectativas al proporcionarte smoothies y acai bowls que no solo son deliciosos, sino que también están llenos de ingredientes de primera calidad. Nuestra dedicación a la excelencia se refleja en cada aspecto de lo que hacemos, desde la selección de ingredientes hasta la presentación final de nuestros productos.',
      serviceText: 'Brindamos un servicio excepcional que refleje nuestro compromiso con tu satisfacción y bienestar. Nos esforzamos para que en cada interacción, proporcionemos un servicio amable, rápido y personalizado. Estamos aquí para escucharte, responder a tus necesidades y hacer que tu experiencia con nosotros sea inolvidable. Tu felicidad y comodidad son nuestra prioridad número uno, y trabajamos para ofrecerte un servicio de la más alta calidad.',
      goziceSlider: 'Smoothies & Bowls de Açaí',
     
    },
  },
  en: {
    translation: {
      lenguage: 'Lenguage',
     home: 'Home',
     menu: 'Menu',
     aboutUs: 'About Us',
     globo: 'Order Now',
     globoResponsive: 'Order',
     title: 'Nurturing happy and healthy lifestyle',
      subtitle: 'Immerse yourself in a world of wellness and flavor with our unique acai bowls and smoothie creations',
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
      classicSmoothie: 'Strawberrys, banana, non fat yogurt & white chocolate.',
      chocozice: 'Chocolate, cocounat, non fat yogurt & banana.',
      avozice: 'Spinach, green apple, kiwi, ginger & lemon.',
      detozice: 'Spinach, kale, mango, pineapple, banana &  ginger.',
      mangozice: 'Mango, pineapple, orange juice & banana.',
      oranzice: 'Strawberry, orange juice, pineapple & lime.',
      butterzice: 'Peanut butter, chocolate & banana.',
      about: 'About us',
      mission: 'Our mission',
      high: 'High quality',
      service: 'Service',
      aboutText: 'At Gozice, we believe in the extraordinary ability of nutrition to transform lives. Our passion for wellness and health has led us to create a brand dedicated to providing our customers with the ultimate smoothie and acai bowl experience designed to nourish the body and soul.',
      missionText: 'Our mission is simple but powerful: to nourish your well-being. We believe in the importance of offering nutritious and delicious options that make taking care of yourself easy and delicious. We strive to inspire you to make healthier choices, giving you the energy and vitality you need to face your day. ',
      highText: 'At Gozice we offer the highest quality products in every sip and bite. We strive to exceed your expectations by providing you with smoothies and acai bowls that are not only delicious, but also packed with premium ingredients. Our dedication to excellence is reflected in every aspect of what we do, from the selection of ingredients to the final presentation of our products.',
      serviceText: 'We provide exceptional service that reflects our commitment to your satisfaction and well-being. We strive to provide friendly, prompt and personalized service in every interaction. We are here to listen to you, respond to your needs and make your experience with us unforgettable. Your happiness and comfort are our number one priority, and we work to provide you with the highest quality service.',
      goziceSlider: 'Smoothies & Açaí Bowls',
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
