import React from 'react';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const NavBar = ({}) =>{
    return(
        <div>
            <div className='NavBar'>
                <div className='logo'><h1><img src='images/logo.png'></img></h1></div>
                <ul className='nav-items'>
                    <li><Link to="/">About Me</Link></li>
                    <li><Link to="/webdev">Web Development</Link></li>
                    <li><Link to="https://mikeywalker.me/">Graphic Design</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
    }
  
  export default NavBar;