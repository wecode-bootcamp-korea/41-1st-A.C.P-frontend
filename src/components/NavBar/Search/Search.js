import React from 'react';
import { Link } from 'react-router-dom';
import './Search.scss';

export default function Search() {
  return (
    <div className="search">
      <div className="searchLeftBox">
        <div className="logoPart">
          <Link to="/">
            <img src="/images/common/img_logo_b.png" alt="logo" />
          </Link>
        </div>
        <input type="text" className="searchInput" placeholder="Search" />
        <div className="keywordsBox">
          <p className="popularKeyword">인기 검색어</p>
          <div className="keyword">
            <Link to="/products?species=2" className="searchKeyword">
              덩굴식물
            </Link>
            <br />
            <Link to="/products?species=4" className="searchKeyword">
              소철과 허브
            </Link>
            <br />
            <Link to="/products?position=1" className="searchKeyword">
              Houseplant
            </Link>
            <br />
            <Link to="/products?mood=2" className="searchKeyword">
              Adorable
            </Link>
          </div>
        </div>
      </div>
      <div className="menuImage">
        <div className="searchImage">
          <img src="/images/nav/search_img.jpg" alt="search_img" />
        </div>
      </div>
    </div>
  );
}
