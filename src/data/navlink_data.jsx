import Logo from "../components/UI/molecules/Logo/Logo";

export default function Data() {
  return [
    {
      id: 1,
      class: "one",
      url: "#about",
      name: "About",
    },
    {
      id: 2,
      class: "two",
      url: "#projects",
      name: "Projects",
    },
    {
      id: 3,
      class: "three",
      url: "#home",
      name: <Logo />,
    },
    {
      id: 4,
      class: "four",
      url: "#tech",
      name: "tech",
    },
    {
      id: 5,
      class: "five",
      url: "#contact",
      name: "contact",
    },
  ];
}
