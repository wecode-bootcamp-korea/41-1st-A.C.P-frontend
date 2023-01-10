import React from 'react';

function DifficultyDot({ level }) {
  const newArr = new Array(5).fill(1).fill(0, level, 5);

  return (
    <div>
      {newArr.map(list => {
        return (
          <span
            key={list.id}
            className={`difficultyDot ${
              list === 1 ? 'difficultyDotFill' : 'difficultyDotEmpty'
            }`}
          />
        );
      })}
    </div>
  );
}

export default DifficultyDot;
