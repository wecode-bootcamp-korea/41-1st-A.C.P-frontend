import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="listFooter">
        <li className="itemFooter">
          <img
            src="/images/common/img_logo_w.png"
            alt="Plait"
            width="86px"
            className="imgLogo"
          />
          <p className="copyright">All rights reserved.</p>
        </li>
        <li className="itemFooter">
          <strong className="listTitle">회사정보</strong>
          <p className="listDescription">
            {INFO_LIST.map(text => {
              return (
                <span key={text} className="descInfo">
                  {text}
                </span>
              );
            })}
          </p>
        </li>
        <li className="itemFooter">
          <strong className="listTitle">이용약관</strong>
          <div className="boxTerms">
            <Link to="#" className="link">
              회사소개
            </Link>
            <Link to="#" className="link">
              이용약관
            </Link>
            <Link to="#" className="link">
              개인정보처리방침
            </Link>
          </div>
        </li>
        <li className="itemFooter">
          <strong className="listTitle">고객문의</strong>
          <p className="listDescription">
            Monday to Friday 10:00am ~ 19:00pm
            <br />
            Saturday, Sunday - off
          </p>
        </li>
      </ul>
    </footer>
  );
}

const INFO_LIST = [
  '㈜ Plaît',
  'CEO: 강서윤',
  'E-mail: seoyunlefleuve@plait.com',
  'N: 892-75-03231',
  'Phone: 02 - 5024 -7859',
  'Address: 서울특별시 강남구 테헤란로 427, 11F',
  '통신판매업 신고 제 2023-서울-0001호',
];
