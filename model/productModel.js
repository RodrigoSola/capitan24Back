import { Schema, model } from "mongoose";

const productModel = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    toLowercase: true,
  },

  dayPrice: {
    type: Number,
    default: 0,
    min: 0,
  },
  nightPrice: {
    type: Number,
    default: 0,
    min: 0,
  },
});

export default model("Book", productModel);
