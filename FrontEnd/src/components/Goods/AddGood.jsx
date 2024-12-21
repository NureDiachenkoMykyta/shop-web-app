import React, { useState } from 'react';

const AddGood = ({ addGood, departments }) => {
  const [newGood, setNewGood] = useState({
    NAME: '',
    PRICE: '',
    QUANTITY: '',
    PRODUCER: '',
    DEPT_ID: '',
    DESCRIPTION: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const goodToAdd = {
        ...newGood,
        DEPT_ID: parseInt(newGood.DEPT_ID)
      };
      await addGood(goodToAdd);
      setNewGood({ NAME: '', PRICE: '', QUANTITY: '', PRODUCER: '', DEPT_ID: '', DESCRIPTION: '' });
    } catch (error) {
      console.error('Error adding good:', error);
    }
  };

  return (
    <section>
      <h2>Add New Good</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={newGood.NAME}
          onChange={(e) => setNewGood({ ...newGood, NAME: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={newGood.PRICE}
          onChange={(e) => setNewGood({ ...newGood, PRICE: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newGood.QUANTITY}
          onChange={(e) => setNewGood({ ...newGood, QUANTITY: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Producer"
          value={newGood.PRODUCER}
          onChange={(e) => setNewGood({ ...newGood, PRODUCER: e.target.value })}
          required
        />
        <select
          value={newGood.DEPT_ID}
          onChange={(e) => setNewGood({ ...newGood, DEPT_ID: e.target.value })}
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
          value={newGood.DESCRIPTION}
          onChange={(e) => setNewGood({ ...newGood, DESCRIPTION: e.target.value })}
        />
        <button type="submit">Add Good</button>
      </form>
    </section>
  );
};

export default AddGood;
