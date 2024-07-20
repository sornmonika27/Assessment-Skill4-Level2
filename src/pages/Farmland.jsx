
import '../styles/Farmer.css';
import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../config';
import DropDownactive from '../components/drowp';

function useFarmlands() {
  const [farmlands, setFarmlands] = useState([]);

  useEffect(() => {
    const fetchFarmlands = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/farmlands`);
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

function Farmland() {
  const [statusFilter, setStatusFilter] = useState('All');
  const farmlands = useFarmlands();

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
            <th>Size</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Farmer (owner)</th>
            <th>Status</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {filteredFarmlands.map((farmland, index) => (
            <tr key={farmland.id}>
              <td>{farmland.id}</td>
              <td>{farmland.size}</td>
              <td>{farmland.latitude}</td>
              <td>{farmland.longitude}</td>
              <td>{farmland.farmer_id}</td>
              <td>{farmland.status}</td>
              <td><button id='edit'>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Farmland;