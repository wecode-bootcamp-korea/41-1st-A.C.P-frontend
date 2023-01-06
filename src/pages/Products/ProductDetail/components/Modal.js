import React from 'react';
import './Modal.scss';

function Modal({ text, onClose, component1, component2 }) {
  const handleCloseX = e => {
    onClose();
  };

  return (
    <div className="modal">
      <div className="modalBox">
        {component1}
        <p className="modalSubTxt">{text}</p>
        {component2}
        <div className="closeX" onClick={handleCloseX}>
          <img src="images/productDetail/close_btn.png" />
        </div>
      </div>
    </div>
  );
}

export default Modal;
