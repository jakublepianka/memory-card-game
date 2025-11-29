export function GameNav({ currentScore, highScore, onShuffle, onResetScore }) {
  return (
    <div className="game-nav">
      <div className="score-container">
        <div className="current-score">
          <h2>{currentScore}</h2>
          <div className="label">CURRENT SCORE</div>
        </div>
        <div className="high-score">
          <h2>{highScore}</h2>
          <div className="label">HIGH SCORE</div>
        </div>
      </div>
      <button onClick={onShuffle}>Shuffle cards</button>
      <button onClick={onResetScore}>Reset High score</button>
    </div>
  );
}
