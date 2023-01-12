import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductInfo({ item }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="productInfo">
      <div className="productsImg">
        <Link to={'/products/' + item.id}>
          <img
            alt="식물"
            src={isHover ? item.hoverImg : item.img}
            // src="/images/productsList/plant4.jpg"
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          />
        </Link>
      </div>

      <div className="productsInfo">
        <h2 className="productsTitle">{item.plant_name}</h2>
        <p className="productsPrice">{item.plant_price}</p>
      </div>
    </div>
  );
}

export default ProductInfo;
