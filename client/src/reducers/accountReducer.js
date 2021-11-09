import {SET_ACCOUNT,
    ACCOUNT_LOAD_SUCCESS,
    ACCOUNT_LOAD_FAIL,
    ACCOUNT_UPDATE_SUCCESS,
    DELETE_ACCOUNT_SUCESS} from '../contexts/contants';

// ------------------------------------------------
// import {ACCOUNT_LOAD_SUCCESS,
//         ACCOUNT_LOAD_FAIL,
//         ACCOUNT_UPDATE_SUCCESS,
//         DELETE_ACCOUNT_SUCESS
// } from '../contexts/contants';
// ------------------------------------------------

export const accountReducer=(state,action /*,action2*/)=>{
    const { type,payload:{isAuthenticated,account}} = action;

// -------------------------------------------------
    // const {type2,payload2} = action2;
    // switch(type2){
    //     case ACCOUNT_LOAD_SUCCESS:
    //         return {
    //             ...state,
    //             accounts:payload2,
    //             accountsLoading:false
    //         }
    //     case ACCOUNT_LOAD_FAIL:
    //         return {
    //             ...state,
    //             accounts:[],
    //             accountsLoading:false
    //         }
    //     case ACCOUNT_UPDATE_SUCCESS:
    //         const newAcounts=state.acounts.map(account =>{
    //             if(account._id===payload2._id)
    //                 return payload2
    //             return account
    //         })
    //         return{
    //             ...state,
    //             products:newAcounts
    //         } 
    //     case DELETE_ACCOUNT_SUCESS:
    //         return{
    //             ...state,
    //             accounts:state.accounts.filter(account=>{
    //                 return account._id!==payload2;
    //             })
    //         }
    //     default:
    //         return state;
    // }
// -------------------------------------------------

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
