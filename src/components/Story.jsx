import React from 'react'
import Title from './utils/Title'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {truncate} from 'lodash'
import { ClockIcon, HashtagIcon, HeartIcon } from '@heroicons/react/24/solid';


const Story = ({story:{title,news}}) => {
    const slideOption={perPage:4,
    perMove:1,
type:'loop',
atrewind:true,
gap:'1rem',
keyboard:'global',
pagination: false,
padding:'2rem',
breakpoints: {
    1200:{perPage:3},
    991:{perPage:2.3},
    768:{perPage:2},
    500:{perPage:1.3},
    475:{perPage:1},
},
};
  return (
    <div className='nike-container mb-11'>
        <Title title={title}/>
        <div className='mt-7'>
            <Splide options={slideOption}>
                {news.map((val,i)=>(
                    <SplideSlide className='mb-0.5'>
                        <div className='relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200'>
                           <div className='flex items-center justify-center'> <img src={val.img} alt='image' className='w-full h-auto shadow object-cover rounded-tl-lg rounded-tr-lg shadow-slate-200'/></div>
                           <div className='flex items-center justify-between px-4 w-full '>
                            <div className='flex items-center gap-0.5'><HeartIcon className='icon-style text-red-500 w-5 h-5 '/><span className='text-xs font-bold'>{val.like}</span></div>
                            <div className='flex items-center gap-0.5'><ClockIcon className='icon-style text-black h-4 w-4'/><span className='text-xs font-bold'>{val.time}</span></div>
                            <div className='flex items-center gap-0.5'><HashtagIcon className='icon-style text-blue-600 h-5 w-5'/><span className='text-xs font-bold'>{val.by}</span></div>
                           </div>
                           <div className='grid px-4 justify-items-start items-center'>
                            <h1 className='text-base font-semibold lg:text-sm'>{val.title}</h1>
                            <p className='text-sm text-justify lg:text-xs'>{truncate(val.text, {length:175})}</p>
                           </div>
                           <div className='flex items-center justify-center px-4'>
                            <a className='w-full bg-gradient-to-b from-slate-900 shadow-md shadow-black button-theme text-center py-1.5 text-slate-100 to-gray-900'
                            role={"button"} target='_blank' href={val.url}>{val.btn}</a>
                           </div>
                        </div>
                    </SplideSlide>

                ))}
            </Splide>

        </div>
    </div>
  )
}

export default Story