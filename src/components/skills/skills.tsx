import { useInformation } from "../../context/information";

export default function Skills() {
  const {info} = useInformation();
  if (!info) return <p>Cargando...</p>;
  return (
    <>
      <div>
        <h3>{info.skills.title}</h3>
        <div>
          <h4>{info.skills.frontend.title}</h4>
        </div>
        <ul>
          {info.skills.frontend.tecnologies.map((skill: string, index: number) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <div>
          <h4>{info.skills.backend.title}</h4>
        </div>
        <ul>
          {info.skills.backend.tecnologies.map((skill: string, index: number) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <div>
          <h4>{info.skills.tools.title}</h4>
        </div>
        <ul>
          {info.skills.tools.tecnologies.map((skill: string, index: number) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </>
  );
}