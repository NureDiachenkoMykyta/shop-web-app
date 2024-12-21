const express = require('express');
const Good = require('../models/Good');
const Department = require('../models/Department');

const goodsRouter = express.Router();

goodsRouter.get('/', async (req, res) => {
  try {
    const goods = await Good.findAll({ include: Department });
    res.json(goods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch goods' });
  }
});

goodsRouter.post('/', async (req, res) => {
  try {
    const good = await Good.create(req.body);
    res.status(201).json(good);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create good' });
  }
});

goodsRouter.put('/:id', async (req, res) => {
  try {
    const good = await Good.findByPk(req.params.id);
    if (!good) return res.status(404).json({ error: 'Good not found' });
    await good.update(req.body);
    res.json(good);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update good' });
  }
});

goodsRouter.delete('/:id', async (req, res) => {
  try {
    const good = await Good.findByPk(req.params.id);
    if (!good) return res.status(404).json({ error: 'Good not found' });
    await good.destroy();
    res.json({ message: 'Good deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete good' });
  }
});

module.exports = goodsRouter;
