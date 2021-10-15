import React from 'react'
import {createContext,useState} from 'react';

export const QuoteContext = createContext();

const QuoteContextProvider=({children})=>{
    const [showQuote, setShowQuote] = useState(true);
    const quoteContextData={showQuote,setShowQuote};
    return (
        <QuoteContext.Provider value={quoteContextData}>
            {children}
        </QuoteContext.Provider>
    )
}

export default QuoteContextProvider;