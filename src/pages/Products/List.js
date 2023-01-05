/*eslint-disable*/
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import dataList from './DataList';
import ProductImg from './ProductImg/ProductImg';

function List() {
  const [data] = useState(dataList);

  return (
    <>
      {data.map(function (item, index) {
        return <ProductImg item={item} />;
      })}
    </>
  );
}

export default List;
