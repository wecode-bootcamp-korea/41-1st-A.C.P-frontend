import React from 'react';

function ProductInfo({ productInfoDetail }) {
  return (
    <li className="productInfo">
      <span>{productInfoDetail.title}</span>
      <p>{productInfoDetail.value}</p>
    </li>
  );
}

export default ProductInfo;
