const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    amount: {type: Number, required: true},
    checkinTime: {type: Date, required: true},
    expiredTime: {type: Number, required: true},
    activeTime: {type: Number, required: true},
    quantity: {type: Number, required: true},
    source: {type: String, required: true},
    statusDevice: {type: String, required: true},
    locate: {type: String, required: true}
})

module.exports = mongoose.model('Product', productSchema);