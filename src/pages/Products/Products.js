/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { FETCH_PLANTS_API } from '../../config';
import List from './List';
import FilterData from './Data/FilterData';
import FilterModal from './FilterModal/FilterModal';
import './Products.scss';

export default function Products() {
  const [modal, setModal] = useState(false);
  const { species, categoryInfo } = FilterData;
  const [productList, setProductList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const defaultLimit = 6;
  const maxProductLength = 41;
  let limit = Number(searchParams.get('limit')) || defaultLimit;
  const currentCount = limit / defaultLimit;
  const maxLength = Math.ceil(maxProductLength / defaultLimit) || 1;

  useEffect(() => {
    navigate('/products/offset');
    searchParams.set('offset', 0);
    searchParams.set('limit', 6);
    setSearchParams(searchParams);
    fetchQueryData(searchParams);
  }, []);

  const fetchProductData = () => {
    fetch(FETCH_PLANTS_API, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => setProductList(data.plantsList));
  };

  const fetchQueryData = queryString => {
    fetch(`${FETCH_PLANTS_API}?${queryString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => setProductList(data.plantsList));
  };

  const handleMoreClick = () => {
    if (maxProductLength > limit) {
      limit += 6;
      searchParams.set('offset', 0);
      searchParams.set('limit', limit);
      setSearchParams(searchParams);
      fetchQueryData(searchParams);
    }
  };

  const handleLinkCategory = id => {
    searchParams.set('offset', 0);
    searchParams.set('limit', 6);
    searchParams.set('species', id === 0 ? '' : id);
    setSearchParams(searchParams);
    fetchQueryData(searchParams);
    setModal(false);
  };

  return (
    <>
      <div className="filter">
        <div className="FilterOn">
          <ul className="plantsFilter">
            {species.map(function (categoryL, index) {
              return (
                //1. FilterData - species - categoryL의 관계
                <li key={categoryL.id} className="plantFilter">
                  <Link
                    className="linkCategory"
                    onClick={() => handleLinkCategory(categoryL.id)}
                  >
                    {categoryL.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          className="filterButton"
          onClick={() => {
            setModal(!modal);
          }}
        >
          필터
        </button>
      </div>
      {modal ? (
        <FilterModal
          categoryInfo={categoryInfo}
          fetchQueryData={fetchQueryData}
        />
      ) : null}
      <div className="productsMain">
        <List productList={productList} />
      </div>
      <div className="button">
        <button
          className="btn"
          onClick={handleMoreClick}
          disabled={currentCount === maxLength && 'disabled'}
        >
          more ({currentCount}/{maxLength})
        </button>
      </div>
    </>
  );
}
