import { Paragraph } from "../components/UI/atoms/Paragraph";
import { Title1, Title2, Title3 } from "../components/UI/atoms/Title/index";

import Card from "../components/templates/Card/Card";
// import Modal from "../components/templates/Modal/Modal";

export default function Home({ data }) {
  return (
    <div>
      <Title1>Welcome Title 1</Title1>
      <Title2>Welcome Title 2</Title2>
      <Title3>Welcome Title 3</Title3>
      <Paragraph text="Here are the projects i will be making during the Frontend course at Novare Potential the Frontend course at Novare Potential " />

      {data &&
        data.map((project) => (
          <Card key={project.id} project={project} data={data} />
        ))}

      {/* {showModal && (
        <Modal >
          <Title1 text="Hello Modal" />
          <button onClick={handleCloseModal}>close</button>
        </Modal> */}
    </div>
  );
}
