import React from 'react';
import { createContext,useState } from 'react';

export const CartContext=createContext();

const CartContextProvider=({children})=>{
    const [showCart,setShowCart]=useState(false);


    const cartContextData={showCart,setShowCart};
    return (
        <CartContext.Provider value={cartContextData}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;