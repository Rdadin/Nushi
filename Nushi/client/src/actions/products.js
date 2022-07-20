import * as api from "../api";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const changeAmmount = (name, directive) => async (dispatch) => {
  try {
    dispatch({ type: "CHANGE_AMMOUNT", payload: { name, directive } });
  } catch (error) {
    console.log(error.message);
  }
};

export const resetAmmounts = () => async (dispatch) => {
  try {
    dispatch({ type: "RESET_ALL", payload: {} });
  } catch (error) {
    console.log(error);
  }
};
