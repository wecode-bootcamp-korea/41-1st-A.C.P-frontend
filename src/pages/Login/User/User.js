import React, { useState } from 'react';
import CheckBox from './CheckBox/CheckBox';
import TextInput from './TextInput/TextInput';
import './User.scss';

export default function User({ title, children }) {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    userName: '',
    phoneNumber: '',
  });
  const [passwordType, setPasswordType] = useState('password');

  return (
    <div className="user">
      <h1 className="userTitle">{title}</h1>
      <form className="form" onSubmit={e => e.preventDefault()}>
        {title === '회원가입' && (
          <TextInput
            type="text"
            name="userName"
            placeholder="이름"
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        )}
        <TextInput
          type="text"
          name="email"
          placeholder="이메일 입력"
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
        <TextInput
          type={passwordType}
          name="password"
          placeholder="비밀번호"
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          passwordType={passwordType}
          setPasswordType={setPasswordType}
        />
        {title === '회원가입' && (
          <TextInput
            type="text"
            name="phoneNumber"
            placeholder="휴대폰 번호"
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        )}

        {title === '회원가입' && (
          <div className="wrapInpChk">
            <CheckBox id="chkBox01" label="본인은 만 14세 이상입니다 (필수)" />
            <CheckBox id="chkBox02" label="이용 약관에 동의합니다 (필수)" />
            <CheckBox id="chkBox03" label="본인은 만 14세 이상입니다 (필수)" />
          </div>
        )}

        <button className="btnSubmit" type="submit">
          {title}
        </button>
      </form>
      {children}
    </div>
  );
}
