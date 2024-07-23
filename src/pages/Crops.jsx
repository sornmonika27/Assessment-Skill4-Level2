
import '../styles/Farmer.css';
import React, { useState, useEffect } from 'react';
// import API_BASE_URL from '../config';
import DropDownactive from '../components/drowp';

function useCrops() {
  const [farmlands, setFarmlands] = useState([]);

  useEffect(() => {
    const fetchFarmlands = async () => {
      try {
        const response = await fetch("https://agro-admin-dashboard-api.vercel.app/api/crops");
        const data = await response.json();
        setFarmlands(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFarmlands();
  }, []);

  return farmlands;
}

function Crops() {
  const [statusFilter, setStatusFilter] = useState('All');
  const farmlands = useCrops();

  const handleFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const filteredFarmlands = statusFilter === 'All'
    ? farmlands
    : farmlands.filter(farmland => farmland.status.toLowerCase() === statusFilter.toLowerCase());

  return (
    <>
      <div className="dropactive">
        <DropDownactive onChange={handleFilterChange} />
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Latitude</th>
          
          </tr>
        </thead>
        <tbody>
          {filteredFarmlands.map((farmland, index) => (
            <tr key={farmland.id}>
              <td>{farmland.id}</td>
              <td>{farmland.name}</td>
              <td>{farmland.crop_type_id}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Crops;