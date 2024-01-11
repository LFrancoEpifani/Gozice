import React from 'react'
import { useTranslation } from 'react-i18next';
import Smile from '../assets/smile2.png'

export default function Carusel() {

    const {t} = useTranslation();

  return (
    <div className="overflow-hidden bg-[#ef226a] bg-opacity-90 border border-black ">
    <div className="animate-slide flex justify-center items-center gap-3 quick font-medium text-black text-xl">
      <span className="mx-4">{t('goziceSlider')}</span>
      <img className='mx-4 w-[60px] h-[60px] m-auto' src={Smile} alt="" />
      <span className='mx-4'>Còrsega 263</span>
      <span className="mx-4">{t('goziceSlider')}</span>
      <img className='mx-4 w-[60px] h-[60px] m-auto' src={Smile} alt="" />
      <span className='mx-4'>Còrsega 263</span>
      <span className="mx-4">{t('goziceSlider')}</span>
      <img className='mx-4 w-[60px] h-[60px] m-auto' src={Smile} alt="" />
      <span className='mx-4'>Còrsega 263</span>
      <span className="mx-4">{t('goziceSlider')}</span>
      <img className='mx-4 w-[60px] h-[60px] m-auto' src={Smile} alt="" />
      <span className='mx-4'>Còrsega 263</span>
      <span className="mx-4">{t('goziceSlider')}</span>
      <img className='mx-4 w-[60px] h-[60px] m-auto' src={Smile} alt="" />
      <span className='mx-4'>Còrsega 263</span>
    </div>
  </div>

)
}
