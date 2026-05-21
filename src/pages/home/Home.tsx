import AboutMe from "../../components/aboutMe/aboutMe";
import MyInformation from "../../components/myInformation/myInformation";
import Navbar from "../../components/navbar/navbar";
import "./home.css";

export default function Home() {
  return (
    <>
      <MyInformation />   

      <section className="page-section">
        <Navbar />
        <AboutMe />
      </section>
    </>
  );
}
