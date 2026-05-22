import { useInformation } from "../../context/information";

export default function Proyects() {
  const {info} = useInformation();
  if (!info) return <p>Cargando...</p>;
  return (
    <>
    </>
  );
}