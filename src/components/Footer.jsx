import React from 'react'
import Gozice from '../assets/GoziceLogo.png'
import {Icon} from '@iconify/react'

export default function Footer() {
  return (
    <div className='p-2 flex justify-between items-center'>
        <div>
            <img className='w-[70px] lg:w-[100px]' src={Gozice} alt="" />
            <p className='hidden text-[#E6328B] text-xs font-bold lg:flex items-center'>
            Còrsega 263, Barcelona, Spain 
            <Icon className='' icon="ion:location-sharp" />
            </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <div className='flex items-center text-lg lg:text-2xl gap-3 text-[#E6328B]'>
            <Icon icon="mdi:instagram"/>
            <Icon icon="mdi:twitter"/>
            <Icon icon="ic:baseline-facebook"/>
      </div>
      <div>
        <p className='text-center text-xs mt-2 text-[#E6328B]'>
            Website by Luciano Epifani
        </p>
      </div>
        </div>
      <div className='text-[#E6328B]'>
       <div className='flex items-center gap-2 lg:gap-8 text-sm'>
       <Icon icon="ph:link-bold" />
       <p>Incio</p>
       </div>
       <div className='flex items-center gap-2 lg:gap-8 text-sm'>
       <Icon icon="ph:link-bold" />
       <p>Menu</p>
       </div>
       <div className='flex items-center gap-2 lg:gap-8 text-sm'>
       <Icon icon="ph:link-bold" />
       <p>Nosotros</p>
       </div>
      </div>
    </div>
  ) 
}

