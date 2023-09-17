import { Toaster } from "react-hot-toast";
import "./App.css";
import TicTacToeGame from "./Game/TicTacToeGame";

function App() {
  return (
    <>
      <h1>Tic Tac Toe Game</h1>
      <TicTacToeGame />
      <Toaster />
    </>
  );
}

export default App;
