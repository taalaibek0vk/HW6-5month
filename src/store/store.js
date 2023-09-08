import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer } from "./cartReducer";
import thunk from "redux-thunk"; 

const rootReducer = combineReducers({
  cart: cartReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk) 
);