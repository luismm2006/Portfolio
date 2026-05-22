import { useInformation } from "../../context/information";

export default function Experience() {
  const {info} = useInformation();
  if (!info) return <p>Cargando...</p>;
  return (
    <>
      <div>
        <h3>{info.experience.title}</h3>
        <ul>
           {info.experience.exp.map(({ date, title, tools } : { date: string; title: string; tools: string[] }) => (
            <li key={title}>
              <span>{date}</span>
              <h4>{title}</h4>
              <p>{tools.join(" · ")}</p>
            </li>
            ))}
        </ul>
      </div>
    </>
  );
}