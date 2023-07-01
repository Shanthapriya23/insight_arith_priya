import React from 'react';
import Sidenavbar from '../Sidenavbar/Sidenavbar';
import { Outlet } from 'react-router-dom';
const Place_val = () => {
  return (
    <div>
    <Sidenavbar/>
    <Outlet/>
      
    </div>
  );
};
export default Place_val;
