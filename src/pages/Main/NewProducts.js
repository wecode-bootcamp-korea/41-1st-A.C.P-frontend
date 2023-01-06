import React from 'react';
import { Link } from 'react-router-dom';
import './NewProducts.scss';

export default function NewProducts({
  productName,
  productPrice,
  productImg,
  imgAlt,
  productPage,
}) {
  return (
    <div className="newProductBox">
      <div className="newProductImg">
        <Link to={productPage}>
          <img src={productImg} alt={imgAlt} />
        </Link>
      </div>
      <p className="newProductDetail">
        <p className="newProductName">{productName}</p>
        <p className="newProductPrice">{productPrice}</p>
      </p>
    </div>
  );
}
