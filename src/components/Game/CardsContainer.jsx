import { useState } from "react";
import { ImageCard } from "./ImageCard";
import "../../styles/CardsContainer.css";

export function CardsContainer({ imgUrls }) {
  const [order, setOrder] = useState(() => {
    const arr = [];
    for (let i = 0; i < imgUrls.length; i++){
      arr.push(i);
    }
    console.log(arr);
    return arr;
  });

  function shuffle(givenArray) {
    const array = [...givenArray];
    let arrLength = array.length,
      temp,
      randomIndex;
    while (arrLength) {
      randomIndex = Math.floor(Math.random() * arrLength--);
      temp = array[arrLength];
      array[arrLength] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  }

  console.log(order);
  return (
    <div className="cards-container">
      {imgUrls.map((source, index) => (
        <ImageCard
          key={index}
          imgUrl={source}
          imgOrder={order[index]}
          onChange={() => setOrder((prev) => [...shuffle(prev)])}
        ></ImageCard>
      ))}
    </div>
  );
}
