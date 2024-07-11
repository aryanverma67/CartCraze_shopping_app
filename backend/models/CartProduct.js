const mongoose = require('mongoose');

const addToCartSchema = new mongoose.Schema({
    productId: {
        ref: 'product',
        type: String,
    },
    quantity: Number,
    userId: String,
}, {
    timestamps: true
});

// Check if the model already exists before creating it
const addToCartModel = mongoose.models.addToCart || mongoose.model("addToCart", addToCartSchema);

module.exports = addToCartModel;
