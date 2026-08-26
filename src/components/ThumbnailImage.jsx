export default function ThumbnailImage({ onSelect, image, zoomed }) {
  return (
    <img
      src={image}
      alt=""
      onClick={onSelect}
      className={[
        " img-fluid thumbnails tzoom mx-2 ",
        zoomed ? " thumbnail-perma-zoom" : undefined,
      ]}
    />
  );
}
