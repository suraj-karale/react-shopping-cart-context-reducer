export const cartReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((i) => i.id !== action.payload.id),
      };
    case "FILTER_BY_SEARCH":
      return {
        ...state,
        filters: { ...state.filters, searchQuery: action.payload },
      };
    case "SORT_BY_PRICE":
      return {
        ...state,
        filters: { ...state.filters, sort: action.payload },
      };
    case "FILTER_BY_RATING":
      return {
        ...state,
        filters: { ...state.filters, rating: action.payload },
      };
    case "FILTER_BY_DISCOUNT":
      return {
        ...state,
        filters: { ...state.filters, discount: action.payload },
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          searchQuery: "",
          sort: "",
          discount: "0",
          rating: 0,
        },
      };
    default:
      return state;
  }
};
