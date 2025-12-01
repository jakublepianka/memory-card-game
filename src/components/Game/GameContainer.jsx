import { CardsContainer } from "./CardsContainer";
import { GameNav } from "./GameNav";
import { useImageFetcher } from "../hooks/useImageFetcher";
import { useGameLogic } from "../hooks/useGameLogic";

export function GameContainer({ url }) {
  const imageList = useImageFetcher(url);
  const {
    imageObjs,
    currentScore,
    highScore,
    handleCardClick,
    resetImageObjs,
    resetHighScore,
  } = useGameLogic(imageList);

  return (
    <div className="game-container">
      <GameNav
        currentScore={currentScore}
        highScore={highScore}
        onShuffle={resetImageObjs}
        onResetScore={resetHighScore}
      ></GameNav>
      {imageObjs.length > 0 ? (
        <CardsContainer
          imageObjs={imageObjs}
          onCardClick={handleCardClick}
        ></CardsContainer>
      ) : (
        <div className="spinner"></div>
      )}
    </div>
  );
}
