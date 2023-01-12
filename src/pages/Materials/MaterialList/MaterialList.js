import React from 'react';
import { Link } from 'react-router-dom';

function MaterialList({ materialList }) {
  //부모 컴포넌트에서 받아온 데이터 (materialList에 어떤 데이터가 들어오는가?)
  //.map is not function -> map이 돌 수 없다. => data형태가 다르다. map 배열 메서드 -> 데이터가 어떤게 들어오는지 확인을 해야한다.
  //데이터를 받아올 땐 console에 출력해서 잘 들어오는지 확인!
  //map key값을 왜 줘야하는지
  //img태그 사용법

  return (
    <div className="materialsList">
      <div className="materialMain">
        {materialList.map(item => {
          return (
            <div key={item.name} className="materialInfo">
              <div className="materialImg">
                {/* <img>{item.img}</img> */}
                <Link to={`/materials/${item.id}`}>
                  <img src={item.img_url} alt={item.name} className="img" />
                </Link>
              </div>
              <div className="materialsInfo">
                <h2 className="materialTitle">{item.name}</h2>
                <p className="materialPrice">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MaterialList;
