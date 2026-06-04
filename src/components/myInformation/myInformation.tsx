import "./myInformation.css";
import Imagen_Luis_Profesional from "../../assets/Imagen_Luis_Profesional.jpeg";
import { useInformation } from "../../context/information";

export default function MyInformation() {
  const { info } = useInformation();
  if (!info) return <p>Cargando...</p>;

  return (
    <section id="my-information" className="hero">
      <div className="hero-content">
        <div className="hero-avatar-wrapper">
          <img
            src={Imagen_Luis_Profesional}
            alt="Foto de Luis Mula Márquez"
            className="hero-avatar"
          />
        </div>

        <div className="hero-text">
          <h2 className="hero-availability">{info.myInformation.disponibility}</h2>
          <h1 className="hero-name">{info.myInformation.name}</h1>
          <p className="hero-description">Desarrollador Full Stack <br /> {info.myInformation.description}</p>
        </div>

        <div className="hero-actions">
          <a
            download
            href={info.myInformation.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Descargar CV
          </a>
          <a
            href={info.myInformation.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            GitHub 🡲
          </a>
          <a
            href={info.myInformation.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            LinkedIn 🡲
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <h2>{info.myInformation.experience}</h2>
            <p>Meses de experiencia</p>
          </div>
          <div className="hero-stat">
            <h2>{info.myInformation.tecnologies}</h2>
            <p>Tecnologías/Herramientas</p>
          </div>
          <div className="hero-stat">
            <h2>{info.myInformation.projects}</h2>
            <p>Proyectos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
