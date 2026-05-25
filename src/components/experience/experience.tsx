import { useInformation } from "../../context/information";
import "./experience.css";

export default function Experience() {
  const { info } = useInformation();
  if (!info) return <p>Cargando...</p>;

  return (
    <div className="experience-wrapper">
      <div className="experience-grid">
        <div className="experience-heading">
          <h3>{info.experience.title}</h3>
        </div>

        <ul className="experience-list">
          {info.experience.exp.map(({ date, title, tools } : { date: string; title: string; tools: string[] }) => (
            <li key={title}>
              <span className="experience-date">{date}</span>
              <h4>{title}</h4>
              <p>{tools.join(" · ")}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}