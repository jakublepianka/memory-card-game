import { Image } from "./Image";

export function ImageCard({ imgUrl, imgOrder, onCardClick }) {
  return (
    <div className="card-container-wrapper" style={{ order: imgOrder }}>
      <div
        className="card-container"
        onClick={onCardClick}
        data-url={imgUrl}
      >
        <Image key={imgUrl} imgUrl={imgUrl}></Image>
      </div>
    </div>
  );
}
