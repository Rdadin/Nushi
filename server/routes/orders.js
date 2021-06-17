import express from "express";

import {
  postOrders,
  getOrders,
  editOrder,
  deleteOrder,
} from "../controllers/orders.js";

const router = express.Router();

router.get("/", getOrders);
router.post("/", postOrders);
router.patch("/:id", editOrder);
router.delete("/:id", deleteOrder);

export default router;
