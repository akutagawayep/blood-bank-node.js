const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  number: { type: String, required: true },
  role: { type: String, required: true },
  active: { type: Boolean, default: false },
  key: { type: String, required: true },
});
 
module.exports = model("Post", PostSchema);
