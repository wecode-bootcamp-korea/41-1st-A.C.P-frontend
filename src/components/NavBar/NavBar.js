import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import PlantsCate from './PlantsCate';
import MaterialsCate from './MaterialsCate';
import './NavBar.scss';

export default function NavBar() {
  const [currentTab, setCurrentTab] = useState('');
  const [closeBtn, setCloseBtn] = useState('closeBtn');
  const [contentsNull, setContentsNull] = useState('contentsNull');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    menuTabClose();
  }, [location.key]);

  useEffect(() => {
    isLogin();
  }, []);

  const menuTabOpen = tab => {
    setContentsNull('contents');
    setCurrentTab(tab);
    setCloseBtn('closeBtnShow');
  };

  const menuTabClose = () => {
    setCloseBtn('closeBtn');
    setContentsNull('contentsNull');
  };

  const isLogin = () => {
    const accessToken = localStorage.getItem('accessToken');
    accessToken && setIsLoggedIn(true);
  };

  const handleLoginClick = e => {
    isLoggedIn && e.preventDefault();
    isLoggedIn && setIsLoggedIn(false);
    isLoggedIn && localStorage.removeItem('accessToken');
  };

  return (
    <nav className="navBar">
      <ul className="navBarLeft">
        {TAB_ARR.map((tab, index) => (
          <li className="menuTab" key={index} onClick={() => menuTabOpen(tab)}>
            {tab}
          </li>
        ))}
      </ul>
      <div className={contentsNull}>{MAPPING_OBJ[currentTab]}</div>
      <div className={closeBtn} onClick={menuTabClose}>
        닫기
        <img src="images/nav/close_btn.png" alt="close_Btn" />
      </div>

      <div className="navBarRight">
        <Link to="/login" onClick={handleLoginClick}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </Link>
        <Link to="/cart">Cart</Link>
        <Link to="/cart">Archive</Link>
      </div>
    </nav>
  );
}

const TAB_ARR = ['Plants', 'Materials', 'Search'];

const MAPPING_OBJ = {
  Plants: <PlantsCate />,
  Materials: <MaterialsCate />,
};
