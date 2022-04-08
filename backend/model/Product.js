const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	name: { type: String, required: true, max: 100 },
	price: { type: Number, required: true },
	stock: { type: Number, required: true },
	status: { type: Boolean, required: true }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
