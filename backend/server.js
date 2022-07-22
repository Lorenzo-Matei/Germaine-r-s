import react from "react";
import express from "express";
import data from "./productsData.js";

const app = express();
app.get("/api/productsData", (req, res) => {
  res.send(data.products);
});

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

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
