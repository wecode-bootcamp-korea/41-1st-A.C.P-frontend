import React from 'react';

function ProductInfo({ species, position, size, mood }) {
  return (
    <ul>
      <li className="productInfo">
        <span>종류</span>
        <p>{species}</p>
      </li>
      <li className="productInfo">
        <span>위치</span>
        <p>{position}</p>
      </li>
      <li className="productInfo">
        <span>크기</span>
        <p>{size}</p>
      </li>
      <li className="productInfo">
        <span>분위기</span>
        <p>{mood}</p>
      </li>
    </ul>
  );
}

export default ProductInfo;
