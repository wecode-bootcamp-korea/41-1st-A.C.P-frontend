import React from 'react';
import './CheckBox.scss';

export default function CheckBox({ id, label }) {
  return (
    <div className="checkBox">
      <input type="checkbox" className="inpChk" id={id} />
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
}
