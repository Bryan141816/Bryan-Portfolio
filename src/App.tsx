import "./App.css";
import Nav from "./components/nav";
import About from "./sections/about";
import Contact from "./sections/contact";
import Home from "./sections/home";
function App() {

  return (
    <>
      <Nav />
      <section id="home" className="min-h-screen">
        <Home />
      </section>

      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </>
  )
}

export default App;
