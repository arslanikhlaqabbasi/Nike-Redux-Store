import React, { useEffect, useState } from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import logo from '../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { setCartQTY, setOpenCart } from '../app/CartSlice'

const Nav = () => {
    const [nav, setNav] =useState(false);
   const dispatch= useDispatch();
   const totalQTY=useSelector(setCartQTY);

   const onCartToggle=()=>{
    dispatch(setOpenCart({cartState:true}))

   }
    const onScroll=()=>{
        if(window.screenY > 30){
            setNav(true);
        }else{
            setNav(false);
        }
    }
    useEffect(()=>{
window.addEventListener('scroll', onScroll);
return ()=>{
    window.removeEventListener('scroll', onscroll);
}
    },{})
      return (
<header className={!setNav ? 'absolute top-7 left-0 blur-effect-theme  bg-slate-700 right-0 z-500 ':'fixed flex items-center  z-[100] justify-center left-0 right-0 h-[9vh]'}>
    <nav className='flex items-center justify-between nike-container'>
        <div className='flex items-center'>
            <img src={logo} alt='img' className='w-16 h-auto'/>
        </div>
        <ul className='flex items-center justify-between gap-1'>
            <li className='grid items-center outline-none
             transition-all active:scale-110  border-none relative'>
                <MagnifyingGlassIcon className='icon-style'/>
            </li>
            <li>
                <HeartIcon className='icon-style'/>
            </li>
            <li>
                <button type='button' onClick={onCartToggle}><ShoppingBagIcon className='icon-style'/>
                <div className={`absolute 
                w-4 h-4 text=[0.65rem]
                loading-tight flex items-center justify-center
                top-7 mx-1 text-slate-900 shadow
                shadow-slate-100 bg-white 
                font-medium rounded-full 
                cursor-pointer transition-all 
                duration-300`}>{totalQTY}</div></button>
            </li>
        </ul>
    </nav>

</header>  )
}

export default Nav