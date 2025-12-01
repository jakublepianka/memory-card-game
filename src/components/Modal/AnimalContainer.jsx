import { useState } from "react";
import "../../styles/AnimalContainer.css";

export function AnimaContainer() {
  const [isCats, setIsCats] = useState(true);

  function handleCheck() {
    setIsCats((prev) => !prev);
  }

  return (
    <div className="api-choice-container">
      <h2>Card Images</h2>
      <div className="animal-checkbox-wrapper">
        <div
          className="animal-highlight"
          style={{
            transform: `translateX(${isCats ? 0 : 84}px) translateY(1px)`,
          }}
        ></div>
        <div
          className="text-value"
          style={{ transform: `translateX(${isCats ? 60 : 25}px)` }}
        >
          {isCats ? "Cats" : "Dogs"}
        </div>
        <div className="custom-checkbox-container">
          <input
            type="checkbox"
            onChange={handleCheck}
            checked={isCats}
          ></input>
          <input
            type="hidden"
            name="urlBase"
            value={
              isCats
                ? "https://api.thecatapi.com/v1/images/search?limit=~&api_key=live_OJC8ftKSMLZ9BW8PASwtf2XLRSA0lCd4i14sCmpbR3hfN1tlNsS7dXr62mfvOPln"
                : "https://dog.ceo/api/breeds/image/random/~"
            }
          ></input>
        </div>
      </div>
    </div>
  );
}
