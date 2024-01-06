import React from 'react'
import { useTranslation } from 'react-i18next'
import ClassicBowl from '../assets/ClassicAcai.png'
import BlueChiaBowl from '../assets/BlueChia.png'
import RainbowBowl from '../assets/Rainbow.png'
import BlissPeanutBowl from '../assets/BlissPeanut.png'
import Mangozice from '../assets/Mangozice.png'
import Chocozice from '../assets/Chocozice.png'
import Avozice from '../assets/Avozice.png'
import Detozice from '../assets/Detozice.png'
import Oranzice from '../assets/Oranzice.png'
import ClassicSmoothie from '../assets/ClassicSmoothie.png'
import Butterzice from '../assets/Butterzice.png'

export default function Menu() {

  const {t} = useTranslation();

  return (
    <div className='scroll'>
      <h2 className='m-8 text-[#E6328B] font-bold text-2xl'>{t('bowls')}</h2>
        <div className='grid grid-cols-3 items-center gap-8 my-10 mx-6'>
          <div className='flex justify-center items-center'>
            <img className='w-[100px] object-contain transition-transform transform scale-100 hover:scale-125' src={ClassicBowl} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center'>Classic Acai Bowl</h3>
              <p className='text-[#B2B2B2] w-72 text-center text-sm'>Acai, granola, peanut butter, banana, strawberry, blueberry & coconut</p>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img className='w-[100px] object-contain transition-transform transform scale-100 hover:scale-125' src={RainbowBowl} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center'>Rainbow Acai Bowl</h3>
              <p className='text-[#B2B2B2] w-72 text-center text-sm'>Acai, mango, pitaya, granola, banana, strawberry & blueberry</p>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img className='w-[100px] object-contain transition-transform transform scale-100 hover:scale-125' src={BlueChiaBowl} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center'>Blue Chia Acai Bowl</h3>
              <p className='text-[#B2B2B2] w-72 text-center text-sm'>Acai, blue chia, granola, almond butter, banana, blueberry & hemp seeds</p>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img className='w-[100px] object-contain transition-transform transform scale-100 hover:scale-125' src={BlissPeanutBowl} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center'>Bliss Peanut Acai Bowl</h3>
              <p className='text-[#B2B2B2] w-72 text-center text-sm'>Acai, granola, banana, strawberry, cacao & double peanut butter.</p>
            </div>
          </div>
        </div>
        <h2 className='m-8 text-[#E6328B] font-bold text-2xl'>{t('smoothies')}</h2>
        <div className='grid grid-cols-3 items-center gap-8 my-10 mx-6'>
        <div className='flex justify-center items-center'>
            <img className='w-[100px] object-contain transition-transform transform scale-100 hover:scale-125' src={ClassicSmoothie} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center'>Classic Smoothie</h3>
              <p className='text-[#B2B2B2] w-72 text-center text-sm'>strawberrys, banana, non fat yogurt & white chocolate</p>
            </div>
          </div>
          {/* CHOCOZICE */}
          <div className='flex justify-center items-center'>
            <img className='w-[100px] object-contain transition-transform transform scale-100 hover:scale-125' src={Chocozice} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center'>Chocozice Smoothie</h3>
              <p className='text-[#B2B2B2] w-72 text-center text-sm'>chocolate, cocounat, non fat yogurt & banana</p>
            </div>
          </div>
          {/* AVOZICE */}
          <div className='flex justify-center items-center'>
            <img className='w-[100px] object-contain transition-transform transform scale-100 hover:scale-125' src={Avozice} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center'>Avozice Smoothie</h3>
              <p className='text-[#B2B2B2] w-72 text-center text-sm'>spinach, green apple, kiwi, ginger & lemon.</p>
            </div>
          </div>
          
        </div>
    </div>
  )
}
