import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FETCH_PLANTS_API } from '../../../config';
import SearchResult from './SearchResult';
import './Search.scss';

export default function Search({ menuTabClose, closeBtn }) {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState('');
  const [plantResult, setPlantResult] = useState([]);

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

  useEffect(() => {
    fetch(`${FETCH_PLANTS_API}/search?content=${searchValue}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => {
        setPlantResult(result);
        console.log(result);
      });
  }, [searchValue]);

  // const plantResult = SEARCH_RESULT.filter(val => {
  //   return val.plant_name
  //     .replace(' ', '')
  //     .includes(searchValue.replace(' ', ''));
  // });

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
    </div>
  );
}

const SEARCH_KEYWORDS = [
  { category: 'species', categoryId: 2, title: '덩굴식물' },
  { category: 'species', categoryId: 4, title: '소철과 허브' },
  { category: 'positions', categoryId: 1, title: 'Houseplant' },
  { category: 'moods', categoryId: 2, title: 'Adorable' },
];
