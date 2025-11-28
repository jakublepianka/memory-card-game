import { useState, useEffect } from "react";
import { CardsContainer } from "./CardsContainer";
const url = "https://dog.ceo/api/breeds/image/random/4";

export function GameContainer() {
  const [imageObjs, setImageObjs] = useState([]);
  // const [highScore, setHighScore] = useState(0);

  // move into a separate module?
  useEffect(() => {
    let ignore = false;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!ignore)
          setImageObjs(() => {
            const imgList = [];
            data.message.forEach((url, index) => {
              imgList.push({
                isClicked: false,
                order: index,
                url: url,
              });
            });
            return imgList;
          });
      });
    return () => {
      ignore = true;
    };
  }, []);

  function handleCardClick(e){
    const clickedImgUrl = e.currentTarget.getAttribute("data-url");
    const clickedImgIndex = imageObjs.findIndex(obj => obj.url === clickedImgUrl)
    if (!imageObjs[clickedImgIndex].isClicked) {
      toggleClickStatus(clickedImgIndex);
    } else {
      resetImageObjs();
    }
  }

  function shuffle(array) {
    let arrLength = array.length,
      temp,
      randomIndex;
    while (arrLength) {
      randomIndex = Math.floor(Math.random() * arrLength--);
      temp = array[arrLength].order;
      array[arrLength].order = array[randomIndex].order;
      array[randomIndex].order = temp;
    }
    return array;
  }

  function countUniqueClicks(){
    let counter = 0;
    imageObjs.forEach(obj => obj.isClicked && counter++)
    return counter;
  }

  function resetImageObjs() {
    setImageObjs(prev => {
      const newArr = [...prev];
      newArr.forEach(obj => {
        obj.isClicked = false;
      });

      return shuffle(newArr);
    });
  }

  // function isHighScore(){
  //   return countUniqueClicks() > highScore;
  // }

  function toggleClickStatus(index){
    setImageObjs(prev => {
        const newArr = shuffle([...prev]);
        newArr[index] = {
          ...newArr[index],
          isClicked: true
        };
        return newArr;
      })
  }
  // count unique card clicks
  // reset the count when a card has been clicked more than once
  // things to do onClick
    // 1. check if clicked obj has been clicked already and change value of isClicked
      // - if it hasn't, then increase count and shuffle
      // - if it has, then reset count, reset isClicked values & shuffle
  return (
    <div className="game-container">
      <h1>Score</h1>
      <p>Current score: <b>{countUniqueClicks()}</b></p>
      {/* <p>Best score: <b>{highScore}</b></p> */}
      {imageObjs.length && (
        <CardsContainer
          imageObjs={imageObjs}
          onCardClick={handleCardClick}
        ></CardsContainer>
      )}
    </div>
  );
}
