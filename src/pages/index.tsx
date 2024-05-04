import { useState } from 'react';
import styles from './index.module.css';

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

const Home = () => {
  const [turnColor, setTrunColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);

    for (let n: number = 0; n < 8; n++) {
      const maybeTurnables: { x: number; y: number }[] = [];
      const [dx, dy] = directions[n];

      //下行きだった
      for (let i: number = 1; i < 8; i++) {
        if (board[y + i * dy] === undefined) {
          break;
        }
        const checkingColor = board[y + i * dy][x + i * dx];
        if (checkingColor === undefined) {
          break;
        }
        if (checkingColor === 3 - turnColor) {
          maybeTurnables.push({ x: x + i * dx, y: y + i * dy });
        } else if (checkingColor === 0) {
          break;
        } else if (checkingColor === turnColor) {
          if (maybeTurnables.length > 0) {
            for (const item of maybeTurnables) {
              console.log(item);
              console.log(maybeTurnables);
              newBoard[item.y][item.x] = turnColor;
            }
            newBoard[y][x] = turnColor;
          }
          break;
        }
      }
    }

    setBoard(newBoard);
    setTrunColor(3 - turnColor);
  };

  console.table(board);
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
