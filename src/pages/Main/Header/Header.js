import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src="images/common/img_logo_b.png" alt="plait_logo" />
      </Link>
    </div>
  );
}
