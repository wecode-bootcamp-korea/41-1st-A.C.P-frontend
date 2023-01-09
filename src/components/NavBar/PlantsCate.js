import React from 'react';
import { Link } from 'react-router-dom';
import './PlantsCate.scss';

export default function PlantsCate() {
  return (
    <div className="plantsCate">
      <div className="logoPart">
        <Link to="/">
          <img src="images/common/img_logo_b.png" alt="logo" />
        </Link>
      </div>
      <div className="categoryLeft">
        {BIG_CATE_MENU.map(({ id, title, categoryItems }) => {
          return (
            <ul key={id} className="categoryList">
              <li className="bigCategoryTitle">{title}</li>
              {categoryItems.map(bigCategoryTitle => {
                return (
                  <li key={bigCategoryTitle} className="bigCategoryItems">
                    <Link to="/products" className="bigItem">
                      {bigCategoryTitle}
                    </Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
      <div className="categoryRight">
        {CATE_MENU.map(({ id, title, categoryItems }) => {
          return (
            <ul key={id} className="categoryList">
              <li className="categoryTitle">{title}</li>
              {categoryItems.map(item => {
                return (
                  <li key={item} className="categoryItems">
                    <Link to="/products" className="item">
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>

      <div className="menuImage">
        <div className="plantMenuImage">
          <img src="images/nav/plants_menu_img.jpg" alt="plant_menu_img" />
        </div>
      </div>
    </div>
  );
}

const BIG_CATE_MENU = [
  {
    id: 1,
    title: '카테고리',
    categoryItems: [
      '식물 모두 보기',
      '천남성과',
      '덩굴식물',
      '양치식물',
      '소철과 허브',
      '선인장',
      '목본류',
    ],
  },
];

const CATE_MENU = [
  {
    id: 1,
    title: '위치',
    categoryItems: ['Houseplant', 'Hanging', 'Desk', 'Window', 'Outdoor'],
  },
  {
    id: 2,
    title: '분위기',
    categoryItems: ['Warm', 'Adorable', 'Cozy', 'Modern'],
  },
  {
    id: 3,
    title: '크기',
    categoryItems: ['miniature', '20 - 50cm', '50 - 100cm', '100 - 150cm'],
  },
  {
    id: 4,
    title: '난이도',
    categoryItems: ['Easy', 'Normal', 'Hard'],
  },
];
