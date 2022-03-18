// images
import img from "../assets/images/programmer.svg";

export default function About() {
  return (
    <section className="secondary-bg" id="about">
      <div className="layout about">
        <h2 className="h2">About</h2>
        <div className="grid-layout grid-1">
          <div className="grid-1b">
            <p>
              Hi, I am Stu Bolderson, a frontend developer with experience
              working with Javascript, React, React Native, GSAP, Framer Motion,
              Sass, Gatsby and some Python .. I am currently studying a
              Intensive Frontend Programme with Novare Potential where I will be
              learning to make solid, clean, well written Functional React
              applications combined with Sass, Typescript, Testing and Firebase.
            </p>
            <p className="mt-2">
              Apart from coding, i love sports, exercise and cycling. I come
              from the Red side of Manchester so I am a massive Man Utd fan ! I
              enjoy hanging out at Wed Dev meet up events, going out for a nice
              meal and catching up with friends and family for a well earned
              Beer !
            </p>
          </div>
          <div className="w-100 grid-1a about-img">
            <img src={img} alt="jhjh" className="image" />
          </div>
        </div>
      </div>
    </section>
  );
}
