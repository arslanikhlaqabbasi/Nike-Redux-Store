import React from 'react'
import {StarIcon, ShoppingBagIcon} from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux';
import { setAddItemToCart,setOpenCart } from '../../app/CartSlice'


const Item = ({ifExists,id,color, shadow, title,text,img,btn,rating,price}) => {
    console.log('image',img);
    const dispatch=useDispatch();
    const onAddToCart=()=>{
      const item={id,color, shadow, title,text,img,price};
dispatch(setAddItemToCart(item)) 
   }
   const onCartToggle=()=>{
    dispatch(setOpenCart({cartState:true}))

   }


  return (<>
    <div className={` relative bg-gradient-to-b ${color} ${shadow} py-4
     transition-all ease-in-out hover:scale-105 w-full duration-700
      px-5 rounded-xl ${ifExists?' justify-items-start':'justify-items-center'} grid `}>

        <div className={`grid  items-center  rounded-xl
        ${ifExists ?'justify-items-start':'justify-items-center'}`}>
        <h1 className='text-slate-200 text-xl  lg:text-lg md:text-base font-medium filter drop-shadow'>{title}</h1>
        <p className='text-slate-200 filter drop-shadow text-base md:text-sm font-normal'>{text}</p>

        <div className='flex flex-item-center y-2'> 


            <div className='flex flex-item-center bg-white/80 px-1 rounded '>
              <h1 className=' text-black text-sm'>{price}</h1> </div>
              <div className='flex flex-item-center'>
          <StarIcon className='icon-style text-slate-900 flex flex-item-center w-5 h-5 '/>
          <div className='flex flex-item-center px-1 rounded '>
              <h1 className=' text-black md:text-sm font-normal text-slate-100'>{rating}</h1> </div>
          </div>

             

        </div>

        <div className='gap-1 flex flex-item-center justify-between g-3 w-28 my-2'>
          <button onClick={()=>onAddToCart()} type='button' className='t-sm p-0.5 shadow shadow-slate-900 flex flex-item-center bg-white/90 blur-effect-theme button-theme '>
          <ShoppingBagIcon className='icon-style text-slate-900 flex flex-item-center'/>
          </button>
        <button type='button' onClick={()=>{onAddToCart(); onCartToggle();}}  className='t-sm p-0.5 shadow shadow-slate-900 flex flex-item-center bg-white/90 blur-effect-theme button-theme'>{btn}</button></div>
        </div>

        <div className={`flex items-center ${ifExists?' absolute top-2 right-0':'justify-items-center'}`}>
            <img src={img} alt='image-itemImage' className={`
            h-36 w-64 md:h-28 md:w-44 transisition-theme 
            hover:-rotate-12 ${ifExists?'  rotate-[-45deg] hover:-rotate-2':'justify-items-center'}`}/>
 
        </div>
    </div>
    </>
  )
}

export default Item;