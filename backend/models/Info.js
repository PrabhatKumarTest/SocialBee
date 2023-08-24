const mongoose = require('mongoose')
const { Schema } = mongoose;

const InfoSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  description: { type: String }, // String is shorthand for {type: String}
  city: { type: String  },
  hometown: { type: String},
  date: { type: Date, default: Date.now },
  profilePicture: { type: String, default: "" },
  coverPicture: { type: String, default: "" },
  follower: { type: Array, default: [] },
  following: { type: Array, default: [] },
},
{timestamps: true});

module.exports = mongoose.model("Info", InfoSchema);
