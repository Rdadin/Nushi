import * as api from "../api";

export const getOrders = () => async (dispatch) => {
  try {
    const { data } = await api.fetchOrders();
    dispatch({ type: "FETCH_ORDERS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createOrder = (orderData) => async (dispatch) => {
  try {
    const { data } = await api.postOrder(orderData);
    dispatch({ type: "CREATE_ORDER", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const editOrder = (id, editedOrder) => async (dispatch) => {
  try {
    const { data } = await api.editOrder(id, editedOrder);
    dispatch({ type: "EDIT_ORDER", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteOrder = (id) => async (dispatch) => {
  try {
    await api.deleteOrder(id);
    dispatch({ type: "DELETE_ORDER", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
