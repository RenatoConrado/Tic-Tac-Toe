import "./board.css";
import Square, { type SquareValue } from "./Square";
import calculateWinner from "../functions/calculateWinner";

interface Props {
  isRoundX: boolean;
  squares: SquareValue[];
  onPlay: (nextSquares: SquareValue[]) => void;
}

function Board({ isRoundX, squares, onPlay }: Props) {

  function handleClick(i: number): void | "Invalid Click" {
    if (squares[i] || calculateWinner(squares)) {
      return "Invalid Click";
    }
    const nextSquares = squares.slice();
    nextSquares[i] = isRoundX ? "X" : "O";

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isRoundX ? "X" : "O"}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        <div className="board-row">
          <Square onClick={() => { handleClick(0); }} value={squares[0]} />
          <Square onClick={() => { handleClick(1); }} value={squares[1]} />
          <Square onClick={() => { handleClick(2); }} value={squares[2]} />
        </div>
        <div className="board-row">
          <Square onClick={() => { handleClick(3); }} value={squares[3]} />
          <Square onClick={() => { handleClick(4); }} value={squares[4]} />
          <Square onClick={() => { handleClick(5); }} value={squares[5]} />
        </div>
        <div className="board-row">
          <Square onClick={() => { handleClick(6); }} value={squares[6]} />
          <Square onClick={() => { handleClick(7); }} value={squares[7]} />
          <Square onClick={() => { handleClick(8); }} value={squares[8]} />
        </div>
      </div>
    </div>

  );
}

export default Board;
