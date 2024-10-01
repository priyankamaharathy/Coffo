const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
    userDetails: {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pin: { type: String, required: true },
        country: { type: String, required: true },
    },
    products: [
        {
            productId: { type: String, required: true },
            name: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true },
        },
    ],
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Checkout', checkoutSchema);
