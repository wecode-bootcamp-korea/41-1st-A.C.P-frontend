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
        {CATE_MATERIALS.map(({ id, title, categoryItems }) => {
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
    categoryItems: ['원예자재 모두 보기', '토분', '잎 영양제', '뿌리 영앙제'],
  },
];

const CATE_MATERIALS = [
  {
    id: 1,
    title: '토분 지름',
    categoryItems: ['10 - 20cm', '20 - 30cm', '30 - 40cm'],
  },
];
