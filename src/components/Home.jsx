import React from 'react'
import {Icon} from '@iconify/react'
import { useTranslation } from 'react-i18next'
import Smile from '../assets/smile.png'
import Background from '../assets/Vector.png'
import smallAcai from '../assets/smallAcai.png'
import { Link } from 'react-router-dom'
import Header from './Header'



export default function Home() {

  const {t} = useTranslation();

  return (
    <main className='w-full h-screen bg-[#E6328B] bg-opacity-20 -z-20'>
       <div className="relative">
      <Header/>
      </div>
      <div className='text-center lg:text-start py-2 px-12'>
        <h2 className='my-5 text-3xl lg:text-5xl lg:w-2/5 text-[#E6328B] font-bold lg:my-8 lg:tracking-wide'>{t('title')}</h2>
        <p className='font-semibold text-md lg:text-lg text-gray-600'>{t('subtitle')}</p>
        <p className='font-semibold text-md lg:text-lg text-gray-600'>{t('subtitle2')}</p>
        <Link to={"/menu"}>
          <button className='bai w-32 h-9 rounded-full my-8 bg-[#E6328B] bg-opacity-45 text-white font-bold text-lg shadow-[#E6328B] shadow-md'>
            {t('ourmenu')}
          </button>
        </Link>
        <p className='charm text-xl lg:text-3xl'>{t('slogan')} <span className='text-3xl bg-gradient-to-r from-[#dad266] to-[#E6328B] text-transparent bg-clip-text'>{t('gozice')}</span></p>
      </div>
      <div className=''>
        <img className='absolute bottom-2 right-10 w-[80px] lg:right-20 lg:top-72 lg:w-[170px]' src={Smile} alt="" />
        <img className='absolute bottom-4 right-56 w-[120px] lg:top-32 lg:right-80 lg:w-[200px]' src={smallAcai} alt="" />
      </div>
      <div className='hidden text-xl lg:flex items-center gap-2 lg:text-2xl absolute bottom-2 left-2'>
        <Icon icon="mdi:instagram" />
        <Icon icon="mdi:twitter" />
        <Icon icon="ic:baseline-facebook" />
      </div>
    </main>
 
  )
}

