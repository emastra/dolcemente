const express = require('express');
const router = express.Router();

const p = require('../models/products');

// GET all products
router.get('/', (req, res) => {
    const products = p.getProducts();

    res.json(products);
});

// POST a product
router.post('/', (req, res) => {
    const id = p.insertProduct(req.body);

    res.json(id);
});

// DELETE a product by id
router.delete('/:id', (req, res) => {
    const id = p.deleteProduct(req.params.id);

    res.json(id);
});

// GET specific product by id
router.get('/:id', (req, res) => {
    const product = p.getProduct(req.params.id);

    res.json(product);
});

module.exports = router;