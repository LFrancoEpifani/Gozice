import React from 'react'
import { useTranslation } from 'react-i18next'
import ClassicBowl from '../assets/ClassicAcai.png'

export default function Menu() {

  const {t} = useTranslation();

  return (
    <div>
      <h2>{t('bowls')}</h2>
        <div>
          <img className='w-[200px] object-contain' src={ClassicBowl} alt="" />
          <div>
            <h3>Classic Acai</h3>
            <p>Acai, granola, peanut butter, banana, strawberry, blueberry & coconut</p>
          </div>
        </div>
    </div>
  )
}
