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
     <nav className={`absolute top-0 left-0 z-20 bg-gradient-to-b from-[#f1f0d8] to-[#efaaca] h-screen w-full ${isOpen ? 'mobile-menu-out' : 'mobile-menu'}`}>
      <Icon onClick={props.onClick} className="absolute top-0 right-0 m-3 text-3xl " icon="mingcute:close-fill" />
        <ul className='bai text-4xl flex flex-col gap-3 justify-center items-start mt-44 mx-14'>
          <Link to="/" className={location.pathname === '/' ? ' font-bold text-[#ff61a6]' : 'text-black'}>
          <div className='flex items-center justify-center gap-2'>
           
            <li>{t('home')}</li>
          </div>
          </Link>
          <Link to="/menu" className={location.pathname === '/menu' ? ' font-bold text-[#ec74a8]' : 'text-black'}>
            <div className='flex items-center justify-center gap-2'>
            
              <li>{t('menu')}</li>

            </div>

          </Link>
          <Link to="/about" className={location.pathname === '/about' ? ' font-bold text-[#ff61a6]' : 'text-black'}>
            <div className='flex items-center justify-center gap-2'>
          
            <li>{t('aboutUs')}</li>
            </div>
          </Link>
          
        <div className="">
          <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button onClick={handleSwitchLanguage} className="focus:outline-none">
              {currentLanguage === 'es' ? (
                <div className='flex items-center text-lg text-white font-semibold'>
                    <Icon className='text-5xl' icon="openmoji:flag-spain" />
                 
                </div>
              ) : (
                <div className='flex items-center text-lg text-white font-semibold'>
                  <Icon className='text-5xl' icon="openmoji:flag-united-states" />
                  
                </div>
              )}
            </button>
          </div>
        </div>
        </ul>

        
        <div className='absolute bottom-2 right-2 flex items-center text-3xl gap-2 text-white'>
        <Icon icon="mdi:instagram" />
        <Icon icon="mdi:twitter" />
        <Icon icon="ic:baseline-facebook" />
      </div>
      </nav>
      
    </div>
  );
}
