// import React, { useState, useEffect } from "react";
// import { getProvince } from "../api/province";
// import '../styles/Dropdown.css'; 

// const Dropdown = () => {
//   const [provinces, setprovinces] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const provincesData = await getProvince();
//         console.log("Data provinces: ", {
//           provincesData,
//         });

//         setprovinces(provincesData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <div className="dropdown-container">
//         <select>
//           <option>All</option>
//           {provinces.map((province) => (
//             <option key={province.id}>{province.name}</option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;