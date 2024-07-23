import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';


export default function Root() {
  return (
    <>
    <div className='container'>
    
    <div className='main'>
      <Sidebar />
      <div id="detail">
        <Outlet />
      </div>
      </div>
      </div>
    </>
  );
}