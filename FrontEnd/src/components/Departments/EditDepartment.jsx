import React, { useState } from 'react';

const EditDepartment = ({ department, updateDepartment, setEditDepartment }) => {
  const [editDepartmentData, setEditDepartmentData] = useState(department);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDepartment(editDepartmentData.DEPT_ID, editDepartmentData);
    } catch (error) {
      console.error('Error updating department:', error);
    }
  };

  return (
    <section>
      <h2>Edit Department</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={editDepartmentData.NAME}
          onChange={(e) => setEditDepartmentData({ ...editDepartmentData, NAME: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Info"
          value={editDepartmentData.INFO}
          onChange={(e) => setEditDepartmentData({ ...editDepartmentData, INFO: e.target.value })}
        />
        <button type="submit">Update Department</button>
        <button type="button" onClick={() => setEditDepartment(null)}>Cancel</button>
      </form>
    </section>
  );
};

export default EditDepartment;
