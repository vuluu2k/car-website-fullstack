import {SET_ACCOUNT,
    ACCOUNT_LOAD_SUCCESS,
    ACCOUNT_LOAD_FAIL,
    ACCOUNT_UPDATE_SUCCESS,
    DELETE_ACCOUNT_SUCESS,
    PRODUCT_LOAD_SUCCESS} from '../contexts/contants';

// ------------------------------------------------
// import {ACCOUNT_LOAD_SUCCESS,
//         ACCOUNT_LOAD_FAIL,
//         ACCOUNT_UPDATE_SUCCESS,
//         DELETE_ACCOUNT_SUCESS
// } from '../contexts/contants';
// ------------------------------------------------

export const accountReducer=(state,action)=>{
    const { type,payload:{isAuthenticated,account}} = action;
    switch(type){
        case SET_ACCOUNT:
            return{ 
                ...state,
                accountLoading:false,
                isAuthenticated,
                account
            }


        default:
            return state;
    }
}
//--------------------------------------

export const accountReducer2= (state,action)=>{
    const {type,payload} = action;
    switch(type){
        case PRODUCT_LOAD_SUCCESS:
            return{
                ...state,
                accounts:payload,
                accountsLoading:false
            }
        case ACCOUNT_LOAD_FAIL:
            return {
                ...state,
                accounts:[],
                accountsLoading:false
            }
        case ACCOUNT_UPDATE_SUCCESS:
            const newAcounts=state.acounts.map(account =>{
                if(account._id===payload._id)
                    return payload
                return account
            }) 
            return{
                ...state,
                products:newAcounts
            } 
        case DELETE_ACCOUNT_SUCESS:
            return{
                ...state,
                accounts:state.accounts.filter(account=>{
                    return account._id!==payload;
                })
            }
        default:
            return state;
    }

} 


