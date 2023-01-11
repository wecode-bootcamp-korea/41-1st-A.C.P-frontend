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
                    <Link to={bigCategoryTitle.url} className="bigItem">
                      {bigCategoryTitle.title}
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
                    <Link to={item.url} className="item">
                      {item.title}
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
      { title: '식물 모두 보기', url: '/products' },
      { title: '천남성과', url: '/products?species=1' },
      { title: '덩굴식물', url: '/products?species=2' },
      { title: '양치식물', url: '/products?species=3' },
      { title: '소철과 허브', url: '/products?species=4' },
      { title: '선인장', url: '/products?species=5' },
      { title: '목본류', url: '/products?species=6' },
    ],
  },
];

const CATE_MENU = [
  {
    id: 1,
    title: '위치',
    categoryItems: [
      { title: 'Houseplant', url: '/products?position=1' },
      { title: 'Hanging', url: '/procucts?position=2' },
      { title: 'Desk', url: 'products?position=3' },
      { title: 'Window', url: 'products?position=4' },
      { title: 'Outdoor', url: 'products?position=5' },
    ],
  },
  {
    id: 2,
    title: '분위기',
    categoryItems: [
      { title: 'Warm', url: '/products?mood=1' },
      { title: 'Adorable', url: '/products?mood=2' },
      { title: 'Cozy', url: '/products?mood=3' },
      { title: 'Modern', url: '/products?mood=4' },
    ],
  },
  {
    id: 3,
    title: '크기',
    categoryItems: [
      { title: 'miniature', url: '/products?size=1' },
      { title: '20 - 50cm', url: '/products?size=2' },
      { title: '50 - 100cm', url: '/products?size=3' },
      { title: '100 - 150cm', url: '/products?size=4' },
    ],
  },
  {
    id: 4,
    title: '난이도',
    categoryItems: [
      { title: 'Easy', url: '/products?difficulty=1' },
      { title: 'Normal', url: '/products?difficulty=2' },
      { title: 'Hard', url: '/products?difficulty=3' },
    ],
  },
];
