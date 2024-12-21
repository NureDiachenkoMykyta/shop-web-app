const express = require('express');
const Worker = require('../models/Worker');
const Department = require('../models/Department');

const workersRouter = express.Router();

workersRouter.get('/', async (req, res) => {
  try {
    const workers = await Worker.findAll({ include: Department });
    res.json(workers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch workers' });
  }
});

workersRouter.post('/', async (req, res) => {
  try {
    const worker = await Worker.create(req.body);
    res.status(201).json(worker);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create worker' });
  }
});

workersRouter.put('/:id', async (req, res) => {
  try {
    const worker = await Worker.findByPk(req.params.id);
    if (!worker) return res.status(404).json({ error: 'Worker not found' });
    await worker.update(req.body);
    res.json(worker);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update worker' });
  }
});

workersRouter.delete('/:id', async (req, res) => {
  try {
    const worker = await Worker.findByPk(req.params.id);
    if (!worker) return res.status(404).json({ error: 'Worker not found' });
    await worker.destroy();
    res.json({ message: 'Worker deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete worker' });
  }
});

module.exports = workersRouter;
