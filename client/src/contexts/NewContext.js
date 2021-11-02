import React from 'react';
import { createContext,useReducer,useEffect } from 'react';
import {newReducer} from '../reducers/newReducer';
import {
    apiUrl,NEW_LOAD_SUCCESS,
    NEW_LOAD_FAIL
} from './contants';
import axios from 'axios';

export const NewContext= createContext();

const NewContextProvider = ({children}) =>{

    const [newState,dispatch]=useReducer(newReducer,{
        news:[],
        newsLoading:true
    })

    // [GET] PRODUCTS
    const getNew=async ()=>{
        try {
            const response=await axios.get(`${apiUrl}/news`)
            if(response.data.success){
                dispatch({type:NEW_LOAD_SUCCESS,payload:response.data.news})
            }
        } catch (e) {
            dispatch({type:NEW_LOAD_FAIL})
        }
    }

    const newContextData={newState, getNew}
    return (
        <NewContext.Provider value={newContextData}>
            {children}
        </NewContext.Provider>
    )

}

export default NewContextProvider;