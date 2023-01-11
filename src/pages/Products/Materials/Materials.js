import React from 'react';
import { useState } from 'react';
import MaterialsData from '../Data/MaterialsData';
import './Materials.scss';

function Materials() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="materials">
        <ul className="materialsFilter">
          <li className="materialFilter">원예자재 모두보기</li>
          <li className="materialFilter">토분</li>
          <li className="materialFilter">잎 영양제</li>
          <li className="materialFilter">뿌리 영양제</li>
        </ul>
        <button
          className="filterButton"
          onClick={() => {
            setModal(!modal);
          }}
        >
          필터
        </button>
      </div>

      {modal ? <Modal /> : null}
    </>
  );
}
function Modal() {
  return (
    <div className="filterModal">
      <div filterCategoryL>ㅅㅂ</div>
      <div filterCategoryM>하아</div>
    </div>
  );
}
export default Materials;
