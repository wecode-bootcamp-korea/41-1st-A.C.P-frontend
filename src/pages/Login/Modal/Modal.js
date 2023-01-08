import React from 'react';
import { GrClose } from 'react-icons/gr';
import './Modal.scss';

export default function Modal({ setIsModalOpen }) {
  const handleModalBg = e => {
    e.target.className === 'modal' && setIsModalOpen(false);
  };
  return (
    <div className="modal" onClick={handleModalBg}>
      <div className="innerModal">
        <h2 className="title">환영합니다, 상헌님</h2>
        <p className="text">
          매일 식물의 재고가 변경됩니다. <br />
          지금 무엇을 판매하는지 확인해보세요!
        </p>
        <button className="btnMore">상품 둘러보기</button>
        <button className="btnClose" onClick={() => setIsModalOpen(false)}>
          <GrClose />
        </button>
      </div>
    </div>
  );
}
