import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ORDERED_TABLE_TITLE } from './components/ORDERED_TABLE_TITLE';
import OrderedInfo from './components/OrderedInfo';
import './Ordered.scss';

function Ordered() {
  const [orderedInfo, setOrderedInfo] = useState([]);

  useEffect(() => {
    fetch('data/orderedProductInfo.json')
      .then(res => res.json())
      .then(data => setOrderedInfo(data));
  });

  return (
    <div className="ordered">
      <div className="orderedTop">
        <div className="orderedLogo">
          <img src="images/ordered/logo(252525).png" />
        </div>
        <h2>
          고객님의 주문이 완료되었습니다.
          <br />
          감사합니다.
        </h2>
      </div>
      <div className="orderedBottom">
        <table>
          <thead>
            <tr>
              {ORDERED_TABLE_TITLE.map(item => {
                return <th key={item.id}>{item.title}</th>;
              })}
            </tr>
          </thead>
          <tfoot>
            {orderedInfo.map(info => {
              return <OrderedInfo key={info.id} info={info} />;
            })}
          </tfoot>
        </table>
        <div className="orderedHomeBtn">
          <Link to="/">
            <button>홈</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ordered;
