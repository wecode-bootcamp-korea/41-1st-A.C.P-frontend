import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PlantsCate from './PlantsCate/PlantsCate';
import MaterialsCate from './MaterialsCate/MaterialsCate';
import Search from './Search/Search';
import './NavBar.scss';

export default function NavBar() {
  const [currentTab, setCurrentTab] = useState('');
  const [closeBtn, setCloseBtn] = useState('closeBtn');
  const [contentsNull, setContentsNull] = useState('contentsNull');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation;

  useEffect(() => {
    isLogin();
  }, [location]);

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

  const navigate = useNavigate();

  const handleLoginClick = e => {
    e.preventDefault();

    if (isLoggedIn) {
      localStorage.removeItem('accessToken');
      setIsLoggedIn(false);
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="navBar">
      <ul className="navBarLeft">
        {TAB_ARR.map(tab => (
          <li className="menuTab" key={tab} onClick={() => menuTabOpen(tab)}>
            {tab}
          </li>
        ))}
      </ul>
      <div className={contentsNull}>
        {MAPPING_OBJ[currentTab] &&
          MAPPING_OBJ[currentTab](menuTabClose, closeBtn)}
      </div>
      <div className={closeBtn} onClick={menuTabClose}>
        닫기
        <img src="/images/nav/close_btn.png" alt="close_Btn" />
      </div>

      <div className="navBarRight">
        <div onClick={handleLoginClick}>{isLoggedIn ? 'Logout' : 'Login'}</div>
        <Link to="/cart">Cart</Link>
        <Link to="/cart">Archive</Link>
      </div>
    </nav>
  );
}

const TAB_ARR = ['Plants', 'Materials', 'Search'];

const MAPPING_OBJ = {
  Plants: menuTabClose => <PlantsCate menuTabClose={menuTabClose} />,
  Materials: menuTabClose => <MaterialsCate menuTabClose={menuTabClose} />,
  Search: (menuTabClose, closeBtn) => (
    <Search menuTabClose={menuTabClose} closeBtn={closeBtn} />
  ),
};
