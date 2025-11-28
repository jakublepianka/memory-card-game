import { CardsContainer } from "./CardsContainer";
import { useImageFetcher } from "../hooks/useImageFetcher";
import { useGameLogic } from "../hooks/useGameLogic";
const url = "https://dog.ceo/api/breeds/image/random/4";

export function GameContainer() {
  const imageList = useImageFetcher(url);
  const { imageObjs, currentScore, highScore, handleCardClick } =
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
      {imageObjs.length > 0 && (
        <CardsContainer
          imageObjs={imageObjs}
          onCardClick={handleCardClick}
        ></CardsContainer>
      )}
    </div>
  );
}
