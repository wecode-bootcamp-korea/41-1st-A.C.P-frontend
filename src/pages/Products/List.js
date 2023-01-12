/*eslint-disable*/
import { useState } from 'react';
import ProductInfo from './ProductInfo';

function List({ productList }) {
  return (
    <>
      {productList.length > 0 ? (
        productList.map(function (item, index) {
          return <ProductInfo key={item.id} item={item} />;
        })
      ) : (
        <p>결과가 존재하지 않습니다</p>
      )}
    </>
  );
}

export default List;
