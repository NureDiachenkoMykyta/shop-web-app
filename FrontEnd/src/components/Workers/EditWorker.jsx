import React, { useState } from 'react';

const EditWorker = ({ worker, updateWorker, setEditWorker, departments }) => {
  const [editWorkerData, setEditWorkerData] = useState(worker);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const workerToUpdate = {
        ...editWorkerData,
        DEPT_ID: parseInt(editWorkerData.DEPT_ID)
      };
      await updateWorker(workerToUpdate.WORKER_ID, workerToUpdate);
    } catch (error) {
      console.error('Error updating worker:', error);
    }
  };

  return (
    <section>
      <h2>Edit Worker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={editWorkerData.NAME}
          onChange={(e) => setEditWorkerData({ ...editWorkerData, NAME: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={editWorkerData.ADDRESS}
          onChange={(e) => setEditWorkerData({ ...editWorkerData, ADDRESS: e.target.value })}
        />
        <select
          value={editWorkerData.DEPT_ID}
          onChange={(e) => setEditWorkerData({ ...editWorkerData, DEPT_ID: e.target.value })}
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
          value={editWorkerData.INFORMATION}
          onChange={(e) => setEditWorkerData({ ...editWorkerData, INFORMATION: e.target.value })}
        />
        <button type="submit">Update Worker</button>
        <button type="button" onClick={() => setEditWorker(null)}>Cancel</button>
      </form>
    </section>
  );
};

export default EditWorker;
