import React from 'react'
import {PlayIcon}  from '@heroicons/react/24/solid'

function Clips({clip, imgsrc}) {
  return (
    <>
    <div className='relative h-28 w-32 rounded-xl
     group overflow-hidden cursor-pointer transition-all 
      lg:w-28 md:w-20 sm:w-12 lg:h-24 md:h-[12vh] sm:h-13  duration-300'>
        <img src={imgsrc}
    alt='image'
    className='inset-0 flex 
    transition-opacity duration-500 h-full w-full object-cover  top-0 left-0 right-0 rounded-xl
     opacity-100 z-10'/>
     <div className='sm:top-6 sm:left-6 top-8 left-9 bg-white blurr-effect-theme absolute opacity-100 z-[100]  w-8 h-8 
      flex items-center justify-center rounded-full md:w-5 md:h-5'>
      <PlayIcon className='icon-style md:w-3 md:h-3 text-slate-500'/>
     </div>
    <video 
    autoPlay={true}
    loop={true}
    muted={true}
    playsInline={true}
    className='absolute top-0
     left-0 right-0 flex h-full w-full
      opacity-0  rounded-xl object-cover z-0 group-hover:opacity-80 group-hover:z-20'>
        <source type='video/mp4' src={clip}/>
        </video></div>
        </>
  )
}

export default Clips;