const express = require('express');
const Sale = require('../models/Sale');
const Good = require('../models/Good');
const { getCheckWithMaxItemsByProducer } = require('../services/saleService');
const salesRouter = express.Router();

salesRouter.get('/', async (req, res) => {
  try {
    const sales = await Sale.findAll({ include: Good });
    res.json(sales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch sales' });
  }
});

salesRouter.post('/', async (req, res) => {
  try {
    const sale = await Sale.create(req.body);
    res.status(201).json(sale);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create sale' });
  }
});

salesRouter.put('/:id', async (req, res) => {
  try {
    const sale = await Sale.findByPk(req.params.id);
    if (!sale) return res.status(404).json({ error: 'Sale not found' });
    await sale.update(req.body);
    res.json(sale);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update sale' });
  }
});

salesRouter.delete('/:id', async (req, res) => {
  try {
    const sale = await Sale.findByPk(req.params.id);
    if (!sale) return res.status(404).json({ error: 'Sale not found' });
    await sale.destroy();
    res.json({ message: 'Sale deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete sale' });
  }
});

salesRouter.get('/producer/maxitems', async (req, res) => {
  const { producerName } = req.query;
  if (!producerName) {
    return res.status(400).json({ error: 'Параметр producerName є обов’язковим' });
  }
  try {
    const result = await getCheckWithMaxItemsByProducer(producerName);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Помилка при отриманні даних' });
  }
});

module.exports = salesRouter;
