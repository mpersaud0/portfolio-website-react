import React from 'react';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const NavBar = ({}) =>{
    return(
        <div>
            <div className='NavBar'>
                <ul className='nav-items'>
                    <li><Link to="/">About Me</Link></li>
                    <li><Link to="/webdev">Web Development</Link></li>
                    <li><Link to="/graphicdesign">Graphic Design</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
    }
  
  export default NavBar;