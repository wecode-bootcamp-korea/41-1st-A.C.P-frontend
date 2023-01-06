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
