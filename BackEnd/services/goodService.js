const sequelize = require('../config/database');

async function countGoodsInDepartment(deptId) {
  try {
    const [rows] = await sequelize.query(
      'SELECT public.CountGoodsInDepartment(:deptId) AS goods_count', // Указали схему public
      { replacements: { deptId } }
    );
    return rows[0].goods_count;
  } catch (error) {
    console.error('Ошибка при вызове CountGoodsInDepartment:', error.message);
    throw error;
  }
}

module.exports = {
  countGoodsInDepartment,
};
