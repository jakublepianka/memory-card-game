import { useState, useEffect } from "react";
import { CardsContainer } from "./CardsContainer";
const url = "https://dog.ceo/api/breeds/image/random/4";

export function GameContainer() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let ignore = false;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!ignore) setImages(data.message);
      });
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="game-container">
      {images.length && <CardsContainer imgUrls={images}></CardsContainer>}
    </div>
  );
}
