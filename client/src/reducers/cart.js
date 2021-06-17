const reducer = (cart = [], action) => {
  switch (action.type) {
    case "FILL_CART":
      return action.payload;
    default:
      return cart;
  }
};
export default reducer;
