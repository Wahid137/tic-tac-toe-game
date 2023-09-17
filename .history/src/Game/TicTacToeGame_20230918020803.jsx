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
    if (winner) {
      alert(`Player ${winner} has been won`);
      setGameOver(true);
    } else if (!newBoard.includes(null)) {
      setGameOver(true);
      alert(`The game is Draw!`);
    } else {
      setPlayer(player === "X" ? "O" : "X");
    }
  };

  const calculateWinner = (square) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  };

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
