import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductInfo({ item }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="productInfo">
      <Link to={'/products/' + item.id}>
        <div className="productsImg">
          <img
            alt="식물"
            src={isHover ? item.hoverImg : item.img}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          />
        </div>
      </Link>
      <div className="productsInfo">
        <h2 className="productsTitle">{item.title}</h2>
        <p className="productsPrice">{item.price}</p>
      </div>
    </div>
  );
}

export default ProductInfo;
