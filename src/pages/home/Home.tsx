import AboutMe from "../../components/aboutMe/aboutMe";
import Experience from "../../components/experience/experience";
import MyInformation from "../../components/myInformation/myInformation";
import Navbar from "../../components/navbar/navbar";
import Skills from "../../components/skills/skills";
import "./home.css";

export default function Home() {
  return (
    <>
      <MyInformation />   

      <section className="page-section">
        <Navbar />
        <AboutMe />
        <Skills />
        <Experience />
      </section>
    </>
  );
}
