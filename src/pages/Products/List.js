/*eslint-disable*/
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DataList from './DataList';
import ProductInfo from './ProductInfo';

function List() {
  return (
    <>
      {DataList.map(function (item, index) {
        return <ProductInfo item={item} />;
      })}
    </>
  );
}

export default List;
