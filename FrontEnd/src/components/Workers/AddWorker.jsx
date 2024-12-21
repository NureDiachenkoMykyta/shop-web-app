import React, { useState } from 'react';

const AddWorker = ({ addWorker, departments }) => {
  const [newWorker, setNewWorker] = useState({
    NAME: '',
    ADDRESS: '',
    DEPT_ID: '',
    INFORMATION: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const workerToAdd = {
        ...newWorker,
        DEPT_ID: parseInt(newWorker.DEPT_ID)
      };
      await addWorker(workerToAdd);
      setNewWorker({ NAME: '', ADDRESS: '', DEPT_ID: '', INFORMATION: '' });
    } catch (error) {
      console.error('Error adding worker:', error);
    }
  };

  return (
    <section>
      <h2>Add New Worker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={newWorker.NAME}
          onChange={(e) => setNewWorker({ ...newWorker, NAME: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={newWorker.ADDRESS}
          onChange={(e) => setNewWorker({ ...newWorker, ADDRESS: e.target.value })}
        />
        <select
          value={newWorker.DEPT_ID}
          onChange={(e) => setNewWorker({ ...newWorker, DEPT_ID: e.target.value })}
          required
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept.DEPT_ID} value={dept.DEPT_ID}>
              {dept.NAME}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Information"
          value={newWorker.INFORMATION}
          onChange={(e) => setNewWorker({ ...newWorker, INFORMATION: e.target.value })}
        />
        <button type="submit">Add Worker</button>
      </form>
    </section>
  );
};

export default AddWorker;
