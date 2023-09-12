import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Skill from "./components/Skill";
import Papers from "./components/Papers";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <section style={{ backgroundColor: "#ecf0f1" }}>
        <Header />
        <Intro />
        <About />
        <Skill />
        <Papers />
        <Projects />
        <Certifications />
        <Footer />
      </section>
    </div>
  );
};

export default App;
