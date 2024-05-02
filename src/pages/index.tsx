import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [turnColor, setTrunColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 2, 2, 2, 2, 2, 1, 0],
    [1, 2, 2, 2, 2, 2, 1, 0],
    [1, 2, 2, 0, 2, 2, 1, 0],
    [1, 2, 2, 2, 2, 2, 1, 0],
    [1, 2, 2, 2, 2, 2, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 0],
  ]);
  const directions = [
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
  ];
  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);
    for (const direction of directions) {
      for (let distance = 1; distance < 8; distance++) {
        if (newBoard[y + direction[0] * distance] === undefined) {
          break;
        } else {
          if (newBoard[y + direction[0] * distance][x + direction[1] * distance] === undefined) {
            break;
          } else if (newBoard[y + direction[0] * distance][x + direction[1] * distance] === 0) {
            break;
          } else if (
            newBoard[y + direction[0] * distance][x + direction[1] * distance] === turnColor
          ) {
            if (distance > 1) {
              for (let back = distance; back >= 0; back--) {
                newBoard[y + direction[0] * back][x + direction[1] * back] = turnColor;
              }
              setBoard(newBoard);
              setTrunColor(3 - turnColor);
            }
            break;
          } else if (
            newBoard[y + direction[0] * distance][x + direction[1] * distance] ===
            3 - turnColor
          ) {
            continue;
          }
        }
      }
    }

    setBoard(newBoard);
    setTrunColor(3 - turnColor);
  };
  return (
    <div className={styles.container}>
      <div className={styles.boardStyle}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cellStyle} key={`${x}-${y}`} onClick={() => clickHandler(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stoneStyle}
                  style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Home;
