import Pill from "../../UI/atoms/Pill/index";
import ButtonContainer from "../../UI/molecules/ButtonContainer/ButtonContainer";
import TextContent from "../../UI/molecules/TextContent/TextContent";
// styles
import "./style.css";

export default function CardItem({ proj }) {
  return (
    <div key={proj.id} className="card-item">
      <div className="image-wrapper relative">
        <img src={proj.screenshotImg} alt="hello" className="img-250" />
      </div>
      <TextContent title={proj.projName} body={proj.body} />
      <div className="pills-container">
        {proj.pills.map((pill) => (
          <Pill text={pill} />
        ))}
      </div>
      <ButtonContainer>
        <a
          href={proj.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Visit website/app
        </a>
        <a
          href={proj.repo}
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
