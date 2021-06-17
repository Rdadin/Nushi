export const fillCart = (cart) => async (dispatch) => {
  try {
    dispatch({ type: "FILL_CART", payload: cart });
  } catch (error) {
    console.log(error.message);
  }
};
