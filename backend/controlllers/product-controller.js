const HttpError = require('../models/http-error');
const Product = require('../models/Products');


const getAllProducts = async (req, res, next) => {
    let product;
    try {
        product = await Product.find();
    } catch (err) {
        const error = new HttpError('Could not get list of Products', 500);
        return next(error);
    }
    res.json(product);

}


const getProductById = async (req, res, next) => {
    const productId = req.params.id;
    let product;
    try {
        product = await Product.findById(productId);
    } catch (err) {
        const error = new HttpError('Could not find any product with provided Id', 500);
        return next(error);
    }

    if (!product) {
        const error = new HttpError('Could not find a product for provided Id.', 404);
        return next(error);
    }
    res.json({
        product: product.toObject({
            getters: true
        })
    });
}

const createProduct = async (req, res, next) => {
    const {
        name,
        price,
        amount,
        checkinTime,
        expiredTime,
        activeTime,
        quantity,
        source,
        statusDevice,
        locate,
    } = req.body;
    const newProduct = await new Product({
        name,
        price,
        amount,
        checkinTime,
        expiredTime,
        activeTime,
        quantity,
        source,
        statusDevice,
        locate,
    })
    try {
        await newProduct.save();
    } catch (err) {
        const error = new HttpError("Can't create Product, please try again!", 500);
        return next(error);
    }
    res.status(201).json({
        product: newProduct
    });
}

const updateProduct = async (req, res, next) => {
    const {
        name,
        price,
        amount,
        checkinTime,
        expiredTime,
        activeTime,
        quantity,
        source,
        statusDevice,
        locate,
    } = req.body;
    const productId = req.params.id;

    let product;
    try {
        product = await Product.findById(productId);
    } catch (err) {
        const error = new HttpError('Could not find product Id, please check this one!', 500);
        return next(error);
    }

    product.name = name;
    product.price = price;
    product.amount = amount;
    product.checkinTime = checkinTime,
    product.expiredTime= expiredTime;
    product.activeTime = activeTime;
    product.quantity = quantity;
    product.source = source;
    product.statusDevice = statusDevice;
    product.locate = locate;
    

    try {
        await product.save();
    } catch (err) {
        const error = new HttpError('Could not updated specify product, please try again!', 500);
        return next(error)
    }

    res.status(200).json({
        product: product.toObject({
            getters: true
        })
    });
}

const deleteProduct = async (req, res, next) => {
    const productId = req.params.id;

    try {
        await Product.findByIdAndDelete(productId);
    } catch (err) {
        const error = new HttpError('Could not find product with provided Id to DELETE', 500);
        return next(error);
    }

    res.status(200).json({
        message: 'deleted!'
    });
}

exports.getAllProducts = getAllProducts;
exports.getProductById = getProductById;
exports.createProduct = createProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;