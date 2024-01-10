import React from 'react'
import Bowl from '../assets/Bowl.png'
import Smoothies from '../assets/Smoothies.png'
import Mango from '../assets/Mango.png'
import Arandanos from '../assets/Arandanos.png'
import AboutUsGrid from './AboutUsGrid'
import quality from '../assets/quality1.png'
import service from '../assets/service1.png'
import mission from '../assets/mission.png'
import about from '../assets/about.png'
import { useTranslation } from 'react-i18next'
import Footer from './Footer'


export default function AboutUs() {

  const {t} = useTranslation();

  return (
    <div>
      <section className='text-center grid grid-cols-1 p-4 w-full lg:container lg:grid-cols-2 items-center justify-center lg:auto-rows-[25rem] gap-8 mx-auto lg:p-20'>
      <div className='text-[#EC5AA2]'>
        <AboutUsGrid image={about} title={t('about')} paragraphs={t('aboutText')}/>
      </div>
      <img className='lg:w-full lg:h-full lg:object-contain' src={Bowl} alt="" />
      <img className='order-4 lg:w-full lg:h-full lg:object-contain' src={Smoothies} alt="" />
      <div className='text-[#E7E03A]'>
        <AboutUsGrid  image={mission} title={t('mission')} paragraphs={t('missionText')}/>
      </div>
      </section>
      <section className='grid grid-cols-1 p-4 w-full lg:container lg:grid-cols-2 items-center justify-center lg:auto-rows-[25rem] gap-8 mx-auto lg:p-20'>
      <div className='text-[#4A88E5] img-size'>
      <AboutUsGrid  image={quality} title={t('high')} paragraphs={t('highText')} />
      </div>
      <img className='lg:w-full lg:h-full lg:object-contain' src={Arandanos} alt="" />
      <img className='order-4 lg:w-full lg:h-full lg:object-contain' src={Mango} alt="" />
     <div className='text-[#F1751C] img-size'>
       <AboutUsGrid  image={service} title={t('service')} paragraphs={t('serviceText')} />
     </div>
     </section>
   <div className='mt-20'>
     <Footer/>
   </div>
    </div>
  

  )
}

