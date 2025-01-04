const sequelize = require('../config/database');

async function updateDescriptionByDepartment(deptId) {
  try {
    await sequelize.query('CALL update_description_by_department(:deptId)', {
      replacements: { deptId },
    });
    console.log(`Процедура успешно выполнена для отдела: ${deptId}`);
  } catch (error) {
    console.error('Ошибка при выполнении процедуры update_description_by_department:', error.message);
    throw error;
  }
}

module.exports = {
  updateDescriptionByDepartment,
};
