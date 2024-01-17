import React from 'react'
import { useTranslation } from 'react-i18next'
import classicBowl from '../assets/classicBowl.png'
import blueChiaBowl from '../assets/blueChiaBowl.png'
import rainbowBowl from '../assets/rainbowBowl.png'
import peanutBowl from '../assets/peanutBowl.png'
import Mangozice from '../assets/Mangozice.png'
import Chocozice from '../assets/Chocozice.png'
import Avozice from '../assets/Avozice.png'
import Detozice from '../assets/Detozice.png'
import Oranzice from '../assets/Oranzice.png'
import ClassicSmoothie from '../assets/ClassicSmoothie.png'
import Butterzice from '../assets/Butterzice.png'
import IconSmoothie from '../assets/smoothieIcon.png'
import AcaiBowlIcon from '../assets/AcaiBowlIcon.png'
import AcaiIcon from '../assets/AcaiIcon.png'
import Footer from './Footer'
import Header from './Header'
import Carusel from './Carusel'

export default function Menu() {

  const {t} = useTranslation();

  return (
    <div className='bg-[#efd185] bg-opacity-45'>
      <Carusel/>
      <Header/>
      <div className='my-4 text-center'>
        <h2 className='mt-8 mb-4 text-3xl text-[#2a5d6d] font-bold lg:my-12'>Nuestro Menú</h2>
        <p className='text-md text-[#2a5d6d] px-4 lg:px-50 my-4 font-sans font-medium bai'>
        En Gozice, nos dedicamos a crear momentos de pura delicia y bienestar. Cada uno de nuestros productos ha sido diseñado pensando en ti, combinando calidad superior, ingredientes naturales y un sabor excepcional. Al adentrarte en nuestro menú, descubrirás una selección cuidadosamente elaborada de Açaí Bowls y Smoothies, cada uno con su toque único.
      </p>
      <p className='text-md text-[#2a5d6d] px-4 lg:px-50 my-4 font-sans font-medium bai'>
        <span className='charm font-bold text-xl'> Nuestra misión es simple pero poderosa:</span> brindarte el mejor producto que combine sabor y bienestar.</p>
      </div>
      <div className='categories lg:flex justify-center gap-35  items-center my-16'>
           <div className='my-15 gap-3 flex justify-center items-center flex-col lg:gap-11'> 
            <img className='w-[60px]' src={AcaiBowlIcon} alt="" />
              <button style={{ boxShadow: "0px 4px #48889C", border: "border: 1px solid black"}} className='bg-[#009B7E] w-[100px] h-[35px] rounded-full'>
                <p className='bai text-white text-sm'>Acai Bowl</p>
              </button>
           </div>
       
            <div className='my-15 gap-3 flex items-center justify-center flex-col lg:gap-8'>
              <img className='w-[55px]' src={IconSmoothie} alt="" />
              <button style={{ boxShadow: "0px 4px #48889C", border: "border: 1px solid black"}} className='bg-[#009B7E] w-[100px] h-[35px] rounded-full'>
                <p className='bai text-white text-sm'>Smoothies</p>
              </button>
            </div>
          
          <div className='my-8 flex items-center justify-center flex-col lg:gap-4'>
          <img className='w-[70px] my-3' src={AcaiIcon} alt="" />
            <button style={{ boxShadow: "0px 4px #48889C", border: "border: 1px solid black"}} className='bg-[#009B7E] w-[100px] h-[35px] rounded-full'>
              <p className='bai text-white text-sm'>Small Acai</p>
            </button>
          </div>
          
      </div>
    <div className='grid grid-cols-1 justify-center items-center scroll'>
      <h2 className='text-center my-8 lg:m-8 text-[#E6328B] font-bold text-2xl lg:my-12 uppercase'>{t('bowls')}</h2>
        <div className='grid grid-cols-1 lg:grid lg:grid-cols-3 items-center gap-8 mt-4 mb-12 mx-14'>
          <div className='flex-col lg:flex-row flex justify-center items-center'>
            <img className='w-[100px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={classicBowl}  alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#48889C] font-bold my-2'>Classic<span className='flex items-center justify-center'>Acai Bowl</span></h3>
              <p className='text-[#B2B2B2] w-72 text-center text-md px-4'>{t('classic')}</p>
            </div>
          </div>
          <div className='flex-col lg:flex-row flex justify-center items-center'>
            <img className='w-[100px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={rainbowBowl}  alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#48889C] font-bold my-2'>Rainbow<span className='flex items-center justify-center'>Acai Bowl</span></h3>
              <p className='text-[#B2B2B2] w-72 text-center text-md px-4'>{t('rainbow')}</p>
            </div>
          </div>
          <div className='flex-col lg:flex-row flex justify-center items-center'>
            <img className='w-[100px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={blueChiaBowl} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#48889C] font-bold my-2'>BlueChia<span className='flex items-center justify-center'>Acai Bowl</span></h3>
              <p className='text-[#B2B2B2] w-72 text-center text-md px-4'>{t('rainbow')}</p>
            </div>
          </div>
          <div className='flex-col lg:flex-row flex justify-center items-center'>
            <img className='w-[100px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={peanutBowl} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#48889C] font-bold my-2'>Bliss Peanut<span className='flex items-center justify-center'>Acai Bowl</span></h3>
              <p className='text-[#B2B2B2] w-72 text-center text-md px-4'>{t('bliss')}</p>
            </div>
          </div>
        </div>
        <h2 className='text-center mt-8 lg:m-8 text-[#E6328B] font-bold text-2xl lg:my-12 uppercase'>{t('smoothies')}</h2>
        <div className='grid grid-cols-1 lg:grid lg:grid-cols-3 items-center gap-8 my-8 mx-2'>
        <div className='flex-col lg:flex-row flex justify-center items-center gap-3 mt-2 mb-6 mx-14'>
            <img className='w-[70px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={ClassicSmoothie} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#48889C] font-bold my-2'>Classic<span className='flex items-center justify-center'>Smoothie</span></h3>
              <p className='text-[#B2B2B2] w-52 text-center text-md px-4'>{t('classicSmoothie')}</p>
            </div>
          </div>
          {/* CHOCOZICE */}
          <div className='flex-col lg:flex-row flex justify-center items-center gap-3'>
            <img className='w-[70px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={Chocozice} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#48889C] font-bold my-2'>Chocozice<span className='flex items-center justify-center'>Smoothie</span></h3>
              <p className='text-[#B2B2B2] w-52 text-center text-md px-4'>{t('chocozice')}</p>
            </div>
          </div>
          {/* AVOZICE */}
          <div className='flex-col lg:flex-row flex justify-center items-center gap-3'>
            <img className='w-[70px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={Avozice} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#48889C] font-bold my-2'>Avozice<span className='flex items-center justify-center'>Smoothie</span></h3>
              <p className='text-[#B2B2B2] w-52 text-center text-md px-4'>{t('avozice')}</p>
            </div>
          </div>
          {/* DETOZICE */}
          <div className='flex-col lg:flex-row flex justify-center items-center gap-3'>
            <img className='w-[70px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={Detozice} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#48889C] font-bold my-2'>Detozice<span className='flex items-center justify-center'>Smoothie</span></h3>
              <p className='text-[#B2B2B2] w-52 text-center text-md px-4'>{t('detozice')}</p>
            </div>
          </div>
           {/* MANGOZICE */}
           <div className='flex-col lg:flex-row flex justify-center items-center gap-3'>
            <img className='w-[70px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={Mangozice} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#48889C] font-bold my-2'>Mangozice<span className='flex items-center justify-center'>Smoothie</span></h3>
              <p className='text-[#B2B2B2] w-52 text-center text-md px-4'>{t('mangozice')}</p>
            </div>
          </div>
          {/* ORANZICE */}
          <div className='flex-col lg:flex-row flex justify-center items-center gap-3'>
            <img className='w-[70px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={Oranzice} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#48889C] font-bold my-2'>Oranzice<span className='flex items-center justify-center'>Smoothie</span></h3>
              <p className='text-[#B2B2B2] w-52 text-center text-md px-4'>{t('oranzice')}</p>
            </div>
          </div>
          {/* BUTTERZICE */}
          <div className='flex-col lg:flex-row flex justify-center items-center gap-3'>
            <img className='w-[70px] lg:object-contain lg:transition-transform lg:transform lg:scale-100 lg:hover:scale-125' src={Butterzice} alt="" />
            <div className=''>
              <h3 className='text-lg uppercase text-center text-[#48889C] font-bold my-2'>Butterzice<span className='flex items-center justify-center'>Smoothie</span></h3>
              <p className='text-[#B2B2B2] w-52 text-center text-md px-4'>{t('butterzice')}</p>
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
