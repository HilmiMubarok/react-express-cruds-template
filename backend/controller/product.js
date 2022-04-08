const Product = require('../model/Product');

const index = async (req, res) => {
	try {
		const product = await Product.find({});
		res.send(product);
	} catch (err) {
		console.log(err);
	}
};

const show = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.send(product);
	} catch (err) {
		console.log(err);
	}
};

const search = async (req, res) => {
	try {
		const regex = new RegExp(req.params.search, 'i');
		const product = await Product.find({ name: regex });
		res.send(product);
	} catch (err) {
		console.log(err);
	}
};

const store = async (req, res) => {
	try {
		const product = await new Product({
			name: req.body.name,
			price: req.body.price,
			stock: req.body.stock,
			status: req.body.status
		});

		product.save({ new: true });
		res.json({
			message: 'Product Created'
		});
	} catch (err) {
		console.log(err);
	}
};

const update = async (req, res) => {
	try {
		await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
		res.json({
			message: 'Product Updated'
		});
	} catch (err) {
		console.log(err);
	}
};

const destroy = async (req, res) => {
	try {
		await Product.findByIdAndRemove(req.params.id);
		res.json({
			message: 'Product Deleted'
		});
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	index,
	show,
	search,
	store,
	update,
	destroy
};
