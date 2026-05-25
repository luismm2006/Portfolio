# Portfolio — Luis Mula Márquez

Portfolio personal desarrollado en **React + TypeScript**, con toda la información centralizada en un único archivo de contexto (`information.tsx`) distribuido a todos los componentes mediante la **Context API de React**, evitando prop drilling y manteniendo una separación limpia entre datos y presentación.

---

## 📋 Contenido

- [Tecnologías](#tecnologías)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Arquitectura de datos](#arquitectura-de-datos)
- [Secciones](#secciones)
- [Instalación y uso](#instalación-y-uso)
- [Contacto](#contacto)

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| React | Framework principal |
| TypeScript | Tipado estático |
| Context API | Gestión y distribución de datos globales |
| CSS / HTML | Estilos y maquetación |
| Vite | Bundler y entorno de desarrollo |
| Git | Control de versiones |

---

## 📁 Estructura del proyecto

```
portfolio/
├── public/
├── src/
│   ├── assets/             ← Almacenamiento de elementos multimedia
│   ├── components/
│   │   ├── aboutMe/        ← Sección sobre mí
│   │   ├── experience/     ← Timeline de experiencia
│   │   ├── formContact/    ← Formulario de contacto
│   │   ├── myInformation/  ← Hero / cabecera principal
│   │   ├── navbar/         ← Navegación con toggle dark/light
│   │   ├── proyects/       ← Tarjetas de proyectos
│   │   └── skills/         ← Skills agrupados por categoría
│   ├── context/
│   │   └── information.tsx ← Toda la información del portfolio + Context API
│   ├── pages/
│   │   └── Home/           ← Página principal que compone todos los componentes
|   |       └── hooks/      ← Hooks customs para quitar lógica cargante de la página principal
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── README.md
```

---

## 🗂️ Arquitectura de datos

Una de las decisiones de diseño principales de este portfolio es la **centralización de toda la información en un único archivo de contexto** (`src/context/information.tsx`), distribuido globalmente mediante la **Context API de React**.

### ¿Por qué Context API?

- Evita el prop drilling: ningún componente recibe datos que no le corresponden
- Actualizar cualquier dato (experiencia, proyectos, skills) solo requiere modificar `information.tsx`
- Separación clara entre datos y presentación
- Escalar añadiendo nuevas secciones es inmediato

### Flujo de datos

```
information.tsx (Context + Provider)
        │
        ▼
    App.tsx (envuelve todo en el Provider)
        │
        ▼
    pages/Home
        │
        ├── components/myInformation   → useContext → myInformation
        ├── components/navbar          → useContext → navbar
        ├── components/aboutMe         → useContext → aboutMe
        ├── components/skills          → useContext → skills
        ├── components/experience      → useContext → experience
        ├── components/proyects        → useContext → proyects
        └── components/formContact     → useContext → (datos de contacto)
```

### Estructura del contexto

```typescript
const data = {
  myInformation: {
    disponibility: "Disponible para trabajar",
    name: "Luis Mula Márquez",
    description: "Desarrollador Full Stack · React · Spring Boot · TypeScript · Java · Angular · PHP",
    icon: "LM",
    experience: "2+",
    tecnologies: "5+",
    proyects: "1",
    cv: "",
    github: "https://github.com/luismm2006",
    linkedin: "https://www.linkedin.com/in/luis-mula-márquez-73514a347/",
  },
  navbar: { ... },
  aboutMe: { ... },
  skills: {
    frontend: { tecnologies: ["React", "Angular", "TypeScript", "JavaScript", "HTML", "CSS"] },
    backend:  { tecnologies: ["Java", "Spring Boot", "PHP", "Python"] },
    tools:    { tecnologies: ["Git", "Docker", "Oracle", "MySQL", "Postman"] },
  },
  experience: { ... },
  proyects: { ... },
}
```

Para añadir un nuevo proyecto basta con añadir una entrada en `data.proyects` dentro de `information.tsx` y el componente lo renderizará automáticamente.

---

## 📌 Secciones

### myInformation (Hero)
Presentación principal con nombre, descripción, estadísticas (años de experiencia, tecnologías, proyectos) y enlaces a GitHub y LinkedIn.

### navbar
Navegación fija con scroll suave a cada sección y toggle dark/light mode.

### aboutMe
Descripción personal, ubicación, disponibilidad y carnet de conducir.

### skills
Tecnologías agrupadas en tres categorías:
- **Frontend:** React, Angular, TypeScript, JavaScript, HTML, CSS
- **Backend:** Java, Spring Boot, PHP, Python
- **Herramientas:** Git, Docker, Oracle, MySQL, Postman

### experience
Timeline con las tres experiencias profesionales:
- Desarrollador Frontend en CaixaBank Tech *(Feb 2026 – May 2026)*
- Desarrollador Full Stack en CaixaBank Tech *(Abr 2025 – May 2025)*
- Soporte TI en Organismo Público de Andalucía *(Mar 2024 – Jun 2024)*

### proyects
- **ComeLoco** — Proyecto Final de Grado. Aplicación web para la gestión de pedidos en un restaurante, con panel de administración y personalización de productos. Stack: React, Spring Boot, MySQL, Docker, TypeScript, Java.

### formContact
Formulario de contacto con nombre, email y mensaje.

---

## ⚙️ Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/luismm2006/portfolio.git

# Entrar en el directorio
cd portfolio

# Instalar dependencias
npm install

# Iniciar en desarrollo
npm run dev

# Compilar para producción
npm run build
```

---

## 📬 Contacto

**Luis Mula Márquez**
- 📧 luismulamarquez@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/luis-mula-márquez-73514a347/)
- 🐙 [GitHub](https://github.com/luismm2006)
- 📍 Sevilla
