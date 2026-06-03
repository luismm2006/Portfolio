import Navbar from "../../components/navbar/navbar";
import AboutMe from "../../components/aboutMe/aboutMe";
import Experience from "../../components/experience/experience";
import FormContact from "../../components/formContact/formContact";
import MyInformation from "../../components/myInformation/myInformation";
import Proyects from "../../components/proyects/proyects";
import Skills from "../../components/skills/skills";
import "./homePage.css";
import arrowUp from "./hooks/arrowUp";

export default function HomePage() {
  const { showScrollToNav } = arrowUp();

  return (
    <>
      <MyInformation />   
      <section className="page-section">
        <Navbar />
        <div className="two-column-layout">
          <AboutMe />
          <Skills />
        </div>
        <Experience />
        <Proyects />
        <FormContact />
      </section>
      <a
        href="#my-information"
        className={`scroll-to-nav${showScrollToNav ? "" : " hidden"}`}
        aria-label="Ir al inicio"
      >
        ↑
      </a>
    </>
  );
}
