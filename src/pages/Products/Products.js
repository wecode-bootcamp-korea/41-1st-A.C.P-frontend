/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import List from './List';
import FilterData from './Data/FilterData';
import FilterModal from './FilterModal/FilterModal';
import './Products.scss';

export default function Products() {
  const [plus, setPlus] = useState(1);
  const [modal, setModal] = useState(false);
  const { species, categoryInfo } = FilterData;
  const [productList, setProductList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const defaultLimit = 6;
  let limit = Number(searchParams.get('_limit')) || defaultLimit;
  const currentCount = limit / defaultLimit;
  const maxLength = Math.floor(productList.length / defaultLimit) || 1;

  useEffect(() => {
    navigate('/products');
  }, []);

  useEffect(() => {
    fetchProductData();
  }, []);

  // 통신시 useEffect.
  useEffect(() => {
    fetch('/data/productData.json')
      .then(res => res.json())
      .then(data => setProductList(data));
  }, []);

  const fetchProductData = () => {
    fetch(`http://10.58.52.135:3000/plants}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => setProductList(data.plantsList));
  };

  const fetchQueryData = () => {
    fetch(`http://10.58.52.135:3000/plants?${searchParams.toString()}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => setProductList(data.plantsList));
  };

  const handleMoreClick = () => {
    if (productList.length > offset) {
      offset += 6;
      searchParams.set('_offset', offset);
      setSearchParams(searchParams);
      fetchQueryData();
    }
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
                    to={
                      categoryL.id === 0
                        ? '/products'
                        : `/products?species=${categoryL.id}`
                    }
                    className="linkCategory"
                    onClick={() => setModal(true)}
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
      {modal ? <FilterModal categoryInfo={categoryInfo} /> : null}
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
