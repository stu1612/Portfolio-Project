// atoms
import Image from "../../UI/atoms/ImgStyle/Image";
// molecules
import ScreenShape from "../../UI/molecules/ScreenShape/ScreenShape";
import TextContent from "../../UI/molecules/TextContent/TextContent";
// style
import "./style.css";
// images
import img from "../../../assets/images/programmer.svg";

export default function About() {
  return (
    <div className="about-section page-layout" id="about">
      <ScreenShape>
        <TextContent
          title="About"
          body="Hello, i am Stu and a enthusiastic frontend developer building kick ass software"
        />
        <Image img={img} alt={"illustration of a programmer"} />
      </ScreenShape>
    </div>
  );
}
