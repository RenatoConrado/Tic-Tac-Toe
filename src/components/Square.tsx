export type SquareValue = "X" | "O" | null;

export interface SquareProps {
  value: SquareValue;
  onClick: () => void;
};

function Square({ value, onClick }: SquareProps): React.JSX.Element {
  return (
    <button className="square" type="button" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;