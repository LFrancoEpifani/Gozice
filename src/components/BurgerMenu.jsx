import React from 'react';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

export default function BurgerMenu(props) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [currentLanguage, setCurrentLanguage] = useState('es');
  
  const [isOpen, setIsOpen] = useState(false);


  const handleSwitchLanguage = () => {
    if (currentLanguage === 'es') {
      setCurrentLanguage('en');
      i18n.changeLanguage('en');
    } else {
      setCurrentLanguage('es');
      i18n.changeLanguage('es');
    }
  };  

  return (
    <div className=''>
     <nav className={`absolute top-0 right-0 z-20 bg-gradient-to-b from-[#edadce] to-[#e895bc] h-screen w-2/3 ${isOpen ? 'mobile-menu-out' : 'mobile-menu'}`}>
      <Icon onClick={props.onClick} className="absolute top-0 right-0 m-2 text-xl " icon="mingcute:close-fill" />
        <ul className='text-lg mt-14 mb-4 flex flex-col gap-3 justify-end items-start mx-3'>
          <Link to="/" className={location.pathname === '/' ? ' font-bold text-[#ff61a6]' : 'text-white'}>
          <div className='flex items-center justify-center gap-2'>
            <Icon className='text-[#ff61a6] text-2xl' icon="ri:home-line" />
            <li>{t('home')}</li>
          </div>
          </Link>
          <Link to="/menu" className={location.pathname === '/menu' ? ' font-bold text-[#ff61a6]' : 'text-white'}>
            <div className='flex items-center justify-center gap-2'>
            <Icon className='text-[#ff61a6] text-2xl' icon="material-symbols:menu-book-outline" />
              <li>{t('menu')}</li>

            </div>

          </Link>
          <Link to="/about" className={location.pathname === '/about' ? ' font-bold text-[#ff61a6]' : 'text-white'}>
            <div className='flex items-center justify-center gap-2'>
            <Icon className='text-[#ff61a6] text-2xl' icon="mingcute:group-3-line" />
            <li>{t('aboutUs')}</li>
            </div>
          </Link>
        </ul>

        <div className="mx-2 my-2">
          <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button onClick={handleSwitchLanguage} className="focus:outline-none">
              {currentLanguage === 'es' ? (
                <div className='flex items-center gap-3 text-lg text-white font-semibold'>
                    <Icon className='text-2xl ml-2' icon="openmoji:flag-spain" />
                  <span>Español</span>
                </div>
              ) : (
                <div className='flex items-center text-lg gap-3 text-white font-semibold'>
                  <Icon className='text-2xl ml-2' icon="openmoji:flag-united-states" />
                  <span>English</span>
                </div>
              )}
            </button>
          </div>
        </div>
        <a href=" https://glovoapp.com/es/es/" target='_blank'>
        <button className='my-10 w-60 m-auto p-2 bg-[#FFC231] lg:w-[130px] lg:h-[35px] lg:rounded-full flex justify-center items-center shadow-lg text-[#009B7E] text-lg font-bold hover:bg-[#ff61a6] hover:text-white'>
          {t('globo')}
        </button>
        </a>
        <div className='absolute bottom-2 right-2 flex items-center text-xl gap-2 text-white'>
        <Icon icon="mdi:instagram" />
        <Icon icon="mdi:twitter" />
        <Icon icon="ic:baseline-facebook" />
      </div>
      </nav>
      
    </div>
  );
}
