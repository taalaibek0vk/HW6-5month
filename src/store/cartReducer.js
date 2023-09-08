import axios from 'axios';

const defaultState = {
  products: [],
  cart: [],
};

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        products: action.payload,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};


export const fetchData = () => {
  return async (dispatch) => {
      const resp = await axios.get('https://dummyjson.com/products?limit=10&skip=10');
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: resp.data.products });
    } 
};
  
export const addToCart = (payload) => ({
    type: 'ADD_TO_CART',
    payload: payload,
});

