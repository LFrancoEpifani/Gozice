import React from 'react'
import Gozice from '../assets/GoziceLogo.png'
import Globo from '../assets/Globo.png'
import { Icon } from '@iconify/react';

export default function Header() {
  return (
    <div className='flex justify-between p-4'>
        <img className='w-[120px] h-[40px]' src={Gozice} alt="Logo de gozice" />
        <nav className='flex justify-center items-center gap-8'>
            <ul className='flex justify-center items-center gap-8 text-lg'>
                <li>Inicio</li>
                <li>Menu</li>
                <li>Nosotros</li>
            </ul>
            <button className='bg-[#FFC231] w-[140px] h-[40px] rounded-full flex justify-center items-center'>
                <img className='w-[20xp] h-[30px]' src={Globo} alt="Boton direccional hacía globo" />
                <p className='text-[#009B7E] font-bold text-sm'>Haz tu pedido</p>
            </button>
            <button className='text-2xl'>
                <Icon icon="openmoji:flag-spain" />
            </button>
            <button className='text-2xl'>
                <Icon icon="openmoji:flag-united-states" />
            </button>
           
        </nav>
    </div>
  )
}
