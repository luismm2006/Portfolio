import { useInformation } from "../../context/information";
import "./skills.css";
export default function Skills() {
  const { info } = useInformation();
  if (!info) return <p>Cargando...</p>;

  return (
    <div id="skills" className="skills-wrapper">
      <h3>{info.skills.title}</h3>

      <div className="skills-grid">

        {/* FRONTEND */}
        <div className="skills-card skills-card--frontend">
          <h4 className="skills-card-title">{info.skills.frontend.title}</h4>
          <div className="skills-badges">
            {info.skills.frontend.tecnologies.map((skill: string) => (
              <span key={skill} className="skills-badge">{skill}</span>
            ))}
          </div>
        </div>

        {/* BACKEND */}
        <div className="skills-card skills-card--backend">
          <h4 className="skills-card-title">{info.skills.backend.title}</h4>
          <div className="skills-badges">
            {info.skills.backend.tecnologies.map((skill: string) => (
              <span key={skill} className="skills-badge">{skill}</span>
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div className="skills-card skills-card--tools">
          <h4 className="skills-card-title">{info.skills.tools.title}</h4>
          <div className="skills-badges">
            {info.skills.tools.tecnologies.map((skill : string)  => (
              <span key={skill} className="skills-badge">{skill}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
