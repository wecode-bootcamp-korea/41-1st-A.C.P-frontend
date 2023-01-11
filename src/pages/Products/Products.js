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
  console.log(searchParams.toString());

  const defaultOffset = 6;
  let offset = Number(searchParams.get('_offset')) || defaultOffset;
  const maxLength = Math.floor(productList.length / defaultOffset);
  const currentCount = offset / defaultOffset;

  useEffect(() => {
    navigate('/products');
  }, []);

  // useEffect(() => {
  //   fetch(`http://10.58.52.135:3000/lists/filter?${searchParams.toString()}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => setProductList(data));
  // }, [searchParams]);

  useEffect(() => {
    fetch('/data/productData.json')
      .then(res => res.json())
      .then(data => setProductList(data));
  }, []);

  const handleMoreClick = () => {
    if (productList.length > offset) {
      offset += 6;
      searchParams.set('_offset', offset);
      setSearchParams(searchParams);

      // url 변경 필요
      fetch(
        `http://10.58.52.135:3000/lists/filter?${searchParams.toString()}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        }
      )
        .then(res => res.json())
        .then(data => setProductList(data));
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
