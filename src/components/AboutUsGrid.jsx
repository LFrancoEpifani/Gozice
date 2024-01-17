import React from 'react'


export default function AboutUsGrid({title, paragraphs, image}) {
  return (
    <div className='h-full m-auto'>
        <div className='flex items-center gap-2'>
            <h2 className='font-bold text-4xl text-end my-8'>{title}</h2>
            <img className='object-contain w-[40px]' src={image} alt="" />
        </div>
        <p className='text-start text-black font-semibold text-lg'>{paragraphs}</p>
    </div>
  )
}

