import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Sidebar />

      <Layout>

        <Header />

        <Hero />

        <Projects />

        <Experience />

        <Skills />

        <About />

        <Contact />

        <Footer />

      </Layout>

    </>
  );
}

export default App;