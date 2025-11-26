import { Image } from "./Image";

export function ImageCard({imgUrl}) {
  return (
    <div className="card-container">
      <Image key={imgUrl} imgUrl={imgUrl}></Image>
    </div>
  );
} 