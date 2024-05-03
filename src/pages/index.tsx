import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [turnColor, setTrunColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);

    const mabeyTurnables: { x: number; y: number }[] = [];
    for (let i: number = 0; i < 3; i++) {
      const checkingColor = board[y + i + 1][x];
      if (checkingColor === 3 - turnColor) {
        mabeyTurnables.push({ x, y: y + i + 1 });
      } else if (checkingColor === turnColor) {
        if (mabeyTurnables.length > 0) {
          for (const item of mabeyTurnables) {
            console.log(item);
            newBoard[y + item.x][x + item.y] = turnColor;
          }
          newBoard[y][x] = turnColor;
        }
      }
    }

    console.log(turnColor);
    if (board[y][x + 1] === 3 - turnColor && board[y][x + 2] === turnColor) {
      newBoard[y][x] = turnColor;
      newBoard[y][x + 1] = turnColor;
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
