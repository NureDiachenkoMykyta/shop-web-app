const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const saleRoutes = require('./routes/saleRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const workerRoutes = require('./routes/workerRoutes');
const goodRoutes = require('./routes/goodRoutes');

const cors = require('cors');


const sequelize = require('./config/database');
const app = express();


app.use(bodyParser.json());
app.use(express.json());

app.use(cors());

app.use('/api/products', productRoutes);
app.use('/api/sales', saleRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/workers', workerRoutes);
app.use('/api/goods', goodRoutes);


const PORT = 3000;



(async () => {
  try {
    await sequelize.authenticate();
    console.log('Підключення до бази даних встановлено');
    await sequelize.sync({ force: true });
    app.listen(PORT, () => console.log(`Сервер працює на порту ${PORT}`));
  } catch (err) {
    console.error('Помилка підключення до бази даних:', err);
  }
})();
