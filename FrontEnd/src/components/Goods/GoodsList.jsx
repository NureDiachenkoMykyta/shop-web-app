import React from 'react';

const GoodsList = ({ goods, setEditGood, deleteGood }) => {
  return (
    <section>
      <h2>Goods List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Producer</th>
            <th>Dept ID</th>
            <th>Department Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {goods.map((good) => (
            <tr key={good.GOOD_ID}>
              <td>{good.GOOD_ID}</td>
              <td>{good.NAME}</td>
              <td>{good.PRICE}</td>
              <td>{good.QUANTITY}</td>
              <td>{good.PRODUCER}</td>
              <td>{good.DEPT_ID}</td>
              <td>{good.Department?.NAME || 'N/A'}</td>
              <td>{good.DESCRIPTION}</td>
              <td>
                <button onClick={() => setEditGood(good)}>Edit</button>
                <button onClick={() => deleteGood(good.GOOD_ID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default GoodsList;
