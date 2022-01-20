import express from "express";
import Product from "../models/product.js";

const router = express.Router();

/**
 * Create = post
 * Read = get
 * Update = put
 * Delete = delete
 */
 
router.get("/", (req, res) => {
  res.send("RestfulAPI");
});
//Get all 
router.get("/products", async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

//Get By Id
//http://localhost:5000/api/products/
router.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
});

//Create new Product
//http://localhost:5000/api/products
router.post("/products", async (req, res) => {
    const payload = req.body;
    const product = new Product(payload);
    await product.save();
    res.json({ message:"Product added !! "});
});

//Update Product by Id
//http://localhost:5000/api/products/61cd700c1464d6f674b57c57
router.put("/products/:id", async (req, res) => {
    const {id} = req.params;
    const payload = req.body;
    const product = await Product.findByIdAndUpdate(id, {$set:payload});
    res.json({ message: `Product Id ${id} is updated` });
});

//Delete Product by Id
//http://localhost:5000/api/products/61cd700c1464d6f674b57c57
router.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    await Product.findOneAndDelete(id);
    res.json({ message: `Product Id ${id} is delete` });
});

export default router;