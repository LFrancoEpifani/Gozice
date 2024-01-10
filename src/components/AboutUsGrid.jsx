import React from 'react'
import quality from '../assets/quality.png'

export default function AboutUsGrid({title, paragraphs, image}) {
  return (
    <div className='h-full m-auto'>
        <div className='flex items-center justify-center gap-2'>
            <h2 className='font-bold text-4xl text-center my-8'>{title}</h2>
            <img className='object-contain w-[40px]' src={image} alt="" />
        </div>
        <p className='text-center text-black font-semibold text-lg'>{paragraphs}</p>
    </div>
  )
}

