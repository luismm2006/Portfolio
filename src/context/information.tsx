import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import Imagen_Proyecto_ComeLoco from "../assets/Imagen Proyecto ComeLoco.png";
import Imagen_Proyecto_Portfolio from "../assets/Imagen Proyecto Portfolio.png";
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
          "React · Spring Boot · TypeScript · Java · Angular · PHP",
        icon: "LM",
        experience: "+6",
        tecnologies: "+22",
        proyects: "1",
        cv: "/Curriculum Luis Mula Márquez.pdf",
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
        exp : [
          {
            date: "Feb 2026 - May 2026",
            title: "Desarrollador Frontend · CaixaBank Tech",
            tools: ["React", "JavaScript", "Git", "Apis Rest"],
          },
          {
            date: "Abr 2025 – May 2025",
            title: "Desarrollador Full Stack · CaixaBank Tech",
            tools: ["React", "JavaScript", "Spring Boot", "Docker", "Git", "Apis Rest"],
          },
          {
            date: "Mar 2024 - Jun 2024",
            title: "Soporte TI · Organismo Público Andalucía",
            tools: ["Soporte técnico", "Sistemas", "Videoconferencias"],
          }
        ]
      },
      proyects: {
      title: "Proyectos",
      proyects: [
        {
          title: "Proyecto Final de Grado - ComeLoco",
          image: Imagen_Proyecto_ComeLoco,
          description:
            "Aplicación web para la gestión de pedidos en un restaurante, con panel de administración y personalización de productos.",
          tecnologies: {
            frontend: {
              title: "Frontend",
              items: ["React", "CSS", "HTML", "TypeScript"]
            },
            backend: {
              title: "Backend",
              items: ["Spring Boot", "Java"]
            },
            database: {
              title: "Base de Datos",
              items: ["MySQL"]
            },
            tools: {
              title: "Herramientas",
              items: ["Docker", "GitHub", "Postman", "Vercel", "Render", "Aiven"]
            }
          },
          deployment : {
            title: "Despliegue aplicación",
            app: "https://proyecto-final-lmm-front-end.vercel.app",
            github: {
              frontend : {
                title: "Repositorio Frontend",
                url: "https://github.com/luismm2006/ProyectoFinalLMMFrontEnd",
              },
              backend : {
                title: "Repositorio Backend",
                url: "https://github.com/luismm2006/ProyectoFinalLMMBackEnd",
              }
            }
          }
        },
        {
          title: "Proyecto Portfolio Personal",
          image: Imagen_Proyecto_Portfolio,
          description: "Portfolio personal desarrollado con React y TypeScript, diseñado para mostrar mi experiencia, habilidades y proyectos de manera profesional y atractiva.",
          tecnologies: {
            frontend: {
              title: "Frontend",
              items: ["React", "TypeScript", "CSS", "HTML"]
            },
            backend: {
              title: "Backend",
              items: []
            },
            database: {
              title: "Base de Datos",
              items: []
            },
            tools: {
              title: "Herramientas",
              items: ["GitHub", "Vercel"]
            }
          },
          deployment : {
            title: "Despliegue aplicación",
            app: "a",
            github: {
              frontend : {
                title: "Repositorio Frontend",
                url: "a",
              },
              backend : {
                title: "",
                url: "",
              }
            }
          }
        }
      ]
    },

      contact: {
        title: "Contacto",
        email: "luismula06@gmail.com",
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