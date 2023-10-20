import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setClearCartItems } from '../../app/CartSlice';


const CartCount = ({onCartToggle,totalQTY}) => {
  const dispatch=useDispatch();
  const onClearItem=()=>{
    dispatch(setClearCartItems())
  }
  return (
    <div className='bg-white h-11 flex 
    items-center justify-between  px-5 sticky top-0 right-0 left-0 w-full gap-20'>
        <div className='flex items-center gap-5 '>
            <div onClick={onCartToggle} className='grid items-center cursor-pointer'><ChevronDoubleLeftIcon className='h-5 w-5 text-slate-900 stroke-[2]'/></div>
            <div className='grid items-center'><h1 className='text-base font-medium text-slate-800'>{totalQTY}<span className='bg-theme-cart px-1 py-0.5 text-slate-100 text-xs'>items</span></h1></div>
        </div>
        <div className='flex items-center '>
            <button type='button' onClick={onClearItem} className='rounded bg-theme-cart active:scale-90 P-0.5  text-white stroke=[2]'>
                <XMarkIcon className='w-5 h-5'></XMarkIcon></button>
        </div>
    </div>
  )
}

export default CartCount