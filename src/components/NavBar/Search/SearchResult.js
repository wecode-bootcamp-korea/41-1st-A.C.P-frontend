import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchResult.scss';

export default function SearchResult({ plantResult, searchValue }) {
  const navigate = useNavigate();
  const [hide, setHide] = useState('');

  const moveToResult = id => {
    navigate(`/products/${id}`);
  };

  const isNull = () => {
    searchValue === '' ? setHide('Hide') : setHide('');
  };

  useEffect(() => {
    isNull();
  }, [searchValue]);

  return (
    <div className="searchResult">
      {plantResult.map(({ id, name, plant_img }) => {
        return (
          <div
            key={id}
            className={'searched' + hide}
            onClick={() => moveToResult(id)}
          >
            <div className="resultImgBox">
              <img className="resultImg" src={plant_img} alt="products" />
            </div>
            <p className="resultProductName">{name}</p>
            {/* <p className="resultProductPrice">{plant_price}</p> */}
          </div>
        );
      })}
    </div>
  );
}
