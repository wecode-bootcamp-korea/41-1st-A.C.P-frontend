import React, { useState } from 'react';

function InfoInput({ label }) {
  const [move, setMove] = useState(false);

  const cursorInput = () => {
    setMove(true);
  };
  return (
    <div className={`orderTextInput${move === true ? ' move' : ''}`}>
      <input type="text" onFocus={cursorInput} />
      <label>{label}</label>
    </div>
  );
}

export default InfoInput;
