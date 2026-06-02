import { useInformation } from "../../context/information";
import "./formContact.css";
import formContactHook from "./hooks/formContactHook";

export default function FormContact() {
  const { info } = useInformation();
  const { formData, errors, success, handleChange, handleSubmit } = formContactHook();

  if (!info) return <p>Cargando...</p>;

  return (
    <form id="contact" className="form-contact" onSubmit={handleSubmit} noValidate>
      <h3>{info.contact.title}</h3>

      {success && <div className="form-success">Mensaje enviado correctamente.</div>}

      <div className="form-inputs">
        <div className="form-field">
          <label htmlFor="contact-name">Nombre</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Tu nombre"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "error-name" : undefined}
          />
          {errors.name && (
            <span className="form-error" id="error-name">
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Tu email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "error-email" : undefined}
          />
          {errors.email && (
            <span className="form-error" id="error-email">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="contact-message">Mensaje</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Tu mensaje..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "error-message" : undefined}
          />
          {errors.message && (
            <span className="form-error" id="error-message">
              {errors.message}
            </span>
          )}
        </div>
      </div>

      <div className="form-actions">
        <div className="contact-info">
          <p>También puedes escribir directamente a:</p>
          <a className="contact-email" href={`mailto:${info.contact.email}`}>
            {info.contact.email}
          </a>
        </div>
        <button type="submit">Enviar Mensaje</button>
      </div>
    </form>
  );
}