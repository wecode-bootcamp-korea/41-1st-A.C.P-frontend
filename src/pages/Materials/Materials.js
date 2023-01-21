import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MaterialsData from '../Products/Data/MaterialsData';
import MaterialList from './MaterialList/MaterialList';
import Modal from './MaterialModal/MaterialModal';
import './Materials.scss';

function Materials() {
  const [materialList, setMaterialList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentMaterial, setCurrentMaterial] = useState('');
  const materialDataList = MaterialsData.materialData;

  const defaultLimit = 6;
  const maxLength = Math.floor(materialList.length / defaultLimit) || 1;
  let limit = Number(searchParams.get('_limit')) || defaultLimit;
  const currentCount = limit / defaultLimit;

  useEffect(() => {
    fetch('/data/materialData.json')
      .then(res => res.json())
      .then(data => setMaterialList(data.data));
  }, []);

  const handleMoreClick = () => {
    if (materialList.length > limit) {
      limit += 6;
      searchParams.set('_limit', limit);
      setSearchParams(searchParams);
      // fetchQueryData();
    }
  };
  const handleChkClick = e => {
    searchParams.set('material', e.target.title);
    setSearchParams(searchParams); //수정 필요
  };

  return (
    <>
      <div className="materials">
        <div className="filterOn">
          <ul className="materialsFilter">
            {materialDataList.map(categoryL => {
              return (
                <li key={categoryL.id} className="materialFilter">
                  <div
                    title={categoryL.id}
                    className="linkCategory"
                    onClick={handleChkClick}
                  >
                    {categoryL.name}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {currentMaterial === '토분' && <Modal MaterialsData={MaterialsData} />}
      <div>
        <MaterialList materialList={materialList} />
      </div>
      <div className="button">
        <button
          className="btn"
          onClick={handleMoreClick}
          disabled={currentCount === maxLength && 'disabled'}
        >
          more ({currentCount}/{maxLength})
        </button>
      </div>
    </>
  );
}

export default Materials;
