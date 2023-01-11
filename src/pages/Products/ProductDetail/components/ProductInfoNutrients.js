import React from 'react';

function ProductInfoNutrients({ species }) {
  return (
    <ul>
      <li className="productInfo">
        <span>종류</span>
        <p>잎 영양제</p>
      </li>
      <li className="productInfo">
        <span>용량</span>
        <p>100ml</p>
      </li>
    </ul>
  ); // 영양제는 프론트에서 고정값으로!
}

export default ProductInfoNutrients;
