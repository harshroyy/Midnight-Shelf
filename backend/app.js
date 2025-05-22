const express = require("express");
const app = express();
require('dotenv').config();
require('./conn/conn'); // Ensure this path is correct
const cors = require("cors");

const User = require("./routes/user");
const Books = require("./routes/book");
const Favourite = require("./routes/favourite");
const Cart = require("./routes/cart");
const Order = require("./routes/order");

app.use(cors());
app.use(express.json());

// Health check route
app.get("/api/health", (req, res) => {
    res.status(200).json({ message: "ok" });
});

// routes
app.use("/api/v1", User);
app.use("/api/v1", Books);
app.use("/api/v1", Favourite);
app.use("/api/v1", Cart);
app.use("/api/v1", Order);

// listening to port 
const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});