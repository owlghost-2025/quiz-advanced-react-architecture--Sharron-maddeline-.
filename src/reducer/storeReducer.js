const initialState = {
  user: null,
  isAuthenticated: false,
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

function calcTotals(cart) {
  return {
    totalItems: cart.reduce((s, i) => s + i.qty, 0),
    totalPrice: cart.reduce((s, i) => s + i.price * i.qty, 0),
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "LOGOUT":
      return { ...initialState };
    case "ADD_TO_CART": {
      const exists = state.cart.find((i) => i.id === action.payload.id);
      const cart = exists
        ? state.cart.map((i) => i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i)
        : [...state.cart, { ...action.payload, qty: 1 }];
      return { ...state, cart, ...calcTotals(cart) };
    }
    case "REMOVE_FROM_CART": {
      const cart = state.cart.filter((i) => i.id !== action.payload);
      return { ...state, cart, ...calcTotals(cart) };
    }
    case "CLEAR_CART":
      return { ...state, cart: [], totalItems: 0, totalPrice: 0 };
    default:
      return state;
  }
}

export { reducer, initialState };