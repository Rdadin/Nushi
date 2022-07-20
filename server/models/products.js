import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  description: String,
  quantity: Number,
  price: Number,
  category: String,
  selectedFile: String,
  selectedAmmount: Number,
});

const Products = mongoose.model("Product", productSchema);

export default Products;
