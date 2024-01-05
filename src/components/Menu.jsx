import React from 'react'
import { useTranslation } from 'react-i18next'
import ClassicBowl from '../assets/ClassicAcai.png'
import BlueChiaBowl from '../assets/BlueChia.png'
import RainbowBowl from '../assets/Rainbow.png'
import BlissPeanutBowl from '../assets/BlissPeanut.png'

export default function Menu() {

  const {t} = useTranslation();

  return (
    <div>
      <h2 className='m-8 text-[#E6328B] font-bold text-2xl'>{t('bowls')}</h2>
        <div className='grid grid-cols-3 items-center gap-8 my-10 mx-6'>
          <div className='flex justify-center items-center'>
            <img className='w-[100px] object-contain transition-transform transform scale-100 hover:scale-125' src={ClassicBowl} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center'>Classic Acai Bowl</h3>
              <p className='text-[#A5A3A3] w-72 text-center text-sm'>Acai, granola, peanut butter, banana, strawberry, blueberry & coconut</p>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img className='w-[100px] object-contain transition-transform transform scale-100 hover:scale-125' src={RainbowBowl} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center'>Rainbow Acai Bowl</h3>
              <p className='text-[#A5A3A3] w-72 text-center text-sm'>Acai, mango, pitaya, granola, banana, strawberry & blueberry</p>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img className='w-[100px] object-contain transition-transform transform scale-100 hover:scale-125' src={BlueChiaBowl} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center'>Blue Chia Acai Bowl</h3>
              <p className='text-[#A5A3A3] w-72 text-center text-sm'>Acai, blue chia, granola, almond butter, banana, blueberry & hemp seeds</p>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img className='w-[100px] object-contain transition-transform transform scale-100 hover:scale-125' src={BlissPeanutBowl} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center'>Bliss Peanut Acai Bowl</h3>
              <p className='text-[#A5A3A3] w-72 text-center text-sm'>Acai, granola, banana, strawberry, cacao & double peanut butter.</p>
            </div>
          </div>
        </div>
    </div>
  )
}
