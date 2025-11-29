import { CardsContainer } from "./CardsContainer";
import { useImageFetcher } from "../hooks/useImageFetcher";
import { useGameLogic } from "../hooks/useGameLogic";

export function GameContainer({url}) {
  const imageList = useImageFetcher(url);
  const { imageObjs, currentScore, highScore, handleCardClick, resetImageObjs, resetHighScore } =
    useGameLogic(imageList);

  return (
    <div className="game-container">
      <h1>Score</h1>
      <p>
        Current score: <b>{currentScore}</b>
      </p>
      <p>
        High score: <b>{highScore}</b>
      </p>
      <button onClick={resetImageObjs}>Shuffle cards</button>
      <button onClick={resetHighScore}>Reset High score</button>
      {imageObjs.length > 0 && (
        <CardsContainer
          imageObjs={imageObjs}
          onCardClick={handleCardClick}
        ></CardsContainer>
      )}
    </div>
  );
}
