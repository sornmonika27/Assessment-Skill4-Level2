import React, { useState, useEffect } from "react";
import { getProvince, getDistrict } from "../api/province";

const Dropdown = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const provincesData = await getProvince();
        console.log("Provinces fetched: ", provincesData);
        setProvinces(provincesData);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchProvinces();
  }, []);

  const handleChange = async (event) => {
    const provinceId = event.target.value;
    setSelectedProvince(provinceId);
    try {
      const districtsData = await getDistrict(provinceId);
      console.log("Districts fetched: ", districtsData);
      setDistricts(districtsData);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  return (
    <div className="App">
      <div className="dropdown-container">
        <select onChange={handleChange} value={selectedProvince}>
          <option value="">All Provinces</option>
          {provinces.map((province) => (
            <option key={province.id} value={province.id}>{province.name}</option>
          ))}
        </select>

        <select>
          <option value="">All Districts</option>
          {districts.map((district) => (
            <option key={district.id} value={district.id}>{district.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
