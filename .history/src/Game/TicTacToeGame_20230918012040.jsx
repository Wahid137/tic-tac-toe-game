import { useState } from "react";
import "../App.css";
import Square from "./square";

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [gemeOver, setGameOver] = useState(false);

  const handleClick = (index) => {
    console.log(board[index]);
    if (board[index] || gameOver) {
      return;
    }
  };

  return (
    <>
      <div className="board">
        {board.map((item, index) => {
          return (
            <Square
              clickBtn={handleClick}
              key={index}
              value={item}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default TicTacToeGame;
