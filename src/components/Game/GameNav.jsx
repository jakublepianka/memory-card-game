import "../../styles/GameNav.css";
import resetIcon from "../../assets/refresh.png";
import shuffleIcon from "../../assets/shuffle.png";

export function GameNav({ currentScore, highScore, onShuffle, onResetScore }) {
  return (
    <div className="game-nav">
      <div className="score-container">
        <div className="current-score">
          <div className="label">CURRENT SCORE</div>
          <h1>{currentScore}</h1>
        </div>
        <div className="high-score">
          <div className="label">HIGH SCORE</div>
          <h1>{highScore}</h1>
        </div>
      </div>
      <div className="buttons-container">
        <button className="reset-button" onClick={onResetScore}>
          <img src={resetIcon}></img>
        </button>
        <button className="shuffle-button" onClick={onShuffle}>
          <img src={shuffleIcon}></img>
        </button>
      </div>
    </div>
  );
}
