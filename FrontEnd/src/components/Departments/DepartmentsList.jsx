
import React from 'react';

const DepartmentsList = ({ departments, setEditDepartment, deleteDepartment, handleUpdateDescription, handleCountGoods }) => {
  return (
    <section>
      <h2>Departments List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Info</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept) => (
            <tr key={dept.DEPT_ID}>
              <td>{dept.DEPT_ID}</td>
              <td>{dept.NAME}</td>
              <td>{dept.INFO}</td>
              <td>
                <button onClick={() => setEditDepartment(dept)}>Edit</button>
                <button onClick={() => deleteDepartment(dept.DEPT_ID)}>Delete</button>
                <button onClick={() => handleUpdateDescription(dept.DEPT_ID)}>Update Descriptions</button>

                <button onClick={() => handleCountGoods(dept.DEPT_ID)}>Count Goods</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default DepartmentsList;
