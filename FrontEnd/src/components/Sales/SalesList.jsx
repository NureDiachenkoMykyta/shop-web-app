import React from 'react';

const SalesList = ({ sales, setEditSale, deleteSale }) => {
  return (
    <section>
      <h2>Sales List</h2>
      <table>
        <thead>
          <tr>
            <th>Sale ID</th>
            <th>Check No</th>
            <th>Good ID</th>
            <th>Good Name</th>
            <th>Date of Sale</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.SALE_ID}>
              <td>{sale.SALE_ID}</td>
              <td>{sale.CHECK_NO}</td>
              <td>{sale.GOOD_ID}</td>
              <td>{sale.Good?.NAME || 'N/A'}</td>
              <td>{new Date(sale.DATE_SALE).toLocaleDateString()}</td>
              <td>{sale.QUANTITY}</td>
              <td>
                <button onClick={() => setEditSale(sale)}>Edit</button>
                <button onClick={() => deleteSale(sale.SALE_ID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default SalesList;
