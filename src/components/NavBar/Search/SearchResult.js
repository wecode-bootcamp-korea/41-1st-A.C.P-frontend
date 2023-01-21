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
      {plantResult.map(({ plant_id, plant_name, plant_price, plant_image }) => {
        return (
          <div
            key={plant_id}
            className={'searched' + hide}
            onClick={() => moveToResult(plant_id)}
          >
            <div className="resultImgBox">
              <img className="resultImg" src={plant_image} alt="products" />
            </div>
            <p className="resultProductName">{plant_name}</p>
            <p className="resultProductPrice">{plant_price}</p>
          </div>
        );
      })}
    </div>
  );
}
