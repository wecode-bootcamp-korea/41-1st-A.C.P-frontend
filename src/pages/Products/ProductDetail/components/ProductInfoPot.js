import React from 'react';

function ProductInfoPot({ size, color }) {
  return (
    <ul>
      <li className="productInfo">
        <span>크기</span>
        <p>{size}</p>
      </li>
      <li className="productInfo">
        <span>색상</span>
        <p>{color}</p>
      </li>
    </ul>
  );
}

export default ProductInfoPot;
