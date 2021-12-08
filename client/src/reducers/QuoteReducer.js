import {QUOTE_CREATE_SUCCESS,QUOTE_LOAD_SUCCESS} from '../contexts/constants';


export const quoteReducer=(state,action)=>{
    const {type,payload}=action;
    switch(type) {
        case QUOTE_LOAD_SUCCESS:
            return {
                ...state,
                posts:payload,
                postsLoading:false
            }
        case QUOTE_CREATE_SUCCESS:
            return {
                ...state,
                quotes:[...state.quotes,payload]
            }
        default:
            return state;
    }
}