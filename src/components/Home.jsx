import React from 'react'
import {Icon} from '@iconify/react'
import { useTranslation } from 'react-i18next'
import Bebida from '../assets/Bebida.png'
import Background from '../assets/Vector.png'
import Plate from '../assets/Plate.png'
import { Link } from 'react-router-dom'
import Header from './Header'
import Carusel from './Carusel'



export default function Home() {

  const {t} = useTranslation();

  return (
    <main className='w-full h-screen'>
      <Carusel/>
      <Header/>
      <div className='text-center lg:text-start py-2'>
        <h2 className='my-5 text-3xl px-14 lg:text-5xl lg:w-2/5 text-[#E6328B] font-bold lg:my-6 lg:tracking-wide'>{t('title')}</h2>
        <p className='px-8 font-semibold lg:text-lg text-gray-600'>{t('subtitle')}</p>
        <p className='px-8 font-semibold lg:text-lg text-gray-600'>{t('subtitle2')}</p>
        <Link to={"/menu"}>
          <button className='bai w-32 h-9 rounded-full mt-6 mb-4 lg:my-8 bg-[#E6328B] bg-opacity-45 text-white font-bold text-lg shadow-[#E6328B] shadow-md'>
            {t('ourmenu')}
          </button>
        </Link>
        <p className='charm text-xl lg:text-2xl'>{t('slogan')} <span className='text-3xl bg-gradient-to-r from-[#dad266] to-[#E6328B] text-transparent bg-clip-text'>{t('gozice')}</span></p>
      </div>
      <div className=''>
        <img className='absolute -bottom-3 right-0 w-[145px] lg:right-0 lg:top-56 lg:w-[250px]' src={Bebida} alt="" />
        <img className='absolute -bottom-3 right-44 w-[150px] lg:top-44 lg:right-80 lg:w-[250px]' src={Plate} alt="" />
      </div>
      <div className='hidden text-xl lg:flex items-center gap-2 lg:text-2xl absolute -bottom-10 left-2'>
        <Icon icon="mdi:instagram" />
        <Icon icon="mdi:twitter" />
        <Icon icon="ic:baseline-facebook" />
      </div>
    </main>
 
  )
}

