const mongoose = require('mongoose')
const { Schema } = mongoose;

const InfoSchema = new Schema({
  description: { type: String, required: true }, // String is shorthand for {type: String}
  city: { type: String, required: true },
  hometown: { type: String, unique: true, required: true },
  date: { type: Date, default: Date.now },
},
{timestamps: true});

module.exports = mongoose.model("Info", InfoSchema);
