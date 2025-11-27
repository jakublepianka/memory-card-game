export function Image({ imgUrl }) {
  return (
    <img
      src={imgUrl}
      style={{ width: "150px", aspectRatio: 1 / 1, objectFit: "cover" }}
    ></img>
  );
}
