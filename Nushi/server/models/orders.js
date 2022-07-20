import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  client: String,
  date: Date,
  deliveryAddress: { address: String, location: String },
  email: String,
  phone: String,
  productsInfo: [],
  priceTotal: Number,
  status: String,
  time: String,
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
