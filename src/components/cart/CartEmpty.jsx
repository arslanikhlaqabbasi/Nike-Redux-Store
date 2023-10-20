import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import React from 'react'
import emptybag from '../../assets/emptybag.png'

const CartEmpty = ({onCartToggle}) => {
  return (
    <div className='gap-7 text-center flex items-center justify-center flex-col '><img 
    src={emptybag}
    alt='image'
    className='sm:w-28 h-auto lg:w-36 w-40  object-fill hover:scale-110'/>
    <button type='button' onClick={onCartToggle} className='button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex text-slate-900 gap-3 text-sm px-5 font-semibold  items-center justify-center'><ArrowLeftIcon className='h-5 w-5 text-slate-900'/>
    <span className=''>
      Black to Nike Store</span></button>
    </div>
  )
}

export default CartEmpty