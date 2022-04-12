const {
  model,
  Schema,
  Types: { ObjectId },
} = require("mongoose");

//TODO: Change fields depending on the project
const schema = new Schema(
  {
    name: {
      type: String,
      minlength: [4, "Make must contain atleast 4 characters"],
      required: [true, `Item name is required`],
    },
    description: { type: String },
    location: { type: String, required: [true, "Location is required"] },
    price: {
      type: Number,
      min: [0, "Price must be postive number"],
      default: 0,
    },
    img: { type: String },
    owner: { type: ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Item = model("Item", schema);

module.exports = Item;
