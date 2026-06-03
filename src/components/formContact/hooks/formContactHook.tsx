import emailjs from "emailjs-com";
import { useState } from "react";
type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function formContactHook() {
    function sendEmail(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        emailjs.sendForm(
        "service_66dn93l",
        "template_6ra9xtk",
        e.target,
        "Zs-E742zPHEtEa55P"
        )
    }
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [success, setSuccess] = useState(false);


    const handleChange = (field: "name" | "email" | "message", value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: undefined }));
        setSuccess(false);
    };

    const validate = () => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
        newErrors.name = "El nombre es obligatorio.";
        }

        if (!formData.email.trim()) {
        newErrors.email = "El correo electrónico es obligatorio.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Introduce un email válido. Ejemplo: usuario@gmail.com";
        }

        if (!formData.message.trim()) {
        newErrors.message = "El mensaje no puede estar vacío.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validate()) {
        return;
        }

        setFormData({ name: "", email: "", message: "" });
        setSuccess(true);
        sendEmail(event);
    };
    return { formData, errors, success, handleChange, handleSubmit };
}