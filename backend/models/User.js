const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true }, // String is shorthand for {type: String}
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }
},
{timestamps: true});

module.exports = mongoose.model("User", UserSchema);
