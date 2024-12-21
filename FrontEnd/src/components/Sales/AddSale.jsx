import React, { useState } from 'react';

const AddSale = ({ addSale, goods }) => {
  const [newSale, setNewSale] = useState({
    CHECK_NO: '',
    GOOD_ID: '',
    DATE_SALE: '',
    QUANTITY: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const saleToAdd = {
        ...newSale,
        GOOD_ID: parseInt(newSale.GOOD_ID),
        QUANTITY: parseInt(newSale.QUANTITY),
      };
      await addSale(saleToAdd);
      setNewSale({ CHECK_NO: '', GOOD_ID: '', DATE_SALE: '', QUANTITY: '' });
    } catch (error) {
      console.error('Error adding sale:', error);
    }
  };

  return (
    <section>
      <h2>Add New Sale</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Check No"
          value={newSale.CHECK_NO}
          onChange={(e) => setNewSale({ ...newSale, CHECK_NO: e.target.value })}
          required
        />
        <select
          value={newSale.GOOD_ID}
          onChange={(e) => setNewSale({ ...newSale, GOOD_ID: e.target.value })}
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
          value={newSale.DATE_SALE}
          onChange={(e) => setNewSale({ ...newSale, DATE_SALE: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newSale.QUANTITY}
          onChange={(e) => setNewSale({ ...newSale, QUANTITY: e.target.value })}
          required
        />
        <button type="submit">Add Sale</button>
      </form>
    </section>
  );
};

export default AddSale;
