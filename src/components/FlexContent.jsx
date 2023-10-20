import React from 'react'

const FlexContent = ({ifExists, endpoint:{title, subtitle,text,img,url,btn,heading}}) => {
  return (
    <div className={`flex items-center
     justify-between lg:flex-col lg:justify-center nike-container
      ${ifExists ? 'flex-row-reverse':'flex-row'}`}>
        <div className=' grid items-center lg:justify-center max-w-lg lg:max-w-none w-full md:text-center'>
            <h1 className='text-4xl sm:text-3xl font-bold text-gradient'>{heading}</h1>
            <h1 className=' text-5xl 
            md:text-3xl
            sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg'>{title}</h1>
            <p className='xl:text-sm my-4 text-slate-900'>{text}</p>
            <a className='flex items-center ' target='_blank' href={url}>
                <button className='button-theme bg-slate-900 shadow-slate-900 text-slate-100
                 py-1.5' type='button' >{btn}</button></a>
        </div>
        <div className='flex items-center max-w-xl
        w-full justify-center relative lg:max-w-none'>
            <img alt='image' src={img}
            className={`
            ${ifExists?'h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12':' h-72 lg:h-64 xsm:h-40 sm:h-48 md:h-60 -rotate-[19deg] hover:rotate-[12]'}
            w-auto object-fill  tranisition-theme `}/>
        </div>
    </div>
  )
}

export default FlexContent