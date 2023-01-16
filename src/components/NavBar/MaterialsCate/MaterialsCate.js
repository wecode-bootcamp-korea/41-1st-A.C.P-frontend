import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MaterialsCate.scss';

export default function MaterialsCate({ menuTabClose }) {
  const navigate = useNavigate();

  const setMaterialSort = id => {
    if (id === 1) {
      navigate('/pots');
    } else if (id === 2) {
      navigate('/nutrients');
    } else {
      navigate(`/nutrients?type=${id - 2}`);
    }
  };

  const setPotSort = id => {
    navigate(`/pots?type=${id}`);
  };

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
              {categoryItems.map(({ id, title }) => {
                return (
                  <li key={id} className="bigCategoryItems">
                    <p
                      className="bigItem"
                      onClick={() => {
                        menuTabClose();
                        setMaterialSort(id);
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
        {CATE_MATERIALS.map(({ id, title, categoryItems }) => {
          return (
            <ul key={id} className="categoryList">
              <li className="categoryTitle">{title}</li>
              {categoryItems.map(({ id, title }) => {
                return (
                  <li key={id} className="categoryItems">
                    <p
                      className="item"
                      onClick={() => {
                        menuTabClose();
                        setPotSort(id);
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
      { id: 1, title: '토분 모두보기' },
      { id: 2, title: '영양제 모두보기' },
      { id: 3, title: '잎 영양제' },
      { id: 4, title: '뿌리 영앙제' },
    ],
  },
];

const CATE_MATERIALS = [
  {
    id: 1,
    title: '토분 지름',
    categoryItems: [
      { id: 1, title: '10 - 20cm' },
      { id: 2, title: '20 - 30cm' },
      { id: 3, title: '30 - 40cm' },
    ],
  },
];
