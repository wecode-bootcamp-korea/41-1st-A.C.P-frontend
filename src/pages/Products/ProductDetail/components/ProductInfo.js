import React from 'react';

function ProductInfo({ productInfo }) {
  return (
    <ul>
      <li className="productInfo">
        <span>종류</span>
        <p>{productInfo.species}</p>
      </li>
      <li className="productInfo">
        <span>위치</span>
        <p>{productInfo.position}</p>
      </li>
      <li className="productInfo">
        <span>크기</span>
        <p>{productInfo.size}</p>
      </li>
      <li className="productInfo">
        <span>분위기</span>
        <p>{productInfo.mood}</p>
      </li>
    </ul>
  );
}

export default ProductInfo;
