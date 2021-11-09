export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "";
export const LOCAL_STORAGE_ACCOUNT_NAME='account_store';
export const LOCAL_STORAGE_PRODUCTS_CART_NAME='products_cart_store';

// [QUOTE]
export const QUOTE_CREATE_SUCCESS="QUOTE_CREATE_SUCCESS";
export const QUOTE_LOAD_SUCCESS="QUOTE_LOAD_SUCCESS";
export const QUOTE_LOAD_FAIL="QUOTE_LOAD_FAIL";
export const DELETE_QUOTE_SUCCESS="DELETE_QUOTE_SUCCESS";




// [PRODUCTS]
export const PRODUCT_LOAD_SUCCESS="PRODUCT_LOAD_SUCCESS";
export const PRODUCT_LOAD_FAIL="PRODUCT_LOAD_FAIL";
export const PRODUCT_CREATE_SUCCESS="PRODUCT_CREATE_SUCCESS";
export const PRODUCT_LOAD_DETAIL_SUCCESS="PRODUCT_LOAD_DETAIL_SUCCESS"
export const DELETE_PRODUCT_SUCESS="DELETE_PRODUCT_SUCESS";
export const PRODUCT_UPDATE_SUCCESS="PRODUCT_UPDATE_SUCCESS";
// [ACCOUNT]

 export const SET_ACCOUNT="SET_ACCOUNT";
//  ------------------------------------
 export const GET_ACCOUNT="GET_ACCOUNT";
 export const ACCOUNT_LOAD_SUCCESS="ACCOUNT_LOAD_SUCCESS";
 export const ACCOUNT_LOAD_FAIL="ACCOUNT_LOAD_FAIL";
 export const ACCOUNT_UPDATE_SUCCESS="ACCOUNT_UPDATE_SUCCESS";
 export const DELETE_ACCOUNT_SUCESS="DELETE_ACCOUNT_SUCESS";


// -------------------------------------
