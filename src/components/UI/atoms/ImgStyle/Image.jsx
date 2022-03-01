import "./style.css";

export default function Image({ img, alt, className }) {
  return (
    <div className="image-wrapper">
      <img src={img} alt={alt} className={className} />
    </div>
  );
}
