import {
    NEW_LOAD_SUCCESS,
    NEW_LOAD_FAIL
} from '../contexts/contants';

export const newReducer=(state,action)=>{
    const {type,payload} =action;
    switch(type){
        case NEW_LOAD_SUCCESS:
            return {
                ...state,
                news:payload,
                newsLoading:false
            }
        case NEW_LOAD_FAIL:
            return {
                ...state,
                news:[],
                newsLoading:false
            }
       
        default:
            return state;
    }
}