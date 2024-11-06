import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css';

const NavBar = () => {
  return (
    <nav className='navBar'>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/songs">Songs</Link>
        </li>
        <li>
          <Link to="/playlist">Playlist</Link>
        </li>
        <li>
          <Link to="/addsongs">Add Songs</Link>
        </li>
        <li>
          <Link to="/addplaylist">Add Playlist</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;