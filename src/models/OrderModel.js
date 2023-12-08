const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true },

  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId
      },
      quantity: {
        type: Number
      },
    },
  ],

  totalAmount: { type: Number, required: true, min: 1 },
  shippingAddress: { type: String, required: true },
  status: { type: Boolean, required: true, default: "Pending" },
},

{ timestamps: true , versionKey: false});

const OrderModel = mongoose.model("orders", DataSchema);
module.exports = OrderModel;
