const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const HttpError = require('./models/http-error');
const mongoose = require('mongoose');

const productRoutes = require('./routes/product-routes');

app.use(bodyParser.json());
app.use('/api/products', productRoutes);
app.use((req, res, next) => {
    const error = new HttpError('Could not find this route!', 404);
    throw error;
})

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'Unknown Error Occurred' });
});

mongoose
    .connect('mongodb+srv://vantohe:vantohe123@cluster0.gx99z.mongodb.net/products?retryWrites=true&w=majority')
    .then(() => {
        app.listen(5000);
    })
    .catch(() => {
        console.log("connect failed!");
}) 




