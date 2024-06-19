import { v4 as uuidv4 } from 'uuid';

const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, { ...action.payload, cartId: uuidv4(), quantity: 1 }]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.cartId !== action.payload.cartId)
      };
    case 'UPDATE_CART_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          item.cartId === action.payload.cartId ? { ...item, quantity: action.payload.quantity } : item
        )
      };
    default:
      return state;
  }
};

export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product
  };
};

export const removeFromCart = (cartId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: { cartId }
  };
};

export const updateCartItem = (cartId, quantity) => {
  return {
    type: 'UPDATE_CART_ITEM',
    payload: { cartId, quantity }
  };
};

export default cartReducer;
