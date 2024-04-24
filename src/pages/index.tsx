import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [turnColor, setTrunColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 2, 1],
    [0, 0, 0, 0, 0, 1, 2, 1],
    [0, 0, 0, 0, 2, 1, 2, 1],
    [0, 0, 0, 1, 2, 1, 2, 1],
    [0, 0, 2, 1, 2, 1, 2, 1],
    [0, 2, 1, 2, 1, 2, 1, 2],
  ]);

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);

    if (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor) {
      if (newBoard[y + 2] !== undefined && newBoard[y + 2][x] === turnColor) {
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTrunColor(3 - turnColor);
      } else if (newBoard[y + 2] !== undefined && newBoard[y + 2][x] === 3 - turnColor) {
        if (newBoard[y + 3] !== undefined && newBoard[y + 3][x] === turnColor) {
          newBoard[y][x] = turnColor;
          setBoard(newBoard);
          setTrunColor(3 - turnColor);
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
