import React from 'react';
import { Link } from 'react-router-dom';
import './MaterialsCate.scss';

export default function MaterialsCate() {
  return (
    <div className="materialsCate">
      <div className="logoPart">
        <Link to="/">
          <img src="images/common/img_logo_b.png" alt="logo" />
        </Link>
      </div>
      <div className="categoryLeft">
        {BIG_CATE_MATERIALS.map(({ id, title, categoryItems }) => {
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
        {CATE_MATERIALS.map(({ id, title, categoryItems }) => {
          return (
            <ul key={id} className="categoryList">
              <li className="categoryTitle">{title}</li>
              {categoryItems.map(categoryTitle => {
                return (
                  <li key={categoryTitle} className="categoryItems">
                    <Link to={categoryTitle.url} className="item">
                      {categoryTitle.title}
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
          <img
            src="images/nav/materials_list_img.jpg"
            alt="materials_menu_img"
          />
        </div>
      </div>
    </div>
  );
}

const BIG_CATE_MATERIALS = [
  {
    id: 1,
    title: '카테고리',
    categoryItems: [
      { title: '토분 모두보기', url: '/materials' },
      { title: '영양제 모두보기', url: '/materials?nutrients' },
      { title: '잎 영양제', url: '/materials?nutrients=1' },
      { title: '뿌리 영앙제', url: '/materials?nutrients=2' },
    ],
  },
];

const CATE_MATERIALS = [
  {
    id: 1,
    title: '토분 지름',
    categoryItems: [
      { title: '10 - 20cm', url: '/pots?size=1' },
      { title: '20 - 30cm', url: '/pots?size=2' },
      { title: '30 - 40cm', url: '/pots?size=3' },
    ],
  },
];
