import react from "react";
import express from "express";
import data from "./productsData.js";

const app = express();
app.get("/api/productsData", (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
