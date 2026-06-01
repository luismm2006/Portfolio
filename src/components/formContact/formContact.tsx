import { useInformation } from "../../context/information";
import "./formContact.css";

export default function FormContact() {
  const {info} = useInformation();
  if (!info) return <p>Cargando...</p>;
  
  return (
    <form id="contact" className="form-contact">
      <h3>{info.contact.title}</h3>
      <div className="form-inputs">
        <input type="text" placeholder="Tu nombre" />
        <input type="email" placeholder="Tu email" />
        <textarea placeholder="Tu mensaje..."></textarea>
      </div>
      <div className="form-actions">
        <span>{info.contact.email}</span>
        <button type="submit">Enviar Mensaje</button>
      </div>
    </form>
  );
}