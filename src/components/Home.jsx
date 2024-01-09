import React from 'react'
import {Icon} from '@iconify/react'
import { useTranslation } from 'react-i18next'
import Drink from '../assets/Bebida.png'
import Background from '../assets/Vector.png'
import Plate from '../assets/Plate.png'
import { Link } from 'react-router-dom'



export default function Home() {

  const {t} = useTranslation();

  return (
    <main className='w-full'>
      <div className='py-2 px-12'>
        <h2 className='my-5 text-3xl lg:text-5xl lg:w-2/5 text-[#E6328B] font-bold lg:my-10 lg:tracking-wide'>{t('title')}</h2>
        <p className='text-md lg:text-lg text-gray-600'>{t('subtitle')}</p>
        <p className='text-md lg:text-lg text-gray-600'>{t('subtitle2')}</p>
        <Link to={"/menu"}>
          <button className='w-32 h-9 rounded-lg my-8 bg-[#E6328B] bg-opacity-45 text-white font-bold text-lg shadow-gray-300 shadow-md'>
            {t('ourmenu')}
          </button>
        </Link>
        <p className='charm text-xl lg:text-2xl'>{t('slogan')} <span className='text-3xl bg-gradient-to-r from-[#dad266] to-[#E6328B] text-transparent bg-clip-text'>{t('gozice')}</span></p>
      </div>
      <div className=''>
        <img className='absolute bottom-0 right-0 w-[200px] lg:top-14 lg:w-[350px]' src={Drink} alt="" />
        <img className='absolute top-0 right-0  w-[200px] lg:w-[700px] h-screen -z-20' src={Background} alt="" />
        <img className='absolute bottom-0 right-40 w-[180px] lg:top-28  lg:right-80 lg:w-[250px]' src={Plate} alt="" />
      </div>
      <div className='hidden text-xl lg:flex items-center gap-2 lg:text-2xl absolute bottom-2 left-2'>
        <Icon icon="mdi:instagram" />
        <Icon icon="mdi:twitter" />
        <Icon icon="ic:baseline-facebook" />
      </div>
    </main>
 
  )
}

