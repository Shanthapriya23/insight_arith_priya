import React from 'react';
import Sidebar from "../Sidenavbar/Sidebar"
import { Outlet } from 'react-router-dom';

export default function Mul()

{
    return(
        <div className='top-container'>
            <Sidebar/>
            <Outlet/>
        </div>
    );
}