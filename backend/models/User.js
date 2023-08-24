const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true }, // String is shorthand for {type: String}
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  profilePicture: { type: String, default: "" },
  coverPicture: { type: String, default: "" },
  follower: { type: Array, default: [] },
  following: { type: Array, default: [] },
  isAdmin: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
},
{timestamps: true});

module.exports = mongoose.model("User", UserSchema);
