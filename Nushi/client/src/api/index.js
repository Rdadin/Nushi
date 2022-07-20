import axios from "axios";

const productsUrl = "http://localhost:5000/products";
const ordersUrl = "http://localhost:5000/orders";

export const fetchProducts = () => axios.get(productsUrl);

export const postOrder = (newOrder) => axios.post(ordersUrl, newOrder);
export const fetchOrders = () => axios.get(ordersUrl);
export const editOrder = (id, editedOrder) =>
  axios.patch(`${ordersUrl}/${id}`, editedOrder);
export const deleteOrder = (id) => axios.delete(`${ordersUrl}/${id}`);
