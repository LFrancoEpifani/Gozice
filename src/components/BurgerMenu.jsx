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
    <div className='z-20 h-full w-full'>
     <nav className={`w-full h-full absolute top-0 left-0 z-20 bg-gradient-to-b from-[#fffef7] to-[#fffef7] ${isOpen ? 'mobile-menu-out' : 'mobile-menu'}`}>
      <Icon onClick={props.onClick} className="absolute top-0 right-0 m-3 text-3xl " icon="mingcute:close-fill" />
        <ul className='bai text-4xl flex flex-col gap-3 justify-center items-start mt-44 mx-14'>
          <Link to="/" className={location.pathname === '/' ? ' font-extrabold text-[#ff61a6]' : 'text-black font-medium'}>
          <div className='flex items-center justify-center my-2'>
            <li>{t('home')}</li>
          </div>
          </Link>
          <Link to="/menu" className={location.pathname === '/menu' ? ' font-extrabold text-[#ec74a8]' : 'text-black font-medium'}>
            <div className='flex items-center justify-center my-2'>
              <li>{t('menu')}</li>
            </div>
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? ' font-extrabold text-[#ff61a6]' : 'text-black font-medium'}>
            <div className='flex items-center justify-center my-2'>
          
            <li>{t('aboutUs')}</li>
            </div>
          </Link>
          <a href=" https://glovoapp.com/es/es/" target='_blank'>
            <button style={{ boxShadow: "0px 4px #009b7e" }} className='md:hidden bg-[#FFC231] border-2 border-[#009b7e] w-[90px] h-[38px] rounded-full'>
                <p className='bai uppercase tracking-tight text-[white] font-bold text-sm m-1'>{t('globoResponsive')}</p>
            </button>
        </a>
        </ul>
        <div className='absolute bottom-0 flex items-center justify-between w-full gap-2 text-[#ff61a6]'>
        <div className="mx-2">
          <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button onClick={handleSwitchLanguage} className="focus:outline-none">
              {currentLanguage === 'es' ? (
                <div className='flex items-center text-lg text-white font-semibold'>
                    <Icon className='text-4xl' icon="openmoji:flag-spain" />
                </div>
              ) : (
                <div className='flex items-center text-lg text-white font-semibold'>
                  <Icon className='text-4xl' icon="openmoji:flag-united-states" />
                </div>
              )}
            </button>
          </div>
        </div>
       <div className='flex items-center gap-4 mx-2 text-3xl'>
        <Icon icon="mdi:instagram" />
        <Icon icon="mdi:twitter" />
        <Icon icon="ic:baseline-facebook" />
       </div>
      </div>
      </nav>
      
    </div>
  );
}
