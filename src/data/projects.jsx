// card images
import vegan_ci from "../assets/images/cards/vegan_ci.jpg";
import eika_ci from "../assets/images/cards/eika_ci.jpg";
import bbq_ci from "../assets/images/cards/bbq_ci.jpg";
import ecommerce_ci from "../assets/images/cards/ecommerce_ci.jpg";
import lms_ci from "../assets/images/cards/lms_ci.jpg";
import netflix_ci from "../assets/images/cards/netflix_ci.jpg";
import tracker_ci from "../assets/images/cards/tracker_ci.jpg";
import todo_ci from "../assets/images/cards/todo_ci.jpg";

//screenshot images
import eika_sh from "../assets/screenshots/eika_sh.png";

export default function Projects() {
  return [
    {
      id: 1,
      isActive: true,
      title: "eika-shopping-app",
      cardImg: eika_ci,
      screenshotImg: eika_sh,
      projName: "Eika Shopping App",
      body: "This is text from Project One",
      repo: "https://github.com/stu1612/eika",
      url: "https://eika.netlify.app/",
      pills: ["React", "Context API", "CSS"],
    },
    {
      id: 2,
      isActive: false,
      title: "restaurant-app",
      cardImg: vegan_ci,
      screenshotImg: "",
      projName: "Vegan Restaurant App",
      body: "This is text from Project Three",
      repo: "",
      url: "",
      pills: ["React"],
    },
    {
      id: 3,
      isActive: false,
      title: "package-tracker",
      cardImg: tracker_ci,
      screenshotImg: "",
      projName: "Package Tracker",
      body: "This is text from Project Three",
      repo: "",
      url: "",
      pills: ["React"],
    },
    {
      id: 4,
      isActive: false,
      title: "todo-tdd",
      cardImg: todo_ci,
      screenshotImg: "",
      projName: "TODO TDD",
      body: "This is text from Project Four",
      repo: "",
      url: "",
      pills: ["React"],
    },
    {
      id: 5,
      isActive: false,
      title: "e-commerce",
      cardImg: ecommerce_ci,
      screenshotImg: "",
      projName: "E-Commerce",
      body: "This is text from Project Five",
      repo: "",
      url: "",
      pills: ["React"],
    },
    {
      id: 6,
      isActive: false,
      title: "bbq-restaurant",
      cardImg: bbq_ci,
      screenshotImg: "",
      projName: "BBQ Restaurant",
      body: "This is text from Project Six",
      repo: "",
      url: "",
      pills: ["React"],
    },
    {
      id: 7,
      isActive: false,
      title: "lms",
      cardImg: lms_ci,
      screenshotImg: "",
      projName: "LMS",
      body: "This is text from Project Seven",
      repo: "",
      url: "",
      pills: ["React"],
    },
    {
      id: 8,
      isActive: false,
      title: "netflix",
      cardImg: netflix_ci,
      screenshotImg: "",
      projName: "Netflix",
      body: "This is text from Project Eight",
      repo: "",
      url: "",
      pills: ["React"],
    },
  ];
}
