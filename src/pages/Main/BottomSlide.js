import React from 'react';
import './BottomSlide.scss';

export default function BottomSlide() {
  const nextSlide = () => {
    document.querySelector('.slideBox').style.transform = 'translate(-100vw)';
  };

  const backSlide = () => {
    document.querySelector('.slideBox').style.transform = 'translate(0vw)';
  };

  return (
    <div className="bottomSlide">
      <div className="slideBox">
        <div className="subscriptionBox">
          <img src="images/main/pot.jpg" alt="pot subscription" />
        </div>
        <div className="nutrientsBox">
          <img src="images/main/leaf.jpg" alt="nutrients subscription" />
        </div>
      </div>
      <div className="slideBtn">
        <button className="backBtn" onClick={backSlide}>
          BACK
        </button>
        <button className="nextBtn" onClick={nextSlide}>
          NEXT
        </button>
      </div>
    </div>
  );
}
