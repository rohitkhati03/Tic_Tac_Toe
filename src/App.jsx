import { useState } from 'react'
import './App.css'

function calculateWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  const [isNext, setNext] = useState(["", "", "", "", "", "", "", "", ""]);
  const [xNext, setXNext] = useState(true);
  const winner = calculateWinner(isNext);

  const handleClick = (i) => {
    const squares = [...isNext];
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xNext ? "X" : "O";
    setNext(squares);
    setXNext(!xNext);o
    
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='outer-box'>
        {isNext.map((value, i) => (
          <div
            key={i}
            className='inner-box'
            onClick={() => handleClick(i)}
          >
            {value}
          </div>
        ))}
      </div>
      <h2>
        {winner
          ? `Winner: ${winner}`
          : `Next Player: ${xNext ? "X" : "O"}`}
      </h2>
      <button onClick={() => {
        setNext(["", "", "", "", "", "", "", "", ""]);
        setXNext(true);
      }}>Restart</button>
    </>
  );
}

export default App
