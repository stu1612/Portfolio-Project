import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export default function TechIcons() {
  return [
    {
      id: 1,
      title: "React",
      img: <FaReact size={26} color="#b1d3e3" />,
    },
    {
      id: 2,
      title: "TypeSript",
      img: <SiTypescript size={26} color="#b1d3e3" />,
    },
    {
      id: 3,
      title: "Sass",
      img: <FaSass size={26} color="#b1d3e3" />,
    },
    {
      id: 4,
      title: "Jest",
      img: <SiJest size={26} color="#b1d3e3" />,
    },
    {
      id: 5,
      title: "Firebase Auth",
      img: <SiFirebase size={26} color="#b1d3e3" />,
    },
    {
      id: 6,
      title: "FireStore",
      img: <SiFirebase size={26} color="#b1d3e3" />,
    },
    {
      id: 7,
      title: "React Native",
      img: <FaReact size={26} color="#b1d3e3" />,
    },
    {
      id: 8,
      title: "Figma",
      img: <FaFigma size={26} color="#b1d3e3" />,
    },
    {
      id: 9,
      title: "Python",
      img: <FaPython size={26} color="#b1d3e3" />,
    },
    {
      id: 10,
      title: "JavaScript",
      img: <SiJavascript size={26} color="#b1d3e3" />,
    },
  ];
}
