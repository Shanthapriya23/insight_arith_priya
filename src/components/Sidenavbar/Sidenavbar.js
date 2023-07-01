import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "./Sidenavbar.css";

const Sidenavbar = () =>{
    const NavStyle = ({ isActive }) => {
      return {
            fontWeight: isActive ? 'bolder' : 'larger',
            color: isActive ? '#F8CF50' : 'white',
        };
    };
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
          else if(currentPage==='/place_val' || currentPage==='/place_val/smallstory' || currentPage==='/place_val/M_behind' || currentPage==='/place_val/Mishrank' || currentPage==='/place_val/try_place_val'){
            items = [
              { label: 'A small Story', link: '/place_val/smallstory' },
              { label: 'Maths Behind PVS', link: '/place_val/M_behind' },
              { label: 'Mishrank', link: '/place_val/Mishrank' },
              { label: 'Try these', link: '/place_val/try_place_val'}
            ];
          }
        else if(currentPage === '/division' || currentPage==='/division/nik_div' || currentPage==='/division/intro' ||
              currentPage==='/division/Urdh_div' || currentPage==='/division/urdh_ex' || currentPage==='/division/3_digit_num' || 
              currentPage==='/division/div_not_9' || currentPage==='/division/ex_2' ||
              currentPage==='/division/part_div_neg' || currentPage==='/division/answer_to_ques_part_div_neg' ||
              currentPage==='/division/few_ex' || currentPage==='/division/is_there_a_way_out' || currentPage==='/division/exercise')
              {
                items = [
                  { label: 'INTRODUCTION', link: '/division/intro' },
                  { label: 'NIKILAM', link: '/division/nik_div' },
                  { label: 'URDHVA TIRYAKA', link: '/division/Urdh_div' },
                  { label: 'EXERCISES', link: '/division/exercise' },
                ];
              }
        else if(currentPage === '/squar_root' || currentPage === '/squar_root/urdh_sq' || currentPage === '/squar_root/mishrank' 
              || currentPage === '/squar_root/exercise' || 
              currentPage === '/squar_root/more_ex' || currentPage === '/squar_root/urdh_sq_ex' || currentPage === '/squar_root/exer_2')
                {
                  items = [
                    { label: 'URDHVA TIRYAKA', link: '/squar_root/urdh_sq' },
                    { label: 'MISHRANK', link: '/squar_root/mishrank' },
                    { label: 'EXERCISES', link: '/squar_root/exercise' },
                    { label: 'MORE EXAMPLES', link: '/squar_root/more_ex' },
                  ];
                }
          setNavigationItems(items);
    } , [location.pathname])
  return (
    <div className="container">
      <nav className="sidebar">
        <ul className="navbar-items">
          {navigationItems.map((item,index) => (
            <li key={index} className="navbar-item" 
            style={{backgroundColor:item.link === location.pathname ? '#111' : '',}}>
              <NavLink style={NavStyle} to={item.link}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );    
};
export default Sidenavbar;
