import React from 'react';

function ProductInfoPot({ size, color }) {
  return (
    <ul>
      <li className="productInfo">
        <span>크기</span>
        <p>20 - 50cm</p>
      </li>
      <li className="productInfo">
        <span>색상</span>
        <p>브라운</p>
      </li>
    </ul>
  );
}

export default ProductInfoPot;
