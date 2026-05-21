import { useInformation } from "../../context/information";

export default function AboutMe() {
  const { info } = useInformation();
  if (!info) return <p>Cargando...</p>;
  return (
    <>  
        <div>
          <h3>{info.aboutMe.title}</h3>
          <p>{info.aboutMe.description}</p>
          <div>
            <span>{info.aboutMe.location}</span>
            <span>{info.aboutMe.drivingLicense}</span>
            <span>{info.aboutMe.disponibility}</span>
          </div>
        </div>

    </>
  );
}