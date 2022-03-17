// images
import img from "../assets/images/Developer.svg";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <h1>Stuart Bolderson</h1>
      <div className="svg-wrapper">
        <img src={img} alt="Developer illustration" className="image" />
      </div>
    </section>
  );
}
