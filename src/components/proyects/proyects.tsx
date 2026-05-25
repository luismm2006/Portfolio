import { useInformation } from "../../context/information";
import "./proyects.css";

export default function Proyects() {
  const {info} = useInformation();
  if (!info) return <p>Cargando...</p>;
  
  return (
    <div className="proyects-wrapper">
      <div className="proyects-title">
        <h3>{info.proyects.title}</h3>
      </div>
      
      <div className="proyects-grid">
        {info.proyects.proyects.map(({ title, description, tecnologies, image } : { title: string; description: string; tecnologies: string[]; image: string }) => (
          <div key={title} className="project-card">
            {image && (
              <div className="project-image">
                <img src={image} alt={title} />
              </div>
            )}
            <div className="project-content">
              <h4>{title}</h4>
              <p>{description ? description : "Próximo Proyecto..."}</p>
              <div className="project-technologies">
                {tecnologies.map((tecnology: string) => (
                  <span key={tecnology} className="tech-tag">{tecnology}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}