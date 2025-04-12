import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  category: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    min: 0
  },
  price: {
    type: Number,
    required: true
  },
  inStock: {
    type: Boolean,
    default: true
  }
});

const Item = mongoose.model("Item", itemSchema);
export default Item;
