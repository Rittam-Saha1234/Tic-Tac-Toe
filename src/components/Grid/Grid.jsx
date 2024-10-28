import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css';
import isWinner from "../helpers/checkWinner";

function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true); // true => O, false => X
  const [winner, setWinner] = useState(null);
  const [isTie, setIsTie] = useState(false); // state for checking tie

  function play(index) {
    if (board[index] !== "" || winner || isTie) return; // Prevents further moves after game ends

    board[index] = turn ? "O" : "X";
    const win = isWinner(board, turn ? "O" : "X");

    if (win) {
      setWinner(win); // Set winner if there's a win
    } 
    else if (board.every(cell => cell !== "")) {
      setIsTie(true); // Check if the board is full and set tie
    }

    setBoard([...board]);
    setTurn(!turn);
  }

  function reset() {
    setTurn(true);
    setWinner(null);
    setIsTie(false); // Reset the tie state
    setBoard(Array(numberOfCards).fill(""));
  }

  return (
    <div id="grid-screen" className="grid-wrapper">
      {winner && (
        <>
          <h1 className="winner-highlight">Winner is {winner}</h1>
          <button className="reset" onClick={reset}>Reset Game</button>
        </>
      )}
      
      {isTie && (
        <>
          <h1 className="turn-highlight-tie">No one has won the game. Please reset!</h1>
          <button className="reset" onClick={reset}>Reset Game</button>
        </>
      )}

      {!winner && !isTie && (
        <h1 className="turn-highlight">Current Turn: {turn ? 'O' : 'X'}</h1>
      )}

      <div className="grid">
        {board.map((element, index) => (
          <Card gameEnd={winner || isTie} key={index} onPlay={play} player={element} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Grid;
