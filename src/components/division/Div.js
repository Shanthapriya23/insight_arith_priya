import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidenavbar from '../Sidenavbar/Sidenavbar';

export default function Div()
{
  return ( 
    <div>
      <Sidenavbar/>
      <Outlet/>
    </div>
    
  );
}



