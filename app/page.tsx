import Header from "./_components/header";
import Hero from "./_components/hero";
import About from "./_components/about";
import Works from "./_components/works";
import Depoiments from "./_components/depoiments";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Works />
        <Depoiments />
      </main>
    </>
  );
};

export default Home;
