import '../styles/Farmer.css';
import API_BASE_URL from '../config';
import { useEffect, useState } from 'react';
import Dropdown from '../components/Dropdownprovince-District'

function Farmers() {
  const [farmers, setFarmers] = useState([]);
  
  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/farmers`);
        const data = await response.json();
        setFarmers(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchFarmers();
  }, []);

  return (
    <>
    <Dropdown/>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID Card</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Source</th>
            <th>District ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map((farmer, index) => (
            <tr key={farmer.id}>
              <td>{index + 1}</td>
              <td>{farmer.id_card}</td>
              <td>{farmer.first_name}</td>
              <td>{farmer.last_name}</td>
              <td>{farmer.gender}</td>
              <td>{farmer.phone}</td>
              <td>{farmer.source}</td>
              <td>{farmer.district_id}</td>
              <td>Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Farmers;
