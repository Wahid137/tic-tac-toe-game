import { useState } from "react";
import "../App.css";
import Square from "./square";

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const handleClick = (index) => {
    console.log(index);
  };

  return (
    <>
      <h2>Tic Tac Game In React Js</h2>
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
