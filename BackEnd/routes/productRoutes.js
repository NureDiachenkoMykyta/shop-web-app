const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Ендпоінт для створення продукту
router.post('/', async (req, res) => {
  const { name, price, department } = req.body;

  if (!name || !price || !department) {
    return res.status(400).json({ error: 'Всі поля (name, price, department) обов’язкові' });
  }

  try {
    const product = await Product.create({ name, price, department });
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Помилка сервера' });
  }
});

module.exports = router;
