import React, { useState, useEffect } from 'react';
import { 
  getTotalFarmers,
  getTotalFarmlands,
  getTotalCropcycles,
  getTotalFarmlandSize
} from '../api/summary';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [totalFarmers, setTotalFarmers] = useState(0);
  const [totalFarmlands, setTotalFarmlands] = useState(0);
  const [activeCropcycles, setActiveCropcycles] = useState(0);
  const [totalFarmlandSize, setTotalFarmlandSize] = useState(0);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const farmersData = await getTotalFarmers();
        const farmlandsData = await getTotalFarmlands();
        const cropcyclesData = await getTotalCropcycles();
        const farmlandSizeData = await getTotalFarmlandSize();

        console.log("Data fetched: ", { farmersData, farmlandsData, cropcyclesData, farmlandSizeData });

        setTotalFarmers(farmersData.totalFarmers);

        setTotalFarmlands(farmlandsData.totalFarmlands);
        setActiveCropcycles(cropcyclesData.activeCropCycles);
        setTotalFarmlandSize(farmlandSizeData.totalFarmlandSize);

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="dashboard-container">
      <h2 className='over'>Overview</h2>
      <div className="dashboard-stats">
        <div className="dashboard-stat">
          <h3>Total Farmers</h3>
          <p>{totalFarmers}</p>
        </div>
        <div className="dashboard-stat">
          <h3>Total Farmlands</h3>
          <p>{totalFarmlands}</p>
        </div>
        <div className="dashboard-stat">
          <h3>Total Active Cropcycles</h3>
          <p>{activeCropcycles}</p>
        </div>
        <div className="dashboard-stat">
          <h3>Total Farmland Size</h3>
          <p>{totalFarmlandSize}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
