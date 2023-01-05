import React from 'react';
import './TextInput.scss';

export default function TextInput({
  type,
  name,
  userInfo,
  setUserInfo,
  placeholder,
}) {
  const getUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="boxInput">
      <input
        type={type}
        name={name}
        value={userInfo.name}
        onChange={getUserInfo}
        placeholder={placeholder}
        className="inpText"
      />
    </div>
  );
}
