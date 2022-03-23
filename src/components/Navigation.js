import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to="/">Main</NavLink>

    <NavLink to="/todos">Заметки</NavLink>
  </nav>
);

export default Navigation;
