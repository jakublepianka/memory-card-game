import { useState, useEffect } from "react";
import { countUniqueClicks, shuffle } from "../Game/utils";

export function useGameLogic(imageList) {
  const [imageObjs, setImageObjs] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const currentScore = countUniqueClicks(imageObjs);

  useEffect(() => {
    setImageObjs(imageList);
  }, [imageList]);

  function handleCardClick(e) {
    const clickedImgUrl = e.currentTarget.getAttribute("data-url");
    const clickedImgIndex = imageObjs.findIndex(
      (obj) => obj.url === clickedImgUrl
    );
    if (!imageObjs[clickedImgIndex].isClicked) {
      toggleClickStatus(clickedImgIndex);
      if (isHighScore(currentScore)) setHighScore((prev) => prev + 1);
    } else {
      resetImageObjs();
    }
  }

  function resetImageObjs() {
    setImageObjs((prev) => {
      const newArr = [...prev];
      newArr.forEach((obj) => {
        obj.isClicked = false;
      });

      return shuffle(newArr);
    });
  }
  function toggleClickStatus(index) {
    setImageObjs((prev) => {
      const newArr = shuffle([...prev]);
      newArr[index] = {
        ...newArr[index],
        isClicked: true,
      };
      return newArr;
    });
  }

  function isHighScore(currentScore) {
    return currentScore >= highScore;
  }

  function resetHighScore() {
    setHighScore(currentScore);
  }

  return {
    imageObjs,
    currentScore,
    highScore,
    handleCardClick,
    resetImageObjs,
    resetHighScore,
  };
}
