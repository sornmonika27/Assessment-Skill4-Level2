import { useEffect, useState } from 'react';
import '../styles/Farmer.css';
import API_BASE_URL from '../config';


function Cropcycle() {
  const [cropcycles, setCropcycles] = useState([]);
  
  useEffect(() => {
    const fetchCropcycles = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/crop-cycles`);
        const data = await response.json();
        setCropcycles(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchCropcycles();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Farmland ID</th>
            <th>Crop ID</th>
            <th>Open ID</th>
            <th>Close ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {cropcycles.map((cropcycle, index) => (
            <tr key={cropcycle.id}>
              {/* <td>{index + 1}</td/> */}
              <td>{cropcycle.id}</td>
              <td>{cropcycle.farm_land_id}</td>
              <td>{cropcycle.crop_id}</td>
              <td>{cropcycle.open_date}</td>
              <td>{cropcycle.close_date}</td>
              <td>{cropcycle.status}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Cropcycle;
