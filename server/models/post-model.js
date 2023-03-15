const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  number: { type: String, required: true },
  role: { type: String, required: true },
  city: { type: String, required: true },
  isActive: { type: Boolean, default: false },
  date: { type: String, unique: false, required: true },
});

module.exports = model("Post", PostSchema);
   