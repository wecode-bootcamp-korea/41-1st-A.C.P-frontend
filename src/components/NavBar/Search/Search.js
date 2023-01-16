import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import './Search.scss';
import SearchResult from './SearchResult';

export default function Search({ menuTabClose }) {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState('');
  // const [searchResult, setSearchResult] = useState();

  const moveTo = (category, categoryId) => {
    menuTabClose();
    navigate(`plants?${category}=${categoryId}`);
  };

  const onChange = e => {
    setSearchValue(e.target.value);
    searchParams.set('search', e.target.value);
    setSearchParams(searchParams);
  };

  // const onChange = e => {
  //   setSearchValue(e.target.value);
  //   searchParams.set('search', e.target.value);
  //   setSearchParams(searchParams);
  // };

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
          <Link to="/">
            <img src="images/common/img_logo_b.png" alt="logo" />
          </Link>
        </div>
        <input
          type="text"
          className="searchInput"
          placeholder="Search"
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
      <SearchResult plantResult={plantResult} />
      <div className="menuImage">
        <div className="searchImage">
          <img src="images/nav/search_img.jpg" alt="search_img" />
        </div>
      </div>
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
  { plant_id: 1, plant_name: '플로리다 소철', plant_img: '' },
  { plant_id: 2, plant_name: '아이비', plant_img: '' },
  { plant_id: 3, plant_name: '여인초', plant_img: '' },
  { plant_id: 4, plant_name: '필로덴드론 플루토', plant_img: '' },
  { plant_id: 5, plant_name: '아단소니', plant_img: '' },
  { plant_id: 6, plant_name: '몬스테라', plant_img: '' },
];
