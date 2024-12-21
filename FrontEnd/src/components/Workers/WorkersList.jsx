import React from 'react';

const WorkersList = ({ workers, setEditWorker, deleteWorker }) => {
  return (
    <section>
      <h2>Workers List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Dept ID</th>
            <th>Department Name</th>
            <th>Information</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((worker) => (
            <tr key={worker.WORKER_ID}>
              <td>{worker.WORKER_ID}</td>
              <td>{worker.NAME}</td>
              <td>{worker.ADDRESS}</td>
              <td>{worker.DEPT_ID}</td>
              <td>{worker.Department?.NAME || 'N/A'}</td>
              <td>{worker.INFORMATION}</td>
              <td>
                <button onClick={() => setEditWorker(worker)}>Edit</button>
                <button onClick={() => deleteWorker(worker.WORKER_ID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default WorkersList;
