import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NewProducts.scss';

export default function NewProducts() {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.52.135:3000/plants/main?sort=new&offset=0&limit=6`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(result => {
        setNewProducts(result.plantsList);
      });
  }, []);

  const [slideName, setSlideName] = useState('');

  return (
    <div className="newProducts">
      <div className="newProductsTitle">New Plants for You</div>
      <div className="newProductsWrapper">
        <div className="newProductsWindow">
          <div className={'newProductsSlide' + slideName}>
            {newProducts.map(newProductsInfo => {
              const { plant_id, plant_name, plant_price, plant_img } =
                newProductsInfo;
              return (
                <div key={plant_id} className="newProductBox">
                  <div className="newProductImg">
                    <Link to="">
                      <img src={plant_img} alt="" />
                    </Link>
                  </div>
                  <div className="newProductDetail">
                    <p className="newProductName">{plant_name}</p>
                    <p className="newProductPrice">{plant_price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="slideBtn">
          <button className="backBtn">
            <img
              src="images/main/next_ivory.png"
              alt="back"
              className="back"
              onClick={() => setSlideName('')}
            />
          </button>
          <button className="nextBtn">
            <img
              src="images/main/next_ivory.png"
              alt="next"
              className="next"
              onClick={() => setSlideName('Right')}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
