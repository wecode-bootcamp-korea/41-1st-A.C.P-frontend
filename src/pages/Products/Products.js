/*eslint-disable*/
import React, { useState } from 'react';
import './Products.scss';
import List from './List';

export default function Products() {
  const [plus, setPlus] = useState(1);
  return (
    <>
      <div>배너</div>
      <div className="filter">
        <ul className="plantsFilter">
          <li className="plantFilter">식물 모두 보기</li>
          <li className="plantFilter1">천남성과</li>
          <li className="plantFilter1">덩굴식물</li>
          <li className="plantFilter1">양치식물</li>
          <li className="plantFilter1">소철, 허브</li>
          <li className="plantFilter1">선인장</li>
          <li className="plantFilter1">목본류</li>
        </ul>

        <button className="filterBox">필터</button>
      </div>
      <div className="productsMain">
        <List></List>
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
