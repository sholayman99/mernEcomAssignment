const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
  name: { type: String, required: true },

  description: { type: String },

  price: { type: String, required: true, min: 1 },

  stock: { type: String, required: true, min: 0 },

  category: { type: String, required: true },

  imageURL: { type: String, required: false },
},

{ timestamps: true , versionKey: false});

const ProductModel = mongoose.model("products", DataSchema);
module.exports = ProductModel;
