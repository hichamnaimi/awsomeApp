import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => (
  <div>
    <nav style={{ marginBottom: '2%' }}>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/music">Music</NavLink></li>
        <li><NavLink to="/prime">Prime</NavLink></li>
      </ul>
    </nav>
    {props.children}
  </div>
);

export default Navigation;