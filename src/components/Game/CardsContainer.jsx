import { ImageCard } from "./ImageCard";
import "../../styles/CardsContainer.css"

export function CardsContainer({imgUrls}) {
  
  return (
    <div className="cards-container">
      {imgUrls.map((source, index) => 
        <ImageCard key={index} imgUrl={source}></ImageCard>
      )}
    </div>
  );
} 