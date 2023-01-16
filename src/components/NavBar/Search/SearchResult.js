import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchResult.scss';

export default function SearchResult({ plantResult }) {
  const navigate = useNavigate();

  const moveToResult = id => {
    navigate(`/plants/${id}`);
  };

  return (
    <div className="searchResult">
      {plantResult.map(({ plant_id, plant_name, plant_price, plant_image }) => {
        return (
          <div
            key={plant_id}
            className="searched"
            onClick={moveToResult({ plant_id })}
          >
            <img src={plant_image} alt="products" />
            <p>{plant_name}</p>
            <p>{plant_price}</p>
          </div>
        );
      })}
    </div>
  );
}
