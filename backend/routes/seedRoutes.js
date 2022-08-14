import express from "express";
import Product from "../models/productModels.js";
import data from "../GRSInventoryData.js";

const seedRouter = express.Router(); // creates a object from express.Router

// 1st param is path
// 2nd param is async funtion that is defined in param
seedRouter.get("/", async (req, res) => {
  // first we need to remove previous records of products and create a blank object
  await Product.deleteMany({}); // empty object '{}' means return all models within Product

  // all products will come from productData.jsx
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts }); //this sends products to the front end
});
export default seedRouter;
