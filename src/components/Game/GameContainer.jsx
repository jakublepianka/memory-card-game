import { useState, useEffect } from "react";
import { CardsContainer } from "./CardsContainer";
const url = "https://dog.ceo/api/breeds/image/random/4";

export function GameContainer() {
  const [imageObjs, setImageObjs] = useState([]);

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

  // count unique card clicks
  // reset the count when a card has been clicked more than once
  return (
    <div className="game-container">
      {imageObjs.length && (
        <CardsContainer
          imageObjs={imageObjs}
          onCardClick={() =>
            setImageObjs((prev) => {
              return shuffle([...prev]);
            })
          }
        ></CardsContainer>
      )}
    </div>
  );
}
