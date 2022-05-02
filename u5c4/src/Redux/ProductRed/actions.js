export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_PRODUCTS = "ADD_PRODUCTS";

export const addProduct = (data) => {
   return {
      type: ADD_PRODUCT,
      payload: data,
   };
};

export const addProducts = (data) => {
   return {
      type: ADD_PRODUCTS,
      payload: data,
   };
};
