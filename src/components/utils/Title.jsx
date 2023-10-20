import React from 'react'

const Title = ({title}) => {
  return (
    <div className='grid items-center'><h1 className='text-slate-900 
    filter text-5xl font-bold md:text-3xl lg:text-4xl drop-shadow-lg'>{title}</h1></div>
  )
}

export default Title;