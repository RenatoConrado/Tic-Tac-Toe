import { useState } from "react";
import Board from "./Board";
import type { SquareValue } from "./Square";
import "./game.css";

function Game(): React.JSX.Element {
  const [movesHistory, setMovesHistory] = useState<SquareValue[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const isRoundX = currentMove % 2 == 0;
  const currentSquares = movesHistory[currentMove];

  function handlePlay(nextSquares: SquareValue[]) {
    const firstSquares = [...movesHistory.slice(0, currentMove + 1)];
    const nextMovesHistory = [...firstSquares, nextSquares];

    setMovesHistory(nextMovesHistory);
    setCurrentMove(nextMovesHistory.length - 1);
  }

  function jumpTo(moveToJump: number) {
    setCurrentMove(moveToJump);
  }

  const renderMoves = movesHistory.map((_squares, move) => {
    const description = move > 0
      ? `${move}º move`
      : `Game start`;

    return (
      <li key={move} className="history-item">
        <button onClick={() => { jumpTo(move); }} type="button">
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board isRoundX={isRoundX} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol className="history-list">{renderMoves}</ol>
      </div>
    </div>
  );
}

export default Game;