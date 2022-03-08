// atoms
import Image from "../../UI/atoms/ImgStyle/Image";
import { Title2 } from "../../UI/atoms/Title";
// molecules
import TextContent from "../../UI/molecules/TextContent/TextContent";
// style
import "./style.css";
// images
import img from "../../../assets/images/programmer.svg";

// good
export default function About() {
  return (
    <section className="about-section page-layout" id="about">
      <div className="about-container">
        <div className="image-wrapper item-a">
          <Image
            img={img}
            alt={"illustration of a programmer"}
            className={"about-img"}
          />
        </div>
        <div className="item-b">
          <Title2>About</Title2>
        </div>
        <div className="item-c">
          <TextContent body="Hello, i am Stu and a enthusiastic frontend developer building kick ass software" />
        </div>
      </div>
    </section>
  );
}
