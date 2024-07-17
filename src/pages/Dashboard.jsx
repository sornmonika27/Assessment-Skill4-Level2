import React, { useState, useEffect } from 'react';
import {
  getTotalFarmers,
} from '../api/summary';
import '../styles/Dashboard.css'

const Dashboard = () => {
  const [totalFarmers, setTotalFarmers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const farmersData = await getTotalFarmers();
        setTotalFarmers(farmersData.totalFarmers);



        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="dashboard-container">
        <h2>Overview</h2>
        <div className="dashboard-stats">
          <div className="dashboard-stat">
            <h3>Total Farmers</h3>
            <p>{totalFarmers}</p>
          </div>
          <div className="dashboard-stat">
            <h3>Total Farmers</h3>
            <p>{totalFarmers}</p>
          </div>
          <div className="dashboard-stat">
            <h3>Total Farmers</h3>
            <p>{totalFarmers}</p>
          </div>
          <div className="dashboard-stat">
            <h3>Total Farmers</h3>
            <p>{totalFarmers}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
