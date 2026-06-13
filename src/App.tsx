import "./App.css";
import Nav from "./components/nav";
import Experience from "./sections/experience/experience";
import GetInTouch from "./sections/get_in_touch/get_in_touch";
import Home from "./sections/home/home";
import Skills from "./sections/skills/skills";
function App() {

  return (
    <>
      <Nav
        items={{
          items: [
            { text: "Home", url: "#home" },
            { text: "Work Experience", url: "#work_experience" },
            { text: "Skills", url: "#skills" },
            { text: "Get in Touch", url: "#get_in_touch" },
          ]
        }}
      />
      <section className="page" id="home">
        <Home />
      </section>
      <section className="page" id="work_experience">
        <Experience />
      </section>
      <section className="page" id="skills">
        <Skills />
      </section>
      <section className="page" id="get_in_touch">
        <GetInTouch />
      </section>
    </>
  )
}

export default App;
