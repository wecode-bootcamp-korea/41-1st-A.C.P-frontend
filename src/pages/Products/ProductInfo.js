import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductInfo({ item }) {
  const [isHover, setIsHover] = useState(false);

  const { plant_id, plant_images, plant_name, plant_price } = item;

  const imgUrl2 = '/images/productDetail/img03.jpg';

  console.log(plant_id);

  return (
    <div className="productInfo">
      <div className="productsImg">
        <Link to={'/products/' + plant_id}>
          <img
            alt="식물"
            src={
              isHover
                ? imgUrl2
                : `/images/productDetail/img0${plant_id + 1}.jpg`
            }
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          />
        </Link>
      </div>

      <div className="productsInfo">
        <h2 className="productsTitle">{plant_name}</h2>
        <p className="productsPrice">
          {parseInt(plant_price).toLocaleString()}₩
        </p>
      </div>
    </div>
  );
}

export default ProductInfo;
