import { ADD_PRODUCT, ADD_PRODUCTS } from "./actions";

const init = { products: [] };

export const productReducer = (store = init, action) => {
   switch (action.type) {
      case ADD_PRODUCT:
         return { ...store, products: [...store.products, action.payload] };
      case ADD_PRODUCTS:
         return {products: [...action.payload] };
      default:
         return { ...store };
   }
};
