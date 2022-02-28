// styles
import "./style.css";
import { Title3 } from "../../UI/atoms/Title";

export default function CardItem({ proj }) {
  return (
    <div key={proj.id} className="card-item">
      <Title3>{proj.projName}</Title3>
      <p>{proj.body}</p>
      {proj.pills.map((pill) => (
        <p>{pill}</p>
      ))}
      <button>
        <a href={proj.url} target="_blank" rel="noopener noreferrer">
          URL
        </a>
      </button>
      <button>
        <a href={proj.repo} target="_blank" rel="noopener noreferrer">
          Repo
        </a>
      </button>
    </div>
  );
}
