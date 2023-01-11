import React, { useState } from 'react';

function InfoInput({ label }) {
  const [move, setMove] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const onFocusInput = () => {
    setMove(true);
  };

  const onBlurInput = () => {
    inputValue !== '' ? setMove(true) : setMove(false);
  };

  const saveInputValue = e => {
    setInputValue(e.target.value);
  };

  return (
    <div className={`orderTextInput${move ? ' move' : ''}`}>
      <input
        type="text"
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        onChange={saveInputValue}
      />
      <label>{label}</label>
    </div>
  );
}

export default InfoInput;
