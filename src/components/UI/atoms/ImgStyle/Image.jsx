import "./style.css";

export default function Image({ img, alt }) {
  return (
    <div className="image-wrapper">
      <img src={img} alt={alt} className="img-200" />
    </div>
  );
}
