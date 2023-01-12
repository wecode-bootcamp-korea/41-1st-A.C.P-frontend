import React from 'react';
import './Modal.scss';

function Modal({ onClose, component1, component2 }) {
  const handleCloseX = e => {
    onClose();
  };

  return (
    <div className="modal">
      <div className="modalBox">
        {component1}
        {component2}
        <div className="closeX" onClick={handleCloseX}>
          <img src="images/productDetail/close_btn.png" alt="닫기" />
        </div>
      </div>
    </div>
  );
}

export default Modal;
