import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

export default function NavBar() {
  return (
    <nav className="navBar">
      <ul className="navBarLeft">
        <li className="menu">
          <Link to="/products">Plants</Link>
        </li>
        <li className="menu">
          <Link to="/products">Materials</Link>
        </li>
        <li className="menu">
          <Link to="/menulist">Search</Link>
        </li>
      </ul>
      <div className="navBarRight">
        <Link to="/login">Login</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/cart">Archive</Link>
      </div>
    </nav>
  );
}
