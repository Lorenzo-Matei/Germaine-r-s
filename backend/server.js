import react from "react";
import express from "express";
import data from "./GRSInventoryData.js";

import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";

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
app.use("/api/users", userRouter);

app.user((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
