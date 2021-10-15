import React from 'react'
import {createContext,useState,useReducer} from 'react';
import {apiUrl,QUOTE_LOAD_SUCCESS,QUOTE_CREATE_SUCCESS} from './constants';
// import {} from '';

export const QuoteContext = createContext();

const QuoteContextProvider=({children})=>{
    // [STATE]
    const [QuoteState,dispatch]=useReducer()
    const [showQuote, setShowQuote] = useState(true);















    const quoteContextData={showQuote,setShowQuote};
    // [CREATE] Đăng kí nhận báo Giá
    return (
        <QuoteContext.Provider value={quoteContextData}>
            {children}
        </QuoteContext.Provider>
    )

}

export default QuoteContextProvider;