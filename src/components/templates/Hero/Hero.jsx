// atoms
import { Title1 } from "../../UI/atoms/Title/index";
// images
import hero from "../../../assets/images/landing-img.jpg";
import programmer from "../../../assets/images/landing.svg";
// styles
import "./style.css";

export default function Hero() {
  return (
    <section className="section" id="home">
      <img src={hero} alt="hello" className="hero-img" />
      <img src={programmer} alt="programmer" className="programmer" />
      <div className="overlay">
        <Title1>Stuart Bolderson</Title1>
      </div>
    </section>
  );
}
