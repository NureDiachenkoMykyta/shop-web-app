import React, { useState } from 'react';

const AddDepartment = ({ addDepartment }) => {
  const [newDepartment, setNewDepartment] = useState({
    NAME: '',
    INFO: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDepartment(newDepartment);
      setNewDepartment({ NAME: '', INFO: '' });
    } catch (error) {
      console.error('Error adding department:', error);
    }
  };

  return (
    <section>
      <h2>Add New Department</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={newDepartment.NAME}
          onChange={(e) => setNewDepartment({ ...newDepartment, NAME: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Info"
          value={newDepartment.INFO}
          onChange={(e) => setNewDepartment({ ...newDepartment, INFO: e.target.value })}
        />
        <button type="submit">Add Department</button>
      </form>
    </section>
  );
};

export default AddDepartment;
