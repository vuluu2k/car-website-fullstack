export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "";
export const LOCAL_STORAGE_TOKEN_NAME='Product_Car';

export const QUOTE_CREATE_SUCCESS="QUOTE_CREATE_SUCCESS";
export const QUOTE_LOAD_SUCCESS="QUOTE_LOAD_SUCCESS";