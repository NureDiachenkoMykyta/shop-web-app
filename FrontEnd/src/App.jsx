import React, { useState, useEffect } from 'react';
import {
  fetchGoods, addGood, updateGood, deleteGood,
  fetchDepartments, addDepartment, updateDepartment, deleteDepartment,
  fetchSales, addSale, updateSale, deleteSale,
  fetchWorkers, addWorker, updateWorker, deleteWorker, updateDepartmentDescriptions,
  fetchMaxItemsCheckByProducer,
  fetchGoodsCountInDepartment,
} from './api/api';
import GoodsList from './components/Goods/GoodsList';
import AddGood from './components/Goods/AddGood';
import EditGood from './components/Goods/EditGood';
import DepartmentsList from './components/Departments/DepartmentsList';
import AddDepartment from './components/Departments/AddDepartment';
import EditDepartment from './components/Departments/EditDepartment';
import SalesList from './components/Sales/SalesList';
import AddSale from './components/Sales/AddSale';
import EditSale from './components/Sales/EditSale';
import WorkersList from './components/Workers/WorkersList';
import AddWorker from './components/Workers/AddWorker';
import EditWorker from './components/Workers/EditWorker';
import './App.css';

function App() {
  const [goods, setGoods] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [sales, setSales] = useState([]);
  const [workers, setWorkers] = useState([]);
  
  const [editGood, setEditGood] = useState(null);
  const [editDepartment, setEditDepartment] = useState(null);
  const [editSale, setEditSale] = useState(null);
  const [editWorker, setEditWorker] = useState(null);

  const [producerName, setProducerName] = useState('');
  const [maxItemsChecks, setMaxItemsChecks] = useState([]);

  const handleGetMaxItemsByProducer = async () => {
    if (!producerName.trim()) {
      alert('Producer name cannot be empty.');
      return;
    }
    try {
      const response = await fetchMaxItemsCheckByProducer(producerName);
      setMaxItemsChecks(response.data); 
    } catch (error) {
      console.error(error);
      alert('Error retrieving checks with the maximum number of goods.');
    }
  };

  const loadAllData = async () => {
    try {
      const [goodsData, departmentsData, salesData, workersData] = await Promise.all([
        fetchGoods(),
        fetchDepartments(),
        fetchSales(),
        fetchWorkers()
      ]);
      setGoods(goodsData.data);
      setDepartments(departmentsData.data);
      setSales(salesData.data);
      setWorkers(workersData.data);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  // Goods Functions
  const handleAddGood = async (good) => {
    try {
      await addGood(good);
      loadAllData();
    } catch (error) {
      console.error('Error adding a good:', error);
    }
  };

  const handleUpdateGood = async (id, good) => {
    try {
      await updateGood(id, good);
      loadAllData();
    } catch (error) {
      console.error('Error updating a good:', error);
    }
  };

  const handleDeleteGood = async (id) => {
    try {
      await deleteGood(id);
      loadAllData();
    } catch (error) {
      console.error('Error deleting a good:', error);
    }
  };

  // Department Functions
  const handleAddDepartment = async (department) => {
    try {
      await addDepartment(department);
      loadAllData();
    } catch (error) {
      console.error('Error adding a department:', error);
    }
  };

  const handleUpdateDepartment = async (id, department) => {
    try {
      await updateDepartment(id, department);
      loadAllData();
    } catch (error) {
      console.error('Error updating a department:', error);
    }
  };

  const handleDeleteDepartment = async (id) => {
    try {
      await deleteDepartment(id);
      loadAllData();
    } catch (error) {
      console.error('Error deleting a department:', error);
    }
  };

  // Sales Functions
  const handleAddSale = async (sale) => {
    try {
      await addSale(sale);
      loadAllData();
    } catch (error) {
      console.error('Error adding a sale:', error);
    }
  };

  const handleUpdateSale = async (id, sale) => {
    try {
      await updateSale(id, sale);
      loadAllData();
    } catch (error) {
      console.error('Error updating a sale:', error);
    }
  };

  const handleDeleteSale = async (id) => {
    try {
      await deleteSale(id);
      loadAllData();
    } catch (error) {
      console.error('Error deleting a sale:', error);
    }
  };

  // Worker Functions
  const handleAddWorker = async (worker) => {
    try {
      await addWorker(worker);
      loadAllData();
    } catch (error) {
      console.error('Error adding a worker:', error);
    }
  };

  const handleUpdateWorker = async (id, worker) => {
    try {
      await updateWorker(id, worker);
      loadAllData();
    } catch (error) {
      console.error('Error updating a worker:', error);
    }
  };

  const handleDeleteWorker = async (id) => {
    try {
      await deleteWorker(id);
      loadAllData();
    } catch (error) {
      console.error('Error deleting a worker:', error);
    }
  };

  const handleUpdateDescription = async (deptId) => {
    try {
      await updateDepartmentDescriptions(deptId);
      loadAllData();
      alert(`Product descriptions in department ${deptId} were updated successfully!`);
    } catch (error) {
      console.error(error);
      alert('Error updating product descriptions.');
    }
  };
  
  const handleCountGoods = async (deptId) => {
    try {
      const response = await fetchGoodsCountInDepartment(deptId);
      const { goodsCount } = response.data; 
      alert(`Department ${deptId} has ${goodsCount} goods.`);
    } catch (error) {
      console.error(error);
      alert('Error counting goods in the department.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Goods, Departments, Sales & Workers Management</h1>
      </header>
      <main>
        {/* Goods Section */}
        <AddGood addGood={handleAddGood} departments={departments} />
        {editGood && <EditGood good={editGood} updateGood={handleUpdateGood} setEditGood={setEditGood} departments={departments} />}
        <GoodsList goods={goods} setEditGood={setEditGood} deleteGood={handleDeleteGood} />

        {/* Departments Section */}
        <AddDepartment addDepartment={handleAddDepartment} />
        {editDepartment && <EditDepartment department={editDepartment} updateDepartment={handleUpdateDepartment} setEditDepartment={setEditDepartment} />}
        <DepartmentsList
        departments={departments}
        setEditDepartment={setEditDepartment}
        deleteDepartment={handleDeleteDepartment}
        handleUpdateDescription={handleUpdateDescription}
        handleCountGoods={handleCountGoods} 
      />

        {/* Sales Section */}
        <AddSale addSale={handleAddSale} goods={goods} />
        {editSale && <EditSale sale={editSale} updateSale={handleUpdateSale} setEditSale={setEditSale} goods={goods} />}
        <SalesList sales={sales} setEditSale={setEditSale} deleteSale={handleDeleteSale} />

        {/* Workers Section */}
        <AddWorker addWorker={handleAddWorker} departments={departments} />
        {editWorker && <EditWorker worker={editWorker} updateWorker={handleUpdateWorker} setEditWorker={setEditWorker} departments={departments} />}
        <WorkersList workers={workers} setEditWorker={setEditWorker} deleteWorker={handleDeleteWorker} />


        <section>
        <h2>Get Checks With Max Items By Producer</h2>
        <input
          type="text"
          placeholder="Enter producer name"
          value={producerName}
          onChange={(e) => setProducerName(e.target.value)}
        />
        <button onClick={handleGetMaxItemsByProducer}>Get</button>

        {/* Displaying Results */}
        {maxItemsChecks && maxItemsChecks.length > 0 && (
          <ul>
            {maxItemsChecks.map((row, idx) => (
              <li key={idx}>
                Check No: {row.check_no || 'N/A'}, Items Count: {row.max_items || 0}, 
                {row.message && `Message: ${row.message}`}
              </li>
            ))}
          </ul>
        )}
      </section>

      </main>
    </div>
  );
}

export default App;
