import React, { useState } from "react";
import { calculateWinner } from "./Winner";
import Board from "./Board";

const Main = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    {
        return(
            <li key={0}>
            <button onClick={() => jumpTo(0)} style={{width:100,fontSize:20}}>Start Again</button>
            </li>
        )
    
    }

  return (
    <>
      <h1 style={{color:'black', fontSize:50}}>Tic Tac Toe</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info">
        <div>
          {renderMoves()}
        </div>
        <h3 style={{fontSize:50}}>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
      </div>
    </>
  );
};

export default Main;