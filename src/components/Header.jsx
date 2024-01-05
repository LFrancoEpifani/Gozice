import React from 'react'
import Gozice from '../assets/GoziceLogo.png'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';


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
    

  return (
    <div className='flex justify-between p-4'>
        <img className='w-[120px] h-[40px]' src={Gozice} alt="Logo de gozice" />
        <nav className='flex justify-center items-center gap-6'>
            <ul className='flex justify-center items-center gap-8 text-md'>
            <Link to="/" className={location.pathname === '/' ? 'active font-bold' : ''}>
                <li>{t('home')}</li>
            </Link>
            <Link to="/menu" className={location.pathname === '/menu' ? 'active font-bold' : ''}>
                <li>{t('menu')}</li>
            </Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active font-bold' : ''}>
                <li>{t('aboutUs')}</li>
            </Link>
            </ul>
            <button className='bg-[#FFC231] w-[130px] h-[35px] rounded-full flex justify-center items-center shadow-gray-300 shadow-md'>
                <p className='text-[#009B7E] font-bold text-md m-1'>{t('globo')}</p>
            </button>
            <div className="relative inline-block text-left">
    <div>
        <button onClick={toggleLanguageMenu} type="button" className=" border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
            {t('lenguage')}
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
                </path>
            </svg>
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
              <Icon icon="openmoji:flag-united-states" />
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
  )
}
