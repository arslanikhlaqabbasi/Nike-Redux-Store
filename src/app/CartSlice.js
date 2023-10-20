import toast from "react-hot-toast";
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cartState:false,
    cartItems:localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")):[],
    cartTotalAmt:0,
    cartTotalQTY:0
}
const CartSlice= createSlice({
    initialState,
    name: "cart",
    reducers:{
        setOpenCart:( state,action)=>{
       state.cartState= action.payload.cartState;
        },
        setCloseCart:(state,action)=>{
            state.cartState= action.payload.cartState;
            
        },
        setAddItemToCart:(state,action)=>{
            const itemIndex =state.cartItems.findIndex((item)=>item.id===action.payload.id);
            if(itemIndex>=0){
                state.cartItems[itemIndex].cartQuantity +=1;
toast.success(`Item Quantity added`);
            }else{
                const temp={...action.payload,cartQuantity:1}
                state.cartItems.push(temp);
                toast.success(`${action.payload.title} added to cart`)


            }
            localStorage.setItem("cart",JSON.stringify(state.cartItems))

        },
        setRemoveItemCart:(state,action)=>{
            const removeItem=state.cartItems.filter((item)=>item.id!==action.payload.id);
            state.cartItems=removeItem;
            localStorage.setItem("cart",JSON.stringify(state.cartItems));
            toast.success(`${action.payload.title} Removed From Cart`)

        },
        setIncreaseItemQTY:(state,action)=>{
            const itemIndex =state.cartItems.findIndex((item)=>item.id===action.payload.id);
            if(itemIndex>=0){
                state.cartItems[itemIndex].cartQuantity +=1;
toast.success(`Item Quantity accended`);
            }
            localStorage.setItem("cart",JSON.stringify(state.cartItems))

        },
        setDecreaseItemQTY:(state,action)=>{
            const itemIndex =state.cartItems.findIndex((item)=>item.id===action.payload.id);
            if(state.cartItems[itemIndex].cartQuantity>=1){
                state.cartItems[itemIndex].cartQuantity -=1;
toast.success(`Item Quantity deascrese`);
            }
            localStorage.setItem("cart",JSON.stringify(state.cartItems))

        },
        setClearCartItems:(state,action)=>{
            state.cartItems=[];
            toast.success(`all items cleared`);
            localStorage.setItem("cart",JSON.stringify(state.cartItems))

        },
        setGetTotals:(state,action)=>{
         let {totalAmount,totalQTY}=   state.cartItems.reduce((cartTotal,cartItem)=>{
            const{price,cartQuantity}=cartItem;
            const total=price*cartQuantity;
            cartTotal.totalAmount+=total;
            cartTotal.totalQTY+=cartQuantity;
            return cartTotal;
         },{
                totalAmount:0,
                totalQTY:0,
            });
                state.cartTotalAmt=totalAmount;
                state.cartTotalQTY=totalQTY;

        }

    }
});
export const {setDecreaseItemQTY,setGetTotals,setIncreaseItemQTY,setClearCartItems,setCloseCart,setOpenCart,setAddItemToCart,setRemoveItemCart}=CartSlice.actions;
export default CartSlice.reducer;
export const selectCartItems=(state)=>state.cart.cartItems;
export const selectCartState =(state)=>state.cart.cartState;
export const setTotalAmount =(state)=>state.cart.cartTotalAmt;
export const setCartQTY =(state)=>state.cart.cartTotalQTY;