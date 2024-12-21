const express = require('express');
const Department = require('../models/Department');

const departmentsRouter = express.Router();

departmentsRouter.get('/', async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.json(departments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch departments' });
  }
});

departmentsRouter.post('/', async (req, res) => {
  try {
    const department = await Department.create(req.body);
    res.status(201).json(department);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create department' });
  }
});

departmentsRouter.put('/:id', async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    if (!department) return res.status(404).json({ error: 'Department not found' });
    await department.update(req.body);
    res.json(department);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update department' });
  }
});

departmentsRouter.delete('/:id', async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    if (!department) return res.status(404).json({ error: 'Department not found' });
    await department.destroy();
    res.json({ message: 'Department deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete department' });
  }
});

module.exports = departmentsRouter;
