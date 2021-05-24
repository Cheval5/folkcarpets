const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

mongoose.connect("mongodb://localhost/folk-carpets-db", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

const Product = mongoose.model(
    "products",
    new mongoose.Schema({
        id: {type: String, default: shortid.generate},
        title: String,
        category: String,
        image: String,
        imageOne: String,
        imageTwo: String,
        imageThree: String,
        description: String,
        price: Number
    })
)

app.get('/api/products', async(req, res) =>{
    const products = await Product.find({});
    res.send(products)
})

app.post("/api/products", async(req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct)
})

app.delete("/api/products/:id", async(req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct)
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server listening at ${port}`))