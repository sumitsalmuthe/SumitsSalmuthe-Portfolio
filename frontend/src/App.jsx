import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Sidebar />

      <Layout>

        <Header />

        <Hero />

      </Layout>

    </>
  );
}

export default App;