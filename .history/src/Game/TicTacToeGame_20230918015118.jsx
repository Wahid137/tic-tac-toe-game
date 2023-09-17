import { useState } from "react";
import "../App.css";
import Square from "./square";

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (index) => {
    console.log(board[index]);
    if (board[index] || gameOver) {
      return;
    }
    let newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);
    //setPlayer(player === "X" ? "O" : "X");

    let winner = calculateWinner(newBoard);
  };

  const calculateWinner = (square) => {};

  const resetGameHandler = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setGameOver(false);
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
      <div className="btn-div">
        <button className="reset-button" onClick={resetGameHandler}>
          Reset Game
        </button>
      </div>
    </>
  );
};

export default TicTacToeGame;
