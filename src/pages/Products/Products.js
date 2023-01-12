/*eslint-disable*/
import React, { useState } from 'react';
import List from './List';
import FilterData from './FilterData';
import FilterModal from './FilterModal';
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
    if (productList.length > limit) {
      limit += 6;
      searchParams.set('_limit', limit);
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
        <>
          <ul className="plantsFilter">
            식물 모두 보기 |
            {species.map(function (categoryL, index) {
              return (
                //1. FilterData - species - categoryL의 관계
                <li key={categoryL.id} className="plantFilter">
                  {categoryL.name}
                </li>
              );
            })}
          </ul>
        </>
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
        <List />
      </div>
      <div className="button">
        <button
          className="btn"
          onClick={() => {
            setPlus(plus + 1);
          }}
          disabled={plus == 5 ? true : false}
        >
          more ({plus}/5)
        </button>
      </div>
    </>
  );
}
