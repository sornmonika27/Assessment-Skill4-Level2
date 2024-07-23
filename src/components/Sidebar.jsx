import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    
    
    <div id="sidebar">
      
      <nav>
        <ul>
          <li>
            <NavLink to="/crops">Crops</NavLink>
          </li>
          <li>
            <NavLink to="/croptypes">Crop Types</NavLink>
          </li>
        
       
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;