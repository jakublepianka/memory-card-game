import { Image } from "./Image";

export function ImageCard({imgUrl, imgOrder, onChange}) {
  return (
    <div className="card-container" onClick={onChange} style={{order: imgOrder}}>
      <Image key={imgUrl} imgUrl={imgUrl}></Image>
    </div>
  );
} 