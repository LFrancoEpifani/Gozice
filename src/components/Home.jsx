import React from 'react'
import {Icon} from '@iconify/react'
import { useTranslation } from 'react-i18next'
import Drink from '../assets/Bebida.png'
import Background from '../assets/Vector.png'
import Plate from '../assets/Plate.png'


export default function Home() {

  const {t} = useTranslation();

  return (
    <div>
    <main className='container'>
      <div className='py-2 px-12'>
        <h2 className='text-5xl w-2/4 text-[#E6328B] font-bold my-10'>{t('title')}</h2>
        <p className='text-lg text-gray-600'>{t('subtitle')}</p>
        <p className='text-lg text-gray-600'>{t('subtitle2')}</p>
        <button className='w-32 h-9 rounded-lg my-8 bg-[#E6328B] bg-opacity-45 text-white font-bold text-lg shadow-gray-300 shadow-md'>
          {t('ourmenu')}
        </button>
        <p className='charm text-2xl'>{t('slogan')} <span className='text-3xl bg-gradient-to-r from-[#E6328B] to-[#E2DD9A] text-transparent bg-clip-text'>{t('gozice')}</span></p>
      </div>
      <div className=''>
        <img className='absolute top-14 right-0 w-[380px]' src={Drink} alt="" />
        <img className='absolute top-0 right-0 w-[700px] h-[100vh] -z-20' src={Background} alt="" />
        <img className='absolute top-32 right-80 w-[250px]' src={Plate} alt="" />
      </div>
      <div className='flex items-center gap-2 text-2xl absolute bottom-2 left-2'>
        <Icon icon="mdi:instagram" />
        <Icon icon="mdi:twitter" />
        <Icon icon="ic:baseline-facebook" />
      </div>
    </main>
    </div>
  )
}

