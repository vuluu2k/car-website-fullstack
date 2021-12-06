import React from 'react';
import { createContext,useState } from 'react';

export const ConfirmContext = createContext();

const ConfirmContextProvider= ({children})=>{
    const [showConfirmLogout,setShowConfirmLogout]= useState(false);
    const [showConfirmDeleteQuote,setShowConfirmDeleteQuote]=useState({
        show:false,
        quoteId:''
    });
    const [showConfirmDeleteProudctInCart,setShowConfirmDeleteProudctInCart]=useState({
        show:false,
        productId:''
    })

    const confirmContextData={
        showConfirmLogout,setShowConfirmLogout,
        showConfirmDeleteQuote,setShowConfirmDeleteQuote,
        showConfirmDeleteProudctInCart,setShowConfirmDeleteProudctInCart
    };
    return(
        <ConfirmContext.Provider value={confirmContextData}> 
            {children}
        </ConfirmContext.Provider>
    )
}

export default ConfirmContextProvider;