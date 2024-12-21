import React, { useState } from 'react';

const EditSale = ({ sale, updateSale, setEditSale, goods }) => {
  const [editSaleData, setEditSaleData] = useState(sale);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const saleToUpdate = {
        ...editSaleData,
        GOOD_ID: parseInt(editSaleData.GOOD_ID),
        QUANTITY: parseInt(editSaleData.QUANTITY),
      };
      await updateSale(saleToUpdate.SALE_ID, saleToUpdate);
    } catch (error) {
      console.error('Error updating sale:', error);
    }
  };

  return (
    <section>
      <h2>Edit Sale</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Check No"
          value={editSaleData.CHECK_NO}
          onChange={(e) => setEditSaleData({ ...editSaleData, CHECK_NO: e.target.value })}
          required
        />
        <select
          value={editSaleData.GOOD_ID}
          onChange={(e) => setEditSaleData({ ...editSaleData, GOOD_ID: e.target.value })}
          required
        >
          <option value="">Select Good</option>
          {goods.map((good) => (
            <option key={good.GOOD_ID} value={good.GOOD_ID}>
              {good.NAME}
            </option>
          ))}
        </select>
        <input
          type="date"
          placeholder="Date of Sale"
          value={editSaleData.DATE_SALE.split('T')[0]}
          onChange={(e) => setEditSaleData({ ...editSaleData, DATE_SALE: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={editSaleData.QUANTITY}
          onChange={(e) => setEditSaleData({ ...editSaleData, QUANTITY: e.target.value })}
          required
        />
        <button type="submit">Update Sale</button>
        <button type="button" onClick={() => setEditSale(null)}>Cancel</button>
      </form>
    </section>
  );
};

export default EditSale;
