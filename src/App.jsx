import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/header';


export default function Root() {
  return (
    <>
    <div className='container'>
      <Header/>
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