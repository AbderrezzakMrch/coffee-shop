const mongoose = require("mongoose")


// Cofee Schema
const coffeeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  origin: { type: String, required: true },
  strength: { type: String,enum: ['Very Strong','Strong','Medium','Mild'], required: true },
  stock: { type: Number, default: 100 },
  createdAt: { type: Date, default: Date.now }
});


// export coffe schema

module.exports = mongoose.model('Coffee', coffeeSchema);