import React from 'react'
import {Icon} from '@iconify/react'
import { useTranslation } from 'react-i18next'
import Bebida from '../assets/Bebida.png'
import Plate from '../assets/StrawBerrys.png'
import Letters from '../assets/Letters.png'
import { Link } from 'react-router-dom'
import Header from './Header'
import Carusel from './Carusel'



export default function Home() {

  const {t} = useTranslation();

  return (
    <main className='w-full h-full'>
      <Carusel/>
      <Header/>
      <div className='text-center xl:text-start xl:px-12 '>
        <h2 className='my-6 text-3xl px-12 xl:px-0 xl:text-5xl xl:w-2/5 2xl:text-6xl text-[#E6328B] font-bold xl:my-6 xl:tracking-wide 2xl:mt-20'>{t('title')}</h2>
        <p className='bai px-4 font-semibold xl:text-xl xl:px-0 text-gray-600 xl:w-2/4 2xl:text-2xl'>{t('subtitle')}</p>
        <Link to={"/menu"}>
          <button style={{ boxShadow: "0px 6px #48889C" }} className='bai uppercase border-2 border-[#48889C] w-32 h-9 rounded-full mt-6 mb-6 xl:my-8 bg-[#E6328B] bg-opacity-45 text-white font-bold text-sm shadow-[#E6328B] shadow-md 2xl:w-42 2xl:h-12 2xl:text-xl'>
            {t('ourmenu')}
          </button>
        </Link>
        <p className='charm text-xl xl:text-2xl 2xl:text-3xl 2xl:my-8'>{t('slogan')} <span className='text-3xl bg-gradient-to-r from-[#dad266] to-[#E6328B] text-transparent bg-clip-text'>{t('gozice')}</span></p>
      </div>
      <div className=''>
        <img className='absolute bottom-2 right-0 w-[145px] xl:right-0 xl:top-56 xl:w-[250px] object-contain 2xl:top-70 2xl:w-[300px]' src={Bebida} alt="" />
        <img className='absolute bottom-2 right-44 w-[150px] xl:top-44 xl:right-56 xl:w-[240px] object-contain 2xl:top-52' src={Plate} alt="" />
        <img className='absolute -bottom-5 right-39 w-[195px] xl:top-36 xl:right-45 xl:w-[325px] object-contain rotating-image 2xl:top-44' src={Letters} alt="" />
      </div>
    </main>
  )
}

