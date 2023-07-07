import React from 'react';
import Sidenavbar from "../Sidenavbar/Sidenavbar"
import { Outlet } from 'react-router-dom';

export default function Mul()

{
    return(
        <div className='top-container'>
            <Sidenavbar/>
            <Outlet/>
        </div>
    );
}