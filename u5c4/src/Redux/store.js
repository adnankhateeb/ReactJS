import { combineReducers, legacy_createStore } from "redux";

import { authReducer } from './AuthRed/reducer';
import { productReducer } from './ProductRed/reducer';

const rootReducer = combineReducers(({
    auth: authReducer,
    product: productReducer
}))

export const store = legacy_createStore(authReducer);
