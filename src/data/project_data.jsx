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

export default function Data() {
  return [
    {
      id: 1,
      isActive: true,
      title: "eika-shopping-app",
      image: eika_ci,
      screenshot: eika_sh,
      alt: "sofa, table, chiars design",
      name: "Eika Shopping App",
      body: "This is text from Project One",
      repo: "https://github.com/stu1612/eika",
      url: "https://eika.netlify.app/",
      pills: ["React", "Context API", "CSS"],
    },
    {
      id: 2,
      isActive: false,
      title: "restaurant-app",
      image: vegan_ci,
      screenshot: "",
      alt: "go vegan sign on window",
      name: "Vegan Restaurant App",
      body: "This is text from Project Three",
      repo: "",
      url: "",
      pills: ["React"],
    },
    {
      id: 3,
      isActive: false,
      title: "package-tracker",
      image: tracker_ci,
      screenshot: "",
      alt: "box being packed",
      name: "Package Tracker",
      body: "This is text from Project Three",
      repo: "",
      url: "",
      pills: ["React"],
    },
    {
      id: 4,
      isActive: false,
      title: "todo-tdd",
      image: todo_ci,
      screenshot: "",
      alt: "todo book with pencil",
      name: "TODO TDD",
      body: "This is text from Project Four",
      repo: "",
      url: "",
      pills: ["React"],
    },
    {
      id: 5,
      isActive: false,
      title: "e-commerce",
      image: ecommerce_ci,
      screenshot: "",
      alt: "person looking at ecommerce inforamtion on laptop",
      name: "E-Commerce",
      body: "This is text from Project Five",
      repo: "",
      url: "",
      pills: ["React"],
    },
    {
      id: 6,
      isActive: false,
      title: "bbq-restaurant",
      image: bbq_ci,
      screenshot: "",
      alt: "cooked bbq ribs displayed on table",
      name: "BBQ Restaurant",
      body: "This is text from Project Six",
      repo: "",
      url: "",
      pills: ["React"],
    },
    {
      id: 7,
      isActive: false,
      title: "lms",
      image: lms_ci,
      screenshot: "",
      alt: "learning station with laptop, book, pencils displayed on table",
      name: "LMS",
      body: "This is text from Project Seven",
      repo: "",
      url: "",
      pills: ["React"],
    },
    {
      id: 8,
      isActive: false,
      title: "netflix",
      image: netflix_ci,
      screenshot: "",
      alt: "netflix red logo with black background",
      name: "Netflix",
      body: "This is text from Project Eight",
      repo: "",
      url: "",
      pills: ["React"],
    },
  ];
}
