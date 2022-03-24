import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? `${style.activeLink}` : `${style.link}`
      }
    >
      Main
    </NavLink>

    <NavLink
      to="/contacts"
      className={({ isActive }) =>
        isActive ? `${style.activeLink}` : `${style.link}`
      }
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
