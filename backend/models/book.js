const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  pages: {
    type: [String], // Array of strings where each string represents a page's content
    required: false, // Optional field to allow existing data to remain valid
  },
});

module.exports = mongoose.model("Book", bookSchema);
