import { useState } from 'react';
import styles from './index.module.css';

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

    const mabeyTurnables: { x: number; y: number }[] = [];

    //上向き
    for (let i: number = 0; i < 3; i++) {
      if (board[y + i + 1] === undefined) {
        break;
      }
      const checkingColor = board[y + i + 1][x];
      if (checkingColor === 3 - turnColor) {
        mabeyTurnables.push({ x, y: y + i + 1 });
      } else if (checkingColor === turnColor) {
        if (mabeyTurnables.length > 0) {
          for (const item of mabeyTurnables) {
            console.log(item);
            console.log(mabeyTurnables);
            newBoard[item.y][item.x] = turnColor;
          }
          newBoard[y][x] = turnColor;
        }
      }
    }
    //左
    for (let i: number = 0; i < 3; i++) {
      const checkingColor = board[y][x + i + 1];
      if (checkingColor === undefined) {
        break;
      }
      if (checkingColor === 3 - turnColor) {
        mabeyTurnables.push({ x: x + i + 1, y });
      } else if (checkingColor === turnColor) {
        if (mabeyTurnables.length > 0) {
          for (const item of mabeyTurnables) {
            console.log(item);
            console.log(mabeyTurnables);
            newBoard[item.y][item.x] = turnColor;
          }
          newBoard[y][x] = turnColor;
        }
      }
    }
    //下
    for (let i: number = 0; i < 3; i++) {
      if (board[y - i - 1] === undefined) {
        break;
      }
      const checkingColor = board[y - i - 1][x];
      if (checkingColor === 3 - turnColor) {
        mabeyTurnables.push({ x, y: y - i - 1 });
      } else if (checkingColor === turnColor) {
        if (mabeyTurnables.length > 0) {
          for (const item of mabeyTurnables) {
            console.log(item);
            console.log(mabeyTurnables);
            newBoard[item.y][item.x] = turnColor;
          }
          newBoard[y][x] = turnColor;
        }
      }
    }
    //右
    for (let i: number = 0; i < 3; i++) {
      const checkingColor = board[y][x - i - 1];
      if (checkingColor === undefined) {
        break;
      }
      if (checkingColor === 3 - turnColor) {
        mabeyTurnables.push({ x: x - i - 1, y });
      } else if (checkingColor === turnColor) {
        if (mabeyTurnables.length > 0) {
          for (const item of mabeyTurnables) {
            console.log(item);
            console.log(mabeyTurnables);
            newBoard[item.y][item.x] = turnColor;
          }
          newBoard[y][x] = turnColor;
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
