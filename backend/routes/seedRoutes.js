import express from "express";
import Product from "../models/productModels.js";
import data from "../GRSInventoryData.js";
// import mongoose from "mongoose";

const seedRouter = express.Router(); // creates a object from express.Router
// 1st param is path
// 2nd param is async funtion that is defined in param
seedRouter.get("/", async (req, res) => {
  // first we need to remove previous records of products and create a blank object
  await Product.deleteMany({}); // empty object '{}' means return all models within Product

  // all products will come from productData.jsx
  const createdProducts = await Product.insertMany(data.testProducts);
  res.send({ createdProducts }); //this sends products to the front end
});

// seedRouter.get("/", async (req, res) => {
//   // first we need to remove previous records of products and create a blank object
//   // await Product.deleteMany({}); // empty object '{}' means return all models within Product

//   mongoose.connect("mongodb://localhost/GRS");
//   const connection = mongoose.connection;

//   connection.on("error", console.error.bind(console, "connection error:"));
//   connection.once("open", async function () {
//     const productsCollection = connection.db.collection(
//       "test-products-collection"
//     );
//     productsCollection.find({}).toArray;
//     // .toArray(function (err, data) {
//     //   console.log(data); // it will print your collection data
//     //   console.log(err);
//     // });
//     res.send({ productsCollection }); //this sends products to the front end
//   });

// res.send({ productsCollection }); //this sends products to the front end
// });
export default seedRouter;
