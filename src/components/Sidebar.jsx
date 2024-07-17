import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    
    
    <div id="sidebar">
      
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/farmers">Farmers</NavLink>
          </li>
          <li>
            <NavLink to="/farmlands">Farmlands</NavLink>
          </li>
          <li>
            <NavLink to="/crpoCycles">Crop Cycles</NavLink>
          </li>
          <li>
            <NavLink to="/acounrt">Accounrt</NavLink>
          </li>
       
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;