import { useInformation } from "../../context/information";
import { useCarousel } from "./hooks/useCarousel";
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

export default function Proyects() {
  const {info} = useInformation();
  
  const filteredProjects = info?.proyects.proyects.filter(
    (project: { title: string; description: string; tecnologies: Tecnologies; image: string; deployment: Deployment }) =>
      project.title ||
      project.description ||
      project.tecnologies.frontend.items.length > 0 ||
      project.tecnologies.backend.items.length > 0 ||
      project.tecnologies.database.items.length > 0 ||
      project.tecnologies.tools.items.length > 0 ||
      project.image
  ) || [];

  const carousel = useCarousel({ totalItems: filteredProjects.length });

  if (!info) return <p>Cargando...</p>;
  
  return (
    <div id="projects" className="proyects-wrapper">
      <div className="proyects-title">
        <h3>{info.proyects.title}</h3>
      </div>
      
      <div className="proyects-grid">
        {info.proyects.proyects.map(({ title, description, tecnologies, image, deployment } : { title: string; description: string; tecnologies: Tecnologies; image: string; deployment: Deployment }, index: number) => {
          const isEmptyProject = !title && !description && tecnologies.frontend.items.length === 0 && tecnologies.backend.items.length === 0 && tecnologies.database.items.length === 0 && tecnologies.tools.items.length === 0 && !image;

          return (
            <div key={index} className={`project-card${isEmptyProject ? " project-card--empty" : ""}`}>
              {image && (
                <div className="project-image">
                  <img src={image} alt={title} />
                </div>
              )}

              <div className={`project-content${isEmptyProject ? " project-empty" : ""}`}>
                {!isEmptyProject && <h4>{title}</h4>}
                <p>{description ? description : "Proyecto en curso..."}</p>
                {!isEmptyProject && (
                  <div className="project-tech-groups">
                    {tecnologies.frontend.items.length > 0 && (
                      <div className="tech-category">
                        <h4 className="tech-category-title">{tecnologies.frontend.title}</h4>
                        <div className="tech-tags">
                          {tecnologies.frontend.items.map((tech, i) => (
                            <span key={i} className="tech-tag tech-tag--frontend">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {tecnologies.backend.items.length > 0 && (
                      <div className="tech-category">
                        <h4 className="tech-category-title">{tecnologies.backend.title}</h4>
                        <div className="tech-tags">
                          {tecnologies.backend.items.map((tech, i) => (
                            <span key={i} className="tech-tag tech-tag--backend">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {tecnologies.database.items.length > 0 && (
                      <div className="tech-category">
                        <h4 className="tech-category-title">{tecnologies.database.title}</h4>
                        <div className="tech-tags">
                          {tecnologies.database.items.map((tech, i) => (
                            <span key={i} className="tech-tag tech-tag--database">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {tecnologies.tools.items.length > 0 && (
                      <div className="tech-category">
                        <h4 className="tech-category-title">{tecnologies.tools.title}</h4>
                        <div className="tech-tags">
                          {tecnologies.tools.items.map((tech, i) => (
                            <span key={i} className="tech-tag tech-tag--tools">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {deployment.app.length > 0 && (
                      <div className="deployment-block">
                        <div className="deployment-header">
                          <img src={VercelLogo} alt="Vercel" className="deployment-icon" />
                          <h4 className="deployment-title">{deployment.title}</h4>
                        </div>

                        <div className="deployment-links">
                          <a href={deployment.app} target="_blank" className="deployment-link">
                            Ver aplicación
                          </a>
                        </div>
                      </div>
                    )}

                    {deployment.github.frontend.url.length > 0 ||
                    deployment.github.backend.url.length > 0 ? (
                      <div className="deployment-block">
                        <div className="deployment-header">
                          <img src={GithubLogo} alt="GitHub" className="github-icon" />
                          <h4 className="repo-title">Repositorios</h4>
                        </div>

                        <div className="deployment-links">
                          {deployment.github.frontend.url.length > 0 && (
                            <a href={deployment.github.frontend.url} target="_blank" className="deployment-link">
                              {deployment.github.frontend.title}
                            </a>
                          )}

                          {deployment.github.backend.url.length > 0 && (
                            <a href={deployment.github.backend.url} target="_blank" className="deployment-link">
                              {deployment.github.backend.title}
                            </a>
                          )}
                        </div>
                      </div>
                    ) : null}


                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Carrusel para móvil */}
      {filteredProjects.length > 0 && (
        <div className="proyects-carousel">
          <div className="carousel-container">
            <div className="carousel-slide">
              {filteredProjects[carousel.currentIndex] && (
                <div className={`project-card${!filteredProjects[carousel.currentIndex].title && !filteredProjects[carousel.currentIndex].description && filteredProjects[carousel.currentIndex].tecnologies.frontend.items.length === 0 && filteredProjects[carousel.currentIndex].tecnologies.backend.items.length === 0 && filteredProjects[carousel.currentIndex].tecnologies.database.items.length === 0 && filteredProjects[carousel.currentIndex].tecnologies.tools.items.length === 0 && !filteredProjects[carousel.currentIndex].image ? " project-card--empty" : ""}`}>
                  {filteredProjects[carousel.currentIndex].image && (
                    <div className="project-image">
                      <img src={filteredProjects[carousel.currentIndex].image} alt={filteredProjects[carousel.currentIndex].title} />
                    </div>
                  )}

                  <div className={`project-content${!filteredProjects[carousel.currentIndex].title && !filteredProjects[carousel.currentIndex].description && filteredProjects[carousel.currentIndex].tecnologies.frontend.items.length === 0 && filteredProjects[carousel.currentIndex].tecnologies.backend.items.length === 0 && filteredProjects[carousel.currentIndex].tecnologies.database.items.length === 0 && filteredProjects[carousel.currentIndex].tecnologies.tools.items.length === 0 && !filteredProjects[carousel.currentIndex].image ? " project-empty" : ""}`}>
                    {filteredProjects[carousel.currentIndex].title && <h4>{filteredProjects[carousel.currentIndex].title}</h4>}
                    <p>{filteredProjects[carousel.currentIndex].description ? filteredProjects[carousel.currentIndex].description : "Proyecto en curso..."}</p>
                    {filteredProjects[carousel.currentIndex].title && (
                      <div className="project-tech-groups">
                        {filteredProjects[carousel.currentIndex].tecnologies.frontend.items.length > 0 && (
                          <div className="tech-category">
                            <h4 className="tech-category-title">{filteredProjects[carousel.currentIndex].tecnologies.frontend.title}</h4>
                            <div className="tech-tags">
                              {filteredProjects[carousel.currentIndex].tecnologies.frontend.items.map((tech: string, i: number) => (
                                <span key={i} className="tech-tag tech-tag--frontend">{tech}</span>
                              ))}
                            </div>
                          </div>
                        )}

                        {filteredProjects[carousel.currentIndex].tecnologies.backend.items.length > 0 && (
                          <div className="tech-category">
                            <h4 className="tech-category-title">{filteredProjects[carousel.currentIndex].tecnologies.backend.title}</h4>
                            <div className="tech-tags">
                              {filteredProjects[carousel.currentIndex].tecnologies.backend.items.map((tech: string, i: number) => (
                                <span key={i} className="tech-tag tech-tag--backend">{tech}</span>
                              ))}
                            </div>
                          </div>
                        )}

                        {filteredProjects[carousel.currentIndex].tecnologies.database.items.length > 0 && (
                          <div className="tech-category">
                            <h4 className="tech-category-title">{filteredProjects[carousel.currentIndex].tecnologies.database.title}</h4>
                            <div className="tech-tags">
                              {filteredProjects[carousel.currentIndex].tecnologies.database.items.map((tech: string, i: number) => (
                                <span key={i} className="tech-tag tech-tag--database">{tech}</span>
                              ))}
                            </div>
                          </div>
                        )}

                        {filteredProjects[carousel.currentIndex].tecnologies.tools.items.length > 0 && (
                          <div className="tech-category">
                            <h4 className="tech-category-title">{filteredProjects[carousel.currentIndex].tecnologies.tools.title}</h4>
                            <div className="tech-tags">
                              {filteredProjects[carousel.currentIndex].tecnologies.tools.items.map((tech: string, i: number) => (
                                <span key={i} className="tech-tag tech-tag--tools">{tech}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {filteredProjects[carousel.currentIndex].deployment.app.length > 0 && (
                          <div className="deployment-block">
                            <div className="deployment-header">
                              <img src={VercelLogo} alt="Vercel" className="deployment-icon" />
                              <h4 className="deployment-title">{filteredProjects[carousel.currentIndex].deployment.title}</h4>
                            </div>

                            <div className="deployment-links">
                              <a href={filteredProjects[carousel.currentIndex].deployment.app} target="_blank" className="deployment-link">
                                Ver aplicación
                              </a>
                            </div>
                          </div>
                        )}

                        {filteredProjects[carousel.currentIndex].deployment.github.frontend.url.length > 0 ||
                        filteredProjects[carousel.currentIndex].deployment.github.backend.url.length > 0 ? (
                          <div className="deployment-block">
                            <div className="deployment-header">
                              <img src={GithubLogo} alt="GitHub" className="github-icon" />
                              <h4 className="repo-title">Repositorios</h4>
                            </div>

                            <div className="deployment-links">
                              {filteredProjects[carousel.currentIndex].deployment.github.frontend.url.length > 0 && (
                                <a href={filteredProjects[carousel.currentIndex].deployment.github.frontend.url} target="_blank" className="deployment-link">
                                  {filteredProjects[carousel.currentIndex].deployment.github.frontend.title}
                                </a>
                              )}

                              {filteredProjects[carousel.currentIndex].deployment.github.backend.url.length > 0 && (
                                <a href={filteredProjects[carousel.currentIndex].deployment.github.backend.url} target="_blank" className="deployment-link">
                                  {filteredProjects[carousel.currentIndex].deployment.github.backend.title}
                                </a>
                              )}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {filteredProjects.length > 0 && (
              <div className="carousel-controls">
                <button className="carousel-btn" onClick={carousel.goToPrev} aria-label="Proyecto anterior">
                  ‹
                </button>
                <div className="carousel-indicators">
                  {filteredProjects.map((_ : { title: string; description: string; tecnologies: Tecnologies; image: string; deployment: Deployment }, index: number) => (
                    <button
                      key={index}
                      className={`carousel-dot ${index === carousel.currentIndex ? "active" : ""}`}
                      onClick={() => carousel.goToSlide(index)}
                      aria-label={`Ir al proyecto ${index + 1}`}
                    />
                  ))}
                </div>
                <button className="carousel-btn" onClick={carousel.goToNext} aria-label="Siguiente proyecto">
                  ›
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}