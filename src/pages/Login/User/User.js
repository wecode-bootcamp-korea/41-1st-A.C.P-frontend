import React, { useState } from 'react';
import CheckBox from './CheckBox/CheckBox';
import TextInput from './TextInput/TextInput';
import { GET_USER_INFO_API, RESIST_USER_INFO_API } from '../../../config';
import { LOGIN_INPUT_LIST, SIGNUP_INPUT_LIST } from './uidata';
import { fetchData } from './config';
import './User.scss';

export default function User({ title, children, setIsModalOpen }) {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    userName: '',
    phoneNumber: '',
  });
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
  });
  const [passwordType, setPasswordType] = useState('password');

  const allVaild = isValid.email && isValid.password;

  const handleFormSubmit = e => {
    e.preventDefault();

    if (allVaild) {
      let userData =
        title === '로그인'
          ? {
              email: userInfo.email,
              password: userInfo.password,
            }
          : {
              email: userInfo.email,
              password: userInfo.password,
              name: userInfo.userName,
              phoneNumber: userInfo.phoneNumber,
            };

      const res = fetchData(
        title === '로그인' ? GET_USER_INFO_API : RESIST_USER_INFO_API,
        'POST',
        userData
      );
      const data = res.json();

      console.log('통신 성공! 데이터 확인 >>>', data);
    } else {
      alert(
        `Validation Error! 이메일 검사 : ${isValid.email} / 비밀번호 검사 ${isValid.password}`
      );
    }
  };

  const inputList = title === '로그인' ? LOGIN_INPUT_LIST : SIGNUP_INPUT_LIST;

  return (
    <div className="user">
      <h1 className="userTitle">{title}</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        {inputList.map(list => {
          const { id, type, name, label } = list;
          return (
            <TextInput
              key={id}
              type={name === 'password' ? passwordType : type}
              name={name}
              label={label}
              inputValue={userInfo.name}
              setUserInfo={setUserInfo}
              setPasswordType={name === 'password' ? setPasswordType : null}
              setIsValid={setIsValid}
            />
          );
        })}

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
