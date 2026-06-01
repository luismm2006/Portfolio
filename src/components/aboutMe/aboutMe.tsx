import { useInformation } from "../../context/information";
import "./aboutMe.css";
export default function AboutMe() {
  const { info } = useInformation();
  if (!info) return <p>Cargando...</p>;

  return (
    <section id="about-me" className="about-wrapper">
      <h3>{info.aboutMe.title}</h3>

      <p>{info.aboutMe.description}</p>

      <div className="about-badges">
        <span>📍 {info.aboutMe.location}</span>
        <span>🚗 {info.aboutMe.drivingLicense}</span>
        <span>✔ {info.aboutMe.disponibility}</span>
      </div>
    </section>
  );
}
