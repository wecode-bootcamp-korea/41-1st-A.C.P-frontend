import React from 'react';
import Header from './Header/Header';
import NewProducts from './NewProducts/NewProducts';
import ServiceIntro from './ServiceIntro/ServiceIntro';
import BottomSlide from './BottomSlide/BottomSlide';
import './Main.scss';

export default function Main() {
  return (
    <div className="main">
      <Header />
      <div className="mainWrapper">
        <div className="mainImg">
          <img src="images/main/main2.jpg" alt="mainImage" />
        </div>
        <div className="blank" />
        <NewProducts />
        <div className="blank" />
        <ServiceIntro />
        <div className="blank" />
        <div className="slideWrapper">
          <BottomSlide />
        </div>
      </div>
    </div>
  );
}
