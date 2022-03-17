import { HiOutlineMail } from "react-icons/hi";
import { FaMobileAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const Data = [
  {
    id: 1,
    img: <HiOutlineMail />,
    ahref: true,
    link: "stuart.bolderson@aol.com",
  },
  {
    id: 2,
    img: <FaMobileAlt />,
    href: false,
    link: "+46 70 857 7935",
  },
  {
    id: 3,
    img: <ImLocation />,
    href: false,
    link: "Lund, Sweden",
  },
];

export default Data;
