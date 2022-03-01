import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export default function Data() {
  const style = {
    fontSize: "8rem",
    color: "#b1d3e3",
  };
  return [
    {
      id: 1,
      title: "React",
      img: <FaReact style={style} />,
    },
    {
      id: 2,
      title: "TypeSript",
      img: <SiTypescript style={style} />,
    },
    {
      id: 3,
      title: "Sass",
      img: <FaSass style={style} />,
    },
    {
      id: 4,
      title: "Jest",
      img: <SiJest style={style} />,
    },
    {
      id: 5,
      title: "Firebase Auth",
      img: <SiFirebase style={style} />,
    },
    {
      id: 6,
      title: "FireStore",
      img: <SiFirebase style={style} />,
    },
    {
      id: 7,
      title: "React Native",
      img: <FaReact style={style} />,
    },
    {
      id: 8,
      title: "Figma",
      img: <FaFigma style={style} />,
    },
    {
      id: 9,
      title: "Python",
      img: <FaPython style={style} />,
    },
    {
      id: 10,
      title: "JavaScript",
      img: <SiJavascript style={style} />,
    },
  ];
}
