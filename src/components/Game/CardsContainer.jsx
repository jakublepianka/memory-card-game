// import { useState } from "react";
import { ImageCard } from "./ImageCard";
import "../../styles/CardsContainer.css";

export function CardsContainer({ imageObjs, onCardClick }) {

  return (
    <div className="cards-container">
      {imageObjs.map((source, index) => (
        <ImageCard
          key={index}
          imgUrl={source.url}
          imgOrder={source.order}
          onCardClick={onCardClick}
        ></ImageCard>
      ))}
    </div>
  );
}
