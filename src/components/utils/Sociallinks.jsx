import React from 'react'

function Sociallinks({icon}) {
  return (
    <div><img src={icon} alt='socalicon' className='w-8 h-8 flex item-center cursor-pointer md:w-6 sm:w-5 transistion-all hover:scale-110 '/></div>
  )
}

export default Sociallinks;