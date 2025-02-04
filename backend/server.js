const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const middleware = require("./middlewares/middleware");
const { connectDb } = require("./config/db");
const Contact = require("./models/contact");
const subscriptionRoutes = require("./routes/subscription");
const userRoutes = require("./routes/userRoutes")
const cartRoutes = require("./routes/cartRoutes")
const cors = require("cors");

require("dotenv").config();

connectDb();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use('/api/user', userRoutes);

app.use(middleware);

app.get('/',(req,res)=>{
  res.send("working");
});

app.use("/api/cart", cartRoutes);
app.use("/api/subscribe", subscriptionRoutes);

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log("Received contact form submission:", { name, email, message });
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error saving contact form submission:", error);
    res.status(500).json({ message: "Error saving form submission" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



module.exports = app;