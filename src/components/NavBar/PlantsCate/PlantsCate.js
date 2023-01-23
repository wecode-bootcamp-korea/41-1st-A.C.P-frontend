import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PlantsCate.scss';

export default function PlantsCate({ menuTabClose }) {
  const navigate = useNavigate();

  const setBigCateSort = (category, id) => {
    if (id === 0) {
      navigate('/products?offset=0&limit=6');
    } else {
      navigate(`/products?offset=0&limit=6&${category}=${id}`);
    }
  };

  const setSmallCateSort = (category, id) => {
    navigate(`/products?offset=0&limit=6&${category}=${id}`);
  };

  return (
    <div className="plantsCate">
      <div className="logoPart">
        <img
          src="/images/common/img_logo_b.png"
          alt="logo"
          onClick={() => {
            menuTabClose();
            navigate('/');
          }}
        />
      </div>
      <div className="categoryLeft">
        {BIG_CATE_MENU.map(({ id, title, categoryItems }) => {
          return (
            <ul key={id} className="categoryList">
              <li className="bigCategoryTitle">{title}</li>
              {categoryItems.map(({ id, title, category }) => {
                return (
                  <li key={id} className="bigCategoryItems">
                    <p
                      className="bigItem"
                      onClick={() => {
                        menuTabClose();
                        setBigCateSort(category, id);
                      }}
                    >
                      {title}
                    </p>
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
              {categoryItems.map(({ id, title, category }) => {
                return (
                  <li key={id} className="categoryItems">
                    <p
                      className="item"
                      onClick={() => {
                        menuTabClose();
                        setSmallCateSort(category, id);
                      }}
                    >
                      {title}
                    </p>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
      <div className="menuImage">
        <div className="plantMenuImage">
          <img src="/images/nav/plants_menu_img.jpg" alt="plant_menu_img" />
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
      { id: 0, title: '식물 모두 보기', category: 'species' },
      { id: 1, title: '천남성과', category: 'species' },
      { id: 2, title: '덩굴식물', category: 'species' },
      { id: 3, title: '양치식물', category: 'species' },
      { id: 4, title: '소철과 허브', category: 'species' },
      { id: 5, title: '선인장', category: 'species' },
      { id: 6, title: '목본류', category: 'species' },
    ],
  },
];

const CATE_MENU = [
  {
    id: 1,
    title: '위치',
    categoryItems: [
      { id: 1, title: 'Houseplant', category: 'positions' },
      { id: 2, title: 'Hanging', category: 'positions' },
      { id: 3, title: 'Desk', category: 'positions' },
      { id: 4, title: 'Window', category: 'positions' },
      { id: 5, title: 'Outdoor', category: 'positions' },
    ],
  },
  {
    id: 2,
    title: '분위기',
    categoryItems: [
      { id: 1, title: 'Warm', category: 'moods' },
      { id: 2, title: 'Adorable', category: 'moods' },
      { id: 3, title: 'Cozy', category: 'moods' },
      { id: 4, title: 'Modern', category: 'moods' },
    ],
  },
  {
    id: 3,
    title: '크기',
    categoryItems: [
      { id: 1, title: 'miniature', category: 'sizes' },
      { id: 2, title: '20 - 50cm', category: 'sizes' },
      { id: 3, title: '50 - 100cm', category: 'sizes' },
      { id: 4, title: '100 - 150cm', category: 'sizes' },
    ],
  },
  {
    id: 4,
    title: '난이도',
    categoryItems: [
      { id: 3, title: 'Easy', category: 'difficulties' },
      { id: 2, title: 'Normal', category: 'difficulties' },
      { id: 1, title: 'Hard', category: 'difficulties' },
    ],
  },
];
