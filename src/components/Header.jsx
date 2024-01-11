import React from 'react'
import Gozice from '../assets/GoziceLogo.png'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';



export default function Header() {

    const { t, i18n } = useTranslation();
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  
    const toggleLanguageMenu = () => {
      setLanguageMenuOpen(!languageMenuOpen);
    };
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () =>{
      setIsOpen(!isOpen);
    }
    const [currentLanguage, setCurrentLanguage] = useState('es');

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
    <div className='flex justify-between items-center p-3'>
        <div className='flex  justify-center items-center gap-4'>
        <button onClick={handleOpenMenu}>
            <Icon className={`${isOpen ? '' : ''} md:hidden text-2xl`} icon="clarity:menu-line" />
          </button>
        <Link to={"/"}>
        <img className='w-[100px] lg:w-[105px] lg:h-[35px]' src={Gozice} alt="Logo de gozice" />
        </Link> 
        </div>
        <a href=" https://glovoapp.com/es/es/" target='_blank'>
            <button style={{ boxShadow: "5px 5px #009b7e" }} className='md:hidden bg-[#FFC231] border-2 border-[#009b7e] w-[90px] h-[38px] rounded-full'>
                <p className='bai uppercase tracking-tight text-[white] font-bold text-sm m-1'>{t('globoResponsive')}</p>
            </button>
        </a>
        {isOpen && (
            <BurgerMenu onClick={handleOpenMenu}/>
        )}

        <nav className='max-md:hidden lg:flex lg:justify-center lg:items-center lg:gap-6'>
            <ul className='bai lg:flex lg:justify-center lg:items-center lg:gap-8 text-md'>
            <Link to="/" className={location.pathname === '/' ? 'active font-bold' : ''}>
                <li className=''>{t('home')}</li>
            </Link>
            <Link to="/menu" className={location.pathname === '/menu' ? 'active font-bold' : ''}>
                <li className=''>{t('menu')}</li>
            </Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active font-bold' : ''}>
                <li>{t('aboutUs')}</li>
            </Link>
            </ul>
            <a href=" https://glovoapp.com/es/es/" target='_blank'>
            <button style={{ boxShadow: "5px 5px #009b7e" }} className='bg-[#FFC231] border-2 border-[#009b7e] w-[130px] h-[45px] rounded-full flex justify-center items-center'>
                <p className='bai text-[#009b7e] font-bold text-md m-1'>{t('globo')}</p>
            </button>
            </a>
            <div className="relative inline-block text-left">
    <div className=''>
        <button onClick={handleSwitchLanguage} type="button" className="gap-1 flex items-center justify-center w-full rounded-md" id="options-menu">
        {currentLanguage === 'es' ? (
          <Icon className='text-2xl' icon="openmoji:flag-spain" />  
        ) : (
          <Icon className='text-2xl' icon="openmoji:flag-united-states" />
        )}
           
        </button>
    </div>
    {languageMenuOpen && (
  <div className="z-20 absolute right-0 w-36 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
    <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <a href="#" className="block px-4 py-4 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
        <span className="flex flex-col">
          <span className='text-center'>
            <div className='flex justify-center items-center gap-5'>
              <button onClick={() => changeLanguage('en')}>{t('english')}</button>
              <Icon className='' icon="openmoji:flag-united-states" />
            </div>
          </span>
        </span>
      </a>
      <a href="#" className="block px-4 py-4 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
        <span className="flex flex-col">
          <span className='text-center'>
            <div className='flex justify-center items-center gap-5'>
              <button onClick={() => changeLanguage('es')}>{t('spanish')}</button>
              <Icon icon="openmoji:flag-spain" />
            </div>
          </span>
        </span>
      </a>
    </div>
  </div>
)}
</div>
           
           
        </nav>
    </div>
    </div>
  )
}
