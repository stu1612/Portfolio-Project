// images
import img from "../assets/images/programmer.svg";

export default function About() {
  return (
    <div className="primary-bg">
      <div className="layout">
        <h2 className="h2-about">About</h2>
        <div className="grid-layout grid-1">
          <div className="grid-1_item-2">
            <p>
              Hi, I am Stu Bolderson, a frontend developer with experience
              working with Javascript, React, React Native, GSAP, Framer Motion,
              Sass, Gastby and some Python .. I come from the Red side of
              Manchester and am now learning the skills and gaining the project
              experience for me to join a company who is looking for an engaging
              and passionate developer.
            </p>
            <p className="mt-2">
              I have mostly been working with React but I have no preferences in
              what I do - I love coding and learning new things, and with the
              software architeacture skills I am learnign with Novare I am
              confident my process and energy will be well placed to produce
              great work.
            </p>
          </div>
          <div className="w-100 grid-1_item-1 about-img">
            <img src={img} alt="jhjh" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
}
