// atoms
import Pill from "../../atoms/Pill/index";
import { Title3 } from "../../atoms/Title";
// molecules
import ButtonContainer from "../../molecules/ButtonContainer/ButtonContainer";
import TextContent from "../../molecules/TextContent/TextContent";
// styles
import "./style.css";

export default function CardItem({ project }) {
  const { screenshot, name, body, pills, repo, url } = project;

  const pillsArray = pills.map((pill) => <Pill text={pill} />);

  return (
    <div className="card-item">
      <div className="image-wrapper relative">
        <img src={screenshot} alt="hello" className="cardItem-img" />
      </div>
      <Title3>{name}</Title3>
      <TextContent body={body} />
      <div className="pills-container">{pillsArray}</div>
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
  );
}