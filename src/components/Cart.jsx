import React, { useEffect } from 'react'
import CartCount from './cart/CartCount'
import CartEmpty from './cart/CartEmpty'
import CartItem from './cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems, selectCartState, setCartQTY, setCloseCart, setGetTotals, setTotalAmount } from '../app/CartSlice'
 


const Cart = () => {
  const dispatch= useDispatch();
  const ifCartState =useSelector(selectCartState);
  const cartItems= useSelector(selectCartItems);
  const totalamt=useSelector(setTotalAmount);
  const totalQTY=useSelector(setCartQTY);
  const onCartToggle=()=>{
   dispatch(setCloseCart({cartState:false}))

  }
  useEffect(()=>{
    dispatch(setGetTotals())
  },[cartItems,dispatch])
  return (
    <div className={`fixed top-0 left-0 right-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${ifCartState?' visible translate-x-0':' invisible translate-x-0'}`}>
        <div className={`blur-effect-theme h-screen w-xl absolute right-0`}>
            <CartCount totalQTY={totalQTY} onCartToggle={onCartToggle}/>
            {cartItems.length === 0 ? <CartEmpty onCartToggle={onCartToggle}/>:<div><div>{cartItems?.map((val,i)=>(<CartItem key={i} item={val}/>))}</div></div>}
            <div className='fixed bottom-0 bg-white w-full px-5 py-2 grid items-center'>
          <div className='flex items-center justify-between'><h1 className='text-base font-semo uppercase'>SubTotal</h1>
          <h1 className='text-sm rounded  text-slate-900 px-1 py-0.5 '>${totalamt}</h1></div>
          <div className='grid items-center gap-2'>
            <p className=' '>Texes and shipping will calculate at shipping</p>
            <button type='button' className='text-center button-theme bg-theme-cart text-white '>Check Out</button>
          </div>
        </div>
        </div>

    </div>
  )
}

export default Cart