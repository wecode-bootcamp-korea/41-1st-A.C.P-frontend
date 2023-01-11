import React from 'react';

function DifficultyDot({ level }) {
  const newArr = new Array(5).fill(1).fill(0, level, 5);
  // 1. map 을 돌려주기 위해 새 배열을 생성
  // 2. new Array(5) 메서드는 새 배열을 생성해주는 메서드, 5는 배열의 길이 [0, 1, 2, 3, 4] 가 되는 것
  // 3. length가 5인 배열을 fill(1)을 사용해 다 1로 채워준다.
  // 4. 요소가 1이면 채워진 동그라미 / 요소가 0이면 빈 동그라미
  // 5. fill(0, level, 5) 메서드 방식을 따라, 0으로 시작인덱스(level)부터 마지막인덱스(5)까지 채워라! 라는 말.
  // 6. 부모태그에서 숫자가 props 로 전달되는 level 이 시작인덱스 값을 채워준다.
  // 7. 그래서 밑에서 마침내 map 을 돌려주게 되면, 요소가 0인지 1인지를 검사하여 dot 클래스명이 바뀐다!
  // 8. 바뀜에 따라 채워진 동그라미가 띄워지거나, 안띄워지거나 !!!!!! ㅜ_ㅜ 이해했다..

  return (
    <div>
      {newArr.map((list, i) => {
        return (
          <span
            key={i}
            className={`difficultyDot ${
              list === 1 ? 'difficultyDotFill' : 'difficultyDotEmpty'
            }`}
          />
        );
      })}
    </div>
  );
  // key 값은 요소자리마다 자동으로 인덱스가 있기때문에, 바로 요소로 넣어줘도 되지만,
  // 지금 돌리고 있는 newArr 배열의 요소들은 0 아니면 1이기 때문에, 인덱스와 겹칠 수 있다.
  // 그래서 map 에 인덱스(i)를 매개변수 자리에 추가시켜, key 값을 지정해준다!
}

export default DifficultyDot;
