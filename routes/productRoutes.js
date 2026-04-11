import { Router } from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controller/productController.js";

const productRouter = Router();

productRouter.post("/create", createProduct)
productRouter.get("/get", getProducts)
productRouter.put("/update/:id", updateProduct)
productRouter.delete("/delete/:id", deleteProduct)

export default productRouter;