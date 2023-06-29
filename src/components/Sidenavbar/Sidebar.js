import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () =>{
    const location = useLocation();
    const [navigationItems, setNavigationItems] = useState([]);
    useEffect(
        ()=>
    {
        const currentPage = location.pathname;
        let items = [];
        if (currentPage === '/mul' || currentPage==='/mul/MulIntro' || currentPage === '/mul/Nikhilam' || currentPage==='/mul/Urdvha') {
            items = [
              { label: 'Introduction', link: '/mul/MulIntro' },
              { label: 'Nikhilam', link: '/mul/Nikhilam' },
              { label: 'Urdvha Tiryagbyam', link: '/mul/Urdvha' },
            ];
          }
          setNavigationItems(items);
    } , [location.pathname])

return (
    <div className="container">
      <nav className="sidebar">
        <ul className="navbar-items">
          {navigationItems.map((item,index) => (
            <li key={index} className="navbar-item">
              <NavLink to={item.link}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
  // ...
  
    
};
export default Sidebar;