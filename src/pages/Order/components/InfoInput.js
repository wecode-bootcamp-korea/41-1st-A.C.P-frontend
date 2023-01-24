import React, { useState } from 'react';

function InfoInput({ label, name, infoInputValue, setInfoInputValue }) {
  const [move, setMove] = useState(false);

  const onFocusInput = () => {
    setMove(true);
  };

  const onBlurInput = e => {
    const { name } = e.target;
    infoInputValue[name] !== '' ? setMove(true) : setMove(false);
  };

  const saveInputValue = e => {
    const { name, value } = e.target;
    setInfoInputValue(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`orderTextInput${move ? ' move' : ''}`}>
      <input
        type="text"
        name={name}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        onChange={saveInputValue}
      />
      <label>{label}</label>
    </div>
  );
}

export default InfoInput;
