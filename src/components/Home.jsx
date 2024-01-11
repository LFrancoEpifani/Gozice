import React from 'react'
import {Icon} from '@iconify/react'
import { useTranslation } from 'react-i18next'
import Bebida from '../assets/Bebida.png'
import Background from '../assets/Vector.png'
import Plate from '../assets/StrawBerrys.png'
import Letters from '../assets/Letters.png'
import { Link } from 'react-router-dom'
import Header from './Header'
import Carusel from './Carusel'



export default function Home() {

  const {t} = useTranslation();

  return (
    <main className='w-full h-screen'>
      <Carusel/>
      <Header/>
      <div className='text-center lg:text-start lg:px-12'>
        <h2 className='my-6 text-3xl px-12 lg:px-0 lg:text-5xl lg:w-2/5 text-[#E6328B] font-bold lg:my-6 lg:tracking-wide'>{t('title')}</h2>
        <p className='bai px-4 font-semibold lg:text-lg lg:px-0 text-gray-600 lg:w-2/4'>{t('subtitle')}</p>
        <Link to={"/menu"}>
          <button className='bai w-32 h-9 rounded-full mt-6 mb-6 lg:my-8 bg-[#E6328B] bg-opacity-45 text-white font-bold text-lg shadow-[#E6328B] shadow-md'>
            {t('ourmenu')}
          </button>
        </Link>
        <p className='charm text-xl lg:text-2xl'>{t('slogan')} <span className='text-3xl bg-gradient-to-r from-[#dad266] to-[#E6328B] text-transparent bg-clip-text'>{t('gozice')}</span></p>
      </div>
      <div className=''>
        <img className='absolute bottom-6 right-0 w-[145px] lg:right-0 lg:top-56 lg:w-[250px] object-contain' src={Bebida} alt="" />
        <img className='absolute bottom-6 right-44 w-[150px] lg:top-44 lg:right-56 lg:w-[240px] object-contain' src={Plate} alt="" />
        <img className='absolute -bottom-1 right-39 w-[195px] lg:top-36 lg:right-45 lg:w-[325px] object-contain rotating-image' src={Letters} alt="" />
      </div>
    </main>
 
  )
}

