import Products from "../models/products.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Products.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
