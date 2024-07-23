import { useEffect, useState } from 'react';
import '../styles/Farmer.css';
// import API_BASE_URL from '../config';


function CropTypes() {
  const [cropTypes, setcropTypes] = useState([]);
  
  useEffect(() => {
    const fetchCropTypes = async () => {
      try {
        const response = await fetch("https://agro-admin-dashboard-api.vercel.app/api/crop-types");
        const data = await response.json();
        setcropTypes(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchCropTypes();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            
          </tr>
        </thead>
        <tbody>
          {cropTypes.map((cropType, index) => (
            <tr key={cropType.id}>
              {/* <td>{index + 1}</td/> */}
              <td>{cropType.id}</td>
              <td>{cropType.name}</td>
              
             
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CropTypes;
