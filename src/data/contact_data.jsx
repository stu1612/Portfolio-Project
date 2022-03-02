import { AiOutlineMail } from "react-icons/ai";
import { ImMobile } from "react-icons/im";
import { ImLocation } from "react-icons/im";

export default function Data() {
  return [
    {
      id: 1,
      icon: <AiOutlineMail size={20} />,
      link: "mailto:stu.bolderson@aol.com?subject=Hello Stu !",
      title: "stu.bolderson@aol.com",
    },
    { id: 2, icon: <ImMobile size={20} />, link: "", title: "+46 70 857 7935" },
    { id: 3, icon: <ImLocation size={20} />, link: "", title: "Lund, Sweden" },
  ];
}
