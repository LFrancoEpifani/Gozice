import React from 'react'
import { useTranslation } from 'react-i18next'
import Background from '../assets/Vector.png'
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
import Footer from './Footer'
import Header from './Header'

export default function Menu() {

  const {t} = useTranslation();

  return (
    <div>
      <Header/>
    <div className='grid grid-cols-1 justify-center items-center scroll'>
      <h2 className='text-center lg:text-start my-8 m-8 text-[#E6328B] font-bold text-2xl lg:my-12 uppercase'>{t('bowls')}</h2>
        <div className='grid grid-cols-1 lg:grid lg:grid-cols-3 items-center gap-8 my-10 mx-14'>
          <div className='flex-col lg:flex-row flex justify-center items-center'>
            <img className='w-[100px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={ClassicBowl} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#6D6E70] font-bold'>Classic<span className='flex items-center justify-center'>Acai Bowl</span></h3>
              <p className='text-[#B2B2B2] w-72 text-center text-sm'>{t('classic')}</p>
            </div>
          </div>
          <div className='flex-col lg:flex-row flex justify-center items-center'>
            <img className='w-[100px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={RainbowBowl} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#6D6E70] font-bold'>Rainbow<span className='flex items-center justify-center'>Acai Bowl</span></h3>
              <p className='text-[#B2B2B2] w-72 text-center text-sm'>{t('rainbow')}</p>
            </div>
          </div>
          <div className='flex-col lg:flex-row flex justify-center items-center'>
            <img className='w-[100px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={BlueChiaBowl} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#6D6E70] font-bold'>Blue Chia<span className='flex items-center justify-center'>Acai Bowl</span></h3>
              <p className='text-[#B2B2B2] w-72 text-center text-sm'>{t('blue')}</p>
            </div>
          </div>
          <div className='flex-col lg:flex-row flex justify-center items-center'>
            <img className='w-[100px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={BlissPeanutBowl} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#6D6E70] font-bold'>Bliss Peanut<span className='flex items-center justify-center'>Acai Bowl</span></h3>
              <p className='text-[#B2B2B2] w-72 text-center text-sm'>{t('bliss')}</p>
            </div>
          </div>
        </div>
        <h2 className='text-center lg:text-start my-8 m-8 text-[#E6328B] font-bold text-2xl lg:my-12 uppercase'>{t('smoothies')}</h2>
        <div className='grid grid-cols-1 lg:grid lg:grid-cols-3 items-center gap-8 my-8 mx-2'>
        <div className='flex-col lg:flex-row flex justify-center items-center gap-3 my-4'>
            <img className='w-[70px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={ClassicSmoothie} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#6D6E70] font-bold'>Classic<span className='flex items-center justify-center'>Smoothie</span></h3>
              <p className='text-[#B2B2B2] w-52 text-center text-sm'>{t('classicSmoothie')}</p>
            </div>
          </div>
          {/* CHOCOZICE */}
          <div className='flex-col lg:flex-row flex justify-center items-center gap-3'>
            <img className='w-[70px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={Chocozice} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#6D6E70] font-bold'>Chocozice<span className='flex items-center justify-center'>Smoothie</span></h3>
              <p className='text-[#B2B2B2] w-52 text-center text-sm'>{t('chocozice')}</p>
            </div>
          </div>
          {/* AVOZICE */}
          <div className='flex-col lg:flex-row flex justify-center items-center gap-3'>
            <img className='w-[70px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={Avozice} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#6D6E70] font-bold'>Avozice<span className='flex items-center justify-center'>Smoothie</span></h3>
              <p className='text-[#B2B2B2] w-52 text-center text-sm'>{t('avozice')}</p>
            </div>
          </div>
          {/* DETOZICE */}
          <div className='flex-col lg:flex-row flex justify-center items-center gap-3'>
            <img className='w-[70px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={Detozice} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#6D6E70] font-bold'>Detozice<span className='flex items-center justify-center'>Smoothie</span></h3>
              <p className='text-[#B2B2B2] w-52 text-center text-sm'>{t('detozice')}</p>
            </div>
          </div>
           {/* MANGOZICE */}
           <div className='flex-col lg:flex-row flex justify-center items-center gap-3'>
            <img className='w-[70px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={Mangozice} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#6D6E70] font-bold'>Mangozice<span className='flex items-center justify-center'>Smoothie</span></h3>
              <p className='text-[#B2B2B2] w-52 text-center text-sm'>{t('mangozice')}</p>
            </div>
          </div>
          {/* ORANZICE */}
          <div className='flex-col lg:flex-row flex justify-center items-center gap-3'>
            <img className='w-[70px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={Oranzice} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#6D6E70] font-bold'>Oranzice<span className='flex items-center justify-center'>Smoothie</span></h3>
              <p className='text-[#B2B2B2] w-52 text-center text-sm'>{t('oranzice')}</p>
            </div>
          </div>
          {/* BUTTERZICE */}
          <div className='flex-col lg:flex-row flex justify-center items-center gap-3'>
            <img className='w-[70px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={Butterzice} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#6D6E70] font-bold'>Butterzice<span className='flex items-center justify-center'>Smoothie</span></h3>
              <p className='text-[#B2B2B2] w-52 text-center text-sm'>{t('butterzice')}</p>
            </div>
          </div>
        </div>
        <div className='mt-20'>
        <Footer/>
        </div>
    </div>
    </div>
  )
}
