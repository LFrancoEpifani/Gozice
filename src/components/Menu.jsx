import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Menu() {

  const {t} = useTranslation();

  return (
    <div>
        <div>
          <h2>{t('bowls')}</h2>
        </div>
    </div>
  )
}
