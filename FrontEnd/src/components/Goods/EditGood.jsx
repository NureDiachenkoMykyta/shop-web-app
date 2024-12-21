import React, { useState } from 'react';

const EditGood = ({ good, updateGood, setEditGood, departments }) => {
  const [editGoodData, setEditGoodData] = useState(good);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const goodToUpdate = {
        ...editGoodData,
        DEPT_ID: parseInt(editGoodData.DEPT_ID)
      };
      await updateGood(goodToUpdate.GOOD_ID, goodToUpdate);
    } catch (error) {
      console.error('Error updating good:', error);
    }
  };

  return (
    <section>
      <h2>Edit Good</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={editGoodData.NAME}
          onChange={(e) => setEditGoodData({ ...editGoodData, NAME: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={editGoodData.PRICE}
          onChange={(e) => setEditGoodData({ ...editGoodData, PRICE: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={editGoodData.QUANTITY}
          onChange={(e) => setEditGoodData({ ...editGoodData, QUANTITY: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Producer"
          value={editGoodData.PRODUCER}
          onChange={(e) => setEditGoodData({ ...editGoodData, PRODUCER: e.target.value })}
          required
        />
        <select
          value={editGoodData.DEPT_ID}
          onChange={(e) => setEditGoodData({ ...editGoodData, DEPT_ID: e.target.value })}
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
          placeholder="Description"
          value={editGoodData.DESCRIPTION}
          onChange={(e) => setEditGoodData({ ...editGoodData, DESCRIPTION: e.target.value })}
        />
        <button type="submit">Update Good</button>
        <button type="button" onClick={() => setEditGood(null)}>Cancel</button>
      </form>
    </section>
  );
};

export default EditGood;
