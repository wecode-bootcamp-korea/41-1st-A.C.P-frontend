import React from 'react';
import { Link } from 'react-router-dom';
import './Ordered.scss';

function ordered() {
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
              <th>주문번호</th>
              <th>상품명</th>
              <th>수량</th>
              <th>배송지</th>
              <th>수령희망일</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td>00001</td>
              <td>여인초</td>
              <td>1</td>
              <td>서울특별시 선릉로 위워크타워 1층</td>
              <td>2023년 1월 12일</td>
            </tr>
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

export default ordered;
