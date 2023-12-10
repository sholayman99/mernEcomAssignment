const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({

  user: { type: mongoose.Schema.Types.ObjectId, required: true , ref:"User"},

  items: [{

      product: { type: mongoose.Schema.Types.ObjectId , ref:"Product" },
      quantity: { type: Number }

    }],

  totalAmount: { type: Number, required: true, min: 1 },
  shippingAddress: { type: String, required: true },
  status: { type: Boolean, required: true, default: "Pending" },
},

{ timestamps: true , versionKey: false });

const OrderModel = mongoose.model("orders", DataSchema);
module.exports = OrderModel;
