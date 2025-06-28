const mongoose = require('mongoose');


// Order Item
const orderItemSchema = new mongoose.Schema({
  coffee: { type: mongoose.Schema.Types.ObjectId, ref: 'Coffee', required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true }
});

// Order
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [orderItemSchema],
  total: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'processing', 'completed', 'cancelled'], default: 'pending' },
  guestSession: { type: String }, // For guest orders
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zipCode: String
  },
  paymentMethod: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});


// export
module.exports = mongoose.model('Order', orderSchema);