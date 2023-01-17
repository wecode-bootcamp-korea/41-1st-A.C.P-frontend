import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Search.scss';
import SearchResult from './SearchResult';

export default function Search({ menuTabClose, closeBtn }) {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState('');

  const moveTo = (category, categoryId) => {
    navigate(`products?${category}=${categoryId}`);
    menuTabClose();
  };

  const onChange = e => {
    setSearchValue(e.target.value);
    searchParams.set('search', e.target.value);
    setSearchParams(searchParams);
  };

  const goBlank = () => {
    closeBtn === 'closeBtn' && setSearchValue('');
  };

  useEffect(() => {
    goBlank();
  }, [closeBtn]);

  // useEffect(() => {
  //   fetch(`http://10.58.52.135:3000/plants/main?sort=new&offset=0&limit=6`, {
  //     method: 'POST',
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       setSearchResult(result);
  //     });
  // }, [searchValue]);

  const plantResult = SEARCH_RESULT.filter(val => {
    return val.plant_name
      .replace(' ', '')
      .includes(searchValue.replace(' ', ''));
  });

  return (
    <div className="search">
      <div className="searchLeftBox">
        <div className="logoPart">
          <img
            src="/images/common/img_logo_b.png"
            alt="logo"
            onClick={() => {
              menuTabClose();
              navigate('/');
            }}
          />
        </div>
        <input
          type="text"
          className="searchInput"
          placeholder="Search"
          value={searchValue}
          onChange={onChange}
        />
        <div className="keywordsBox">
          <p className="popularKeyword">인기 검색어</p>
          <div className="keyword">
            {SEARCH_KEYWORDS.map(({ category, categoryId, title }) => {
              return (
                <div className="keywordTitle" key={title}>
                  <p
                    className="searchKeyword"
                    onClick={() => moveTo(category, categoryId)}
                  >
                    {title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <SearchResult plantResult={plantResult} searchValue={searchValue} />
      {/* <div className="menuImage">
        <div className="searchImage">
          <img src="/images/nav/search_img.jpg" alt="search_img" />
        </div>
      </div> */}
    </div>
  );
}

const SEARCH_KEYWORDS = [
  { category: 'species', categoryId: 2, title: '덩굴식물' },
  { category: 'species', categoryId: 4, title: '소철과 허브' },
  { category: 'positions', categoryId: 1, title: 'Houseplant' },
  { category: 'moods', categoryId: 2, title: 'Adorable' },
];

const SEARCH_RESULT = [
  {
    plant_id: 1,
    plant_name: '광휘식물',
    plant_price: '10,000₩',
    plant_image: '/images/productDetail/img03.jpg',
  },
  {
    plant_id: 2,
    plant_name: '민규식물',
    plant_price: '20,000₩',
    plant_image: '/images/productDetail/img04.jpg',
  },
  {
    plant_id: 3,
    plant_name: '상헌식물',
    plant_price: '30,000₩',
    plant_image: '/images/productDetail/img05.jpg',
  },
  {
    plant_id: 4,
    plant_name: '환성식물',
    plant_price: '40,000₩',
    plant_image: '/images/productDetail/img06.jpg',
  },
  {
    plant_id: 5,
    plant_name: '서윤식물',
    plant_price: '50,000₩',
    plant_image: '/images/productDetail/img07.jpg',
  },
  {
    plant_id: 6,
    plant_name: '현주식물',
    plant_price: '60,000₩',
    plant_image: '/images/productDetail/img08.jpg',
  },
];
