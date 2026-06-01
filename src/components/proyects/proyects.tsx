import { useInformation } from "../../context/information";
import "./proyects.css";
import GithubLogo from "../../assets/Logo github.png";
import VercelLogo from "../../assets/logo-vercel.svg";

type TechCategory = {
  title: string;
  items: string[];
};

type Tecnologies = {
  frontend: TechCategory;
  backend: TechCategory;
  database: TechCategory;
  tools: TechCategory;
};

type Deployment = {
  title: string;
  app: string;
  github: {
    frontend: {
      title: string;
      url: string;
    };
    backend: {
      title: string;
      url: string;
    };
  };
};

type Project = {
  title: string;
  description: string;
  tecnologies: Tecnologies;
  image: string;
  deployment: Deployment;
};

export default function Proyects() {
  const {info} = useInformation();
  if (!info) return <p>Cargando...</p>;
  
  return (
    <div id="projects" className="proyects-wrapper">
      <div className="proyects-title">
        <h3>{info.proyects.title}</h3>
      </div>
      
      <div className="proyects-grid">
        {info.proyects.proyects
          .filter((project: Project) => {
            const hasTech =
              project.tecnologies.frontend.items.length > 0 ||
              project.tecnologies.backend.items.length > 0 ||
              project.tecnologies.database.items.length > 0 ||
              project.tecnologies.tools.items.length > 0;
            return !!project.title || !!project.description || !!project.image || hasTech;
          })
          .map((project: Project, index: number) => {
            const { title, description, tecnologies, image, deployment } = project;

            return (
              <div key={index} className="project-card">
                {image && (
                  <div className="project-image">
                    <img src={image} alt={title} />
                  </div>
                )}

                <div className="project-content">
                  <div>
                    <h4>{title}</h4>
                    <p>{description ? description : "Proyecto en curso..."}</p>
                  </div>

                  <div>
                    <div className="project-tech-groups">
                      <div className="tech-category">
                        <h4 className="tech-category-title">{tecnologies.frontend.title}</h4>
                        <div className="tech-tags">
                          {tecnologies.frontend.items.length > 0 ? (
                            tecnologies.frontend.items.map((tech, i) => (
                              <span key={i} className="tech-tag tech-tag--frontend">{tech}</span>
                            ))
                          ) : (
                            <span className="tech-tag tech-tag--empty">No viene implementado en el proyecto</span>
                          )}
                        </div>
                      </div>

                      <div className="tech-category">
                        <h4 className="tech-category-title">{tecnologies.backend.title}</h4>
                        <div className="tech-tags">
                          {tecnologies.backend.items.length > 0 ? (
                            tecnologies.backend.items.map((tech, i) => (
                              <span key={i} className="tech-tag tech-tag--backend">{tech}</span>
                            ))
                          ) : (
                            <span className="tech-tag tech-tag--empty">No viene implementado en el proyecto</span>
                          )}
                        </div>
                      </div>

                      <div className="tech-category">
                        <h4 className="tech-category-title">{tecnologies.database.title}</h4>
                        <div className="tech-tags">
                          {tecnologies.database.items.length > 0 ? (
                            tecnologies.database.items.map((tech, i) => (
                              <span key={i} className="tech-tag tech-tag--database">{tech}</span>
                            ))
                          ) : (
                            <span className="tech-tag tech-tag--empty">No viene implementado en el proyecto</span>
                          )}
                        </div>
                      </div>

                      <div className="tech-category">
                        <h4 className="tech-category-title">{tecnologies.tools.title}</h4>
                        <div className="tech-tags">
                          {tecnologies.tools.items.length > 0 ? (
                            tecnologies.tools.items.map((tech, i) => (
                              <span key={i} className="tech-tag tech-tag--tools">{tech}</span>
                            ))
                          ) : (
                            <span className="tech-tag tech-tag--empty">No viene implementado en el proyecto</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="deployment-block">
                      <div className="deployment-header">
                        <img src={VercelLogo} alt="Vercel" className="deployment-icon" />
                        <h4 className="deployment-title">{deployment.title}</h4>
                      </div>

                      <div className="deployment-links">
                        {deployment.app.length > 0 ? (
                          <a href={deployment.app} target="_blank" className="deployment-link">
                            Ver aplicación
                          </a>
                        ) : (
                          <span className="deployment-empty">No viene implementado en el proyecto</span>
                        )}
                      </div>
                    </div>

                    <div className="deployment-block">
                      <div className="deployment-header">
                        <img src={GithubLogo} alt="GitHub" className="github-icon" />
                        <h4 className="repo-title">Repositorios</h4>
                      </div>

                      <div className="deployment-links">
                        {deployment.github.frontend.url.length > 0 ? (
                          <a href={deployment.github.frontend.url} target="_blank" className="deployment-link">
                            {deployment.github.frontend.title}
                          </a>
                        ) : null}

                        {deployment.github.backend.url.length > 0 ? (
                          <a href={deployment.github.backend.url} target="_blank" className="deployment-link">
                            {deployment.github.backend.title}
                          </a>
                        ) : null}

                        {deployment.github.frontend.url.length === 0 && deployment.github.backend.url.length === 0 ? (
                          <span className="deployment-empty">No viene implementado en el proyecto</span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}