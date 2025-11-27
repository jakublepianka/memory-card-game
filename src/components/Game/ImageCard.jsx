import { Image } from "./Image";

export function ImageCard({ imgUrl, imgOrder, onCardClick }) {
  return (
    <div
      className="card-container"
      onClick={onCardClick}
      data-url={imgUrl}
      style={{ order: imgOrder }}
    >
      <Image key={imgUrl} imgUrl={imgUrl}></Image>
    </div>
  );
}
