import { useState } from "react";
import "../App.css";

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  return (
    <>
      <h2>Tic Tac Game In React Js</h2>
      <div className="board">{board.map()}</div>
    </>
  );
};

export default TicTacToeGame;
