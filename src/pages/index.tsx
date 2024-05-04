import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [turnColor, setTrunColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 2, 2, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);
    const mabeyTurnables: { x: number; y: number }[] = [];

    //下行き
    for (let i: number = 0; i < 8; i++) {
      if (board[y + i + 1] === undefined) {
        break;
      }
      const checkingColor = board[y + i + 1][x];
      if (checkingColor === 3 - turnColor) {
        mabeyTurnables.push({ x, y: y + i + 1 });
      } else if (checkingColor === 0) {
        break;
      } else if (checkingColor === turnColor) {
        if (mabeyTurnables.length > 0) {
          for (const item of mabeyTurnables) {
            console.log(item);
            console.log(mabeyTurnables);
            newBoard[item.y][item.x] = turnColor;
          }
          newBoard[y][x] = turnColor;
        }
        break;
      }
    }

    //右行き
    for (let i: number = 0; i < 8; i++) {
      const checkingColor = board[y][x + i + 1];
      if (checkingColor === undefined) {
        break;
      }
      if (checkingColor === 3 - turnColor) {
        mabeyTurnables.push({ x: x + i + 1, y });
      } else if (checkingColor === 0) {
        break;
      } else if (checkingColor === turnColor) {
        if (mabeyTurnables.length > 0) {
          for (const item of mabeyTurnables) {
            console.log(item);
            console.log(mabeyTurnables);
            newBoard[item.y][item.x] = turnColor;
          }
          newBoard[y][x] = turnColor;
        }
        break;
      }
    }

    //上行き
    for (let i: number = 0; i < 8; i++) {
      if (board[y - i - 1] === undefined) {
        break;
      }
      const checkingColor = board[y - i - 1][x];
      if (checkingColor === 3 - turnColor) {
        mabeyTurnables.push({ x, y: y - i - 1 });
      } else if (checkingColor === 0) {
        break;
      } else if (checkingColor === turnColor) {
        if (mabeyTurnables.length > 0) {
          for (const item of mabeyTurnables) {
            console.log(item);
            console.log(mabeyTurnables);
            newBoard[item.y][item.x] = turnColor;
          }
          newBoard[y][x] = turnColor;
        }
        break;
      }
    }

    //左行き
    for (let i: number = 0; i < 8; i++) {
      const checkingColor = board[y][x - i - 1];
      if (checkingColor === undefined) {
        break;
      }
      if (checkingColor === 3 - turnColor) {
        mabeyTurnables.push({ x: x - i - 1, y });
      } else if (checkingColor === 0) {
        break;
      } else if (checkingColor === turnColor) {
        if (mabeyTurnables.length > 0) {
          for (const item of mabeyTurnables) {
            console.log(item);
            console.log(mabeyTurnables);
            newBoard[item.y][item.x] = turnColor;
          }
          newBoard[y][x] = turnColor;
        }
        break;
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
