import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

import './stylesheets/menus.scss';

const selectedStyle = {
  backgroundColor: 'white',
  color: 'slatergray',
};

export const AboutMenu = ({ match }) =>
  (
    <div className='about-menu'>
      <li>
        <NavLink to='/about'
          style={match.isExact && selectedStyle} >
          [Company]
      </NavLink>
      </li>
      <li>
        <NavLink to='/about/history'
          style={selectedStyle} >
          [History]
      </NavLink>
      </li>
      <li>
        <NavLink to='/about/services'
          style={selectedStyle} >
          [Services]
      </NavLink>
      </li>
      <li>
        <NavLink to='/about/location'
          style={selectedStyle} >
          [Location]
      </NavLink>
      </li>
    </div>
  );

export const Menu = () =>
  (
    <div className='home'>
      <h1>[company Website]</h1>
      <nav className='main-menu'>
        <NavLink to='/'>
          <FaHome />
        </NavLink>
        <NavLink to='/about' activeStyle={selectedStyle}>
          [About]
        </NavLink>
        <NavLink to='/events' activeStyle={selectedStyle}>
          [Events]
        </NavLink>
        <NavLink to='/products' activeStyle={selectedStyle}>
          [Products]
        </NavLink>
        <NavLink to='/contact' activeStyle={selectedStyle}>
          [Contact Us]
        </NavLink>
      </nav>
    </div>
  );
