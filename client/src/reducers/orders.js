const reducer = (orders = [], action) => {
  switch (action.type) {
    case "FETCH_ORDERS":
      return action.payload;
    case "CREATE_ORDER":
      return [...orders, action.payload];
    case "EDIT_ORDER":
      console.log("editing");
      return orders.map((order) =>
        order.id === action.payload._id ? action.payload : order
      );
    case "DELETE_ORDER":
      return orders.filter((order) => order._id !== action.payload);
    default:
      return orders;
  }
};
export default reducer;
