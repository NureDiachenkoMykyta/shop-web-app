const sequelize = require('../config/database');

async function getCheckWithMaxItemsByProducer(producerName) {
  try {
    const [rows] = await sequelize.query(
      `SELECT * 
       FROM GetCheckWithMaxItemsByProducer(:producerName)`,
      {
        replacements: { producerName },
      }
    );
    return rows; 
  } catch (error) {
    console.error('Помилка при виклику GetCheckWithMaxItemsByProducer:', error.message);
    throw error;
  }
}

module.exports = {
  getCheckWithMaxItemsByProducer,
};
