import Order from "../models/orders.js";
import mongoose from "mongoose";

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postOrders = async (req, res) => {
  const {
    client,
    date,
    deliveryAddress,
    email,
    phone,
    products,
    time,
    status,
  } = req.body;
  const productsInfo = products.map((product) => {
    return { name: product.name, selectedAmmount: product.selectedAmmount };
  });
  const priceTotal = products
    .map((product) => {
      return product.price * product.selectedAmmount;
    })
    .reduce((a, b) => a + b, 0);
  const newOrder = new Order({
    client,
    date,
    deliveryAddress,
    email,
    phone,
    productsInfo,
    priceTotal,
    status,
    time,
  });
  try {
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const editOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      client,
      date,
      deliveryAddress,
      email,
      phone,
      productsInfo,
      priceTotal,
      status,
      time,
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const editedOrder = {
      client,
      date,
      deliveryAddress,
      email,
      phone,
      productsInfo,
      priceTotal,
      status,
      time,
    };
    await Order.findByIdAndUpdate(id, editedOrder, { new: true });

    res.status(200).json(editedOrder);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Order.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};
