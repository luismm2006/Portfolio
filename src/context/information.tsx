import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

const InformationContext = createContext<any | null>(null);

export function useInformation() {
    const context = useContext(InformationContext);
    if(!context) {
        throw new Error("useInformation must be used within a InformationProvider");
    }
    return context;
}
interface InformationProviderProps {
  children: ReactNode;
}

export function InformationProvider({ children }: InformationProviderProps) {
  const [info, setInfo] = useState<any>(null);

  useEffect(() => {
    const data = {
      myInformation: {
        disponibility: "Disponible para trabajar",
        name: "Luis Mula Márquez",
        description:
          "Desarrollador Full Stack · React · Spring Boot · TypeScript · Java · Angular · PHP",
        icon: "LM",
        experience: "2+",
        tecnologies: "5+",
        proyects: "1",
        cv: "",
        github: "https://github.com/luismm2006",
        linkedin:
          "https://www.linkedin.com/in/luis-mula-márquez-73514a347/",
      },
      navbar: {
        aboutMy: "Sobre mí",
        skills: "Skills",
        experience: "Experiencia",
        proyects: "Proyectos",
        contact: "Contacto",
      },
      aboutMe: {
        title: "Sobre mí",
        description:
          "Desarrollador Full Stack con formación en DAW y experiencia real en CaixaBank Tech. Apasionado por crear interfaces limpias y backends robustos. Busco mi primera oportunidad para seguir creciendo en un equipo con retos reales.",
        location: "Sevilla",
        drivingLicense: "Carnet propio",
        disponibility: "Disponible para trabajar",
      },
      skills: {
        title: "Skills",
        frontend: {
          title: "Frontend",
          tecnologies: ["React", "Angular", "TypeScript", "JavaScript", "HTML", "CSS"],
        },
        backend: {
          title: "Backend",
          tecnologies: ["Java", "Spring Boot", "PHP", "Python"],
        },
        tools: {
          title: "Herramientas",
          tecnologies: ["Git", "Docker", "Oracle", "MySQL", "Postman"],
        },
      },
      experience: {
        title: "Experiencia",
        exp1: {
          date: "Feb 2026 - May 2026",
          title: "Desarrollador Frontend · CaixaBank Tech",
          tools: ["React", "JavaScript", "Git", "Apis Rest"],
        },
        exp2: {
          date: "Abr 2025 – May 2025",
          title: "Desarrollador Full Stack · CaixaBank Tech",
          tools: ["React", "JavaScript", "Spring Boot", "Docker", "Git", "Apis Rest"],
        },
        exp3: {
          date: "Mar 2024 - Jun 2024",
          title: "Soporte TI · Organismo Público Andalucía",
          tools: ["Soporte técnico", "Sistemas", "Videoconferencias"],
        },
      },
      proyects: {
        title: "Proyectos",
        proyect1: {
          title: "Proyecto Final de Grado - ComeLoco",
          image: "",
          description:
            "Aplicación web para la gestión de pedidos en un restaurante, con panel de administración y personalización de productos.",
          tecnologies: [
            "React",
            "Spring Boot",
            "MySQL",
            "Docker",
            "Git",
            "TypeScript",
            "Java",
            "HTML",
            "CSS",
            "Postman",
          ],
        },
      },
      contact: {
        title: "Contacto",
        email: "luismulamarquez@gmail.com",
      },
    };

    setInfo(data);
  }, []);

  return (
    <InformationContext.Provider value={{ info }}>
      {children}
    </InformationContext.Provider>
  );
}