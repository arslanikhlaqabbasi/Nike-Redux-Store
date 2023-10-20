import React from 'react'
import { PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import { setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemCart } from '../../app/CartSlice';


const CartItem = ({ item: { img, text, title, shadow, color, id, price, cartQuantity } }) => {
  const dispatch=useDispatch();
    const  onRemoveItem=()=>{
      dispatch(setRemoveItemCart({id,title,text, color,img,shadow,price,cartQuantity}));
  }
  const onIncreaseItem =()=>{
  dispatch(setIncreaseItemQTY({id,title,text, color,img,shadow,price,cartQuantity}));
  }
  const onDecreaseItem =()=>{
    dispatch(setDecreaseItemQTY({id,title,text, color,img,shadow,price,cartQuantity}));
    
  }
  return (
     <div className=' flex items-center justify-between w-full px-5'>
       <div className='flex items-center'>
         <div className='relative rounded p-3 shadow hover:scale-105'><img src={img} alt='image' className='w-36 h-auto object-fill lg:w-36'/></div>
      </div>
       <div className='grid items-center gap-4 px-2'>
         <div className='grid items-center leading-none '>
          <h1 className='font-medium text-lg text-sky-900 lg:text-sm'>
            {title}
          </h1>
          <p className='text-sm lg:xstext-xs text-slate-900'>{text}</p>
        </div>
         <div className='flex items-center w-full justify-around '>
          <button type='button' className='bg-theme-cart rounded flex items-center justify-center active:scale-90 lg:w-6 lg:h-6' onClick={onIncreaseItem}><MinusIcon className='w-5 text-white h-5 lg:h-4 lg:w-4' /></button>
           <div className='bg-theme-cart rounded flex items-center justify-center  w-5 text-white h-5 lg:h-6 lg:w-6 font-medium lg:text-xs '>{cartQuantity}</div>
          <button type='button' className='bg-theme-cart rounded flex items-center justify-center active:scale-90 lg:w-6 lg:h-6' onClick={onDecreaseItem}><PlusIcon className='w-5 text-white h-5 lg:h-4 lg:w-4' /></button>

        </div>


      </div>
       <div className='grid items-center justify-center pl-14 gap-6'>
         <div className='text-lg lg:text-base text-slate-900 '><h1>${price * cartQuantity}</h1></div>
         <div className=''><button className='bg-theme-cart rounded flex items-center justify-center active:scale-90 lg:w-6 lg:h-6 cursor-pointer' type='button' onClick={onRemoveItem}><TrashIcon className='h-5 w-5 text-white lg:h-4 lg:w-4' /></button></div>
      </div>
    </div>
  )
}

export default CartItem