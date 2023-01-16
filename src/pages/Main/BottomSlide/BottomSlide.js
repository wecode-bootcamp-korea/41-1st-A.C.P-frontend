import React, { useState } from 'react';
import './BottomSlide.scss';

export default function BottomSlide() {
  const [left, setLeft] = useState('');

  return (
    <div className="bottomSlide">
      <div className={'slideBox' + left}>
        <div className="subscriptionBox">
          <img src="/images/main/pot.jpg" alt="pot subscription" />
        </div>
        <div className="nutrientsBox">
          <img src="/images/main/leaf.jpg" alt="nutrients subscription" />
        </div>
      </div>
      <div className="slideBtn">
        <button className="backBtn" onClick={() => setLeft('')}>
          <img src="/images/main/next.png" alt="back" className="back" />
        </button>
        <button className="nextBtn" onClick={() => setLeft('Right')}>
          <img src="/images/main/next.png" alt="next" className="next" />
        </button>
      </div>
    </div>
  );
}
