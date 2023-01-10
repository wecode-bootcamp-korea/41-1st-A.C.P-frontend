import React from 'react';
import './CheckBox.scss';

export default function CheckBox({ id, label }) {
  return (
    <div className="boxInputCheckBox">
      <input type="checkbox" className="inpCheckBox" id={id} />
      <label className="label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
