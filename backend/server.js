import react from "react";
import express from "express";
import data from "./GRSInventoryData.js";

import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";

dotenv.config(); // enables fetching of variables in .env file

const connect = mongoose.connect(process.env.MONGODB_URI); // fetches the .env mondodb connection variable

connect
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("error: " + err.message);
  });
// you can also install mongodb locally on your machine by going to 'install mongodb community edition
// there is also a GUI you can install from mongodb known as 'compass'

const app = express();
//now we grab the data from GRSInvetoryData which will be store according to seedRoutes.jsx
app.use("/api/seed", seedRouter); //this grabs the data from the server that holds the data which is located at 'localhost:/api/seed'
app.use("/api/products", productRouter);

// this is used when grabbing test products from the productsData.js
// app.get("/api/productsData", (req, res) => {
//   res.send(data.products);
// });

app.get("/api/productsData/slug/:slug", (req, res) => {
  // backend api that returns information on a product based on the slug of the product
  const product = data.products.find((x) => x.slug === req.params.slug); // queries products and looks for the data associated with the slug

  if (product) {
    //if the product is found/exists
    res.send(product); //respond by sending the product to front
  } else {
    res.status(404).send({ message: "product NOT FOUND" }); // otherwise if a error status of (404) exists then send a message to the front
  }
});

app.get("/api/productsData/:id", (req, res) => {
  // backend api that returns information on a product based on the id of the product
  const product = data.products.find((x) => x._id === req.params.id); // queries products and looks for the data (key) associated with the id

  if (product) {
    //if the product is found/exists
    res.send(product); //respond by sending the product to front
  } else {
    res.status(404).send({ message: "product NOT FOUND" }); // otherwise if a error status of (404) exists then send a message to the front
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
