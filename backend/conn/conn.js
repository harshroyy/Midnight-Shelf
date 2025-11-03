const mongoose = require("mongoose");

const conn = async () => {
  try {
    const mongoURI = process.env.URI;

    if (!mongoURI) throw new Error("MongoDB URI is missing in .env file");

    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

conn();
