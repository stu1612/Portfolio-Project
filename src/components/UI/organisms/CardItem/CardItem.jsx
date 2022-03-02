// atoms
import Pill from "../../atoms/Pill/index";
import { Title3 } from "../../atoms/Title";
import CloseIcon from "../../atoms/CloseIcon/CloseIcon";
// molecules
import ButtonContainer from "../../molecules/ButtonContainer/ButtonContainer";
import TextContent from "../../molecules/TextContent/TextContent";
// styles
import "./style.css";

export default function CardItem({ project, closeModal }) {
  const { screenshot, name, body, pills, repo, url } = project;

  const pillsArray =
    pills && pills.map((pill, index) => <Pill key={index} text={pill} />);

  return (
    <div className="card-item">
      <CloseIcon clickHandler={closeModal} />
      <div className="image-wrapper relative">
        <img src={screenshot} alt="hello" className="cardItem-img" />
      </div>
      <div className="cardItem-content">
        <div className="top">
          <Title3>{name}</Title3>
          <TextContent body={body} />
          <div className="pills-container">{pillsArray}</div>
        </div>
        <div className="bottom">
          <ButtonContainer>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit website/app
            </a>
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Git repository
            </a>
          </ButtonContainer>
        </div>
      </div>
    </div>
  );
}
