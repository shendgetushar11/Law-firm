import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import styles from "../src/App.module.css";
import About from "./components/About/About";
import WorkPage from "./components/WorkPage/WorkPage";
import TeamInfo from "./components/TeamInfo/TeamInfo";
import Faq from "./components/FAQ/Faq";
import Newsletter from "./components/NewsLetter/Newsletter";
import Footer from "./components/Footer/Footer";
import WhyChooseUsPage from "./components/WhyChooseUsPage/WhyChooseUsPage";
import Clients from "./components/Clients/Clients";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <>
      <div className={styles.heading}>
        <Navbar islogo={true} />
        <HeroSection />
      </div>
      <div className={styles.body}>
        <About />
        <WhyChooseUsPage />
        <WorkPage />
        <Clients />
        <TeamInfo />
        <Faq />
        <Newsletter />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
