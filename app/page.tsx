import Header from "./_components/header";
import Hero from "./_components/hero";
import About from "./_components/about";
import Works from "./_components/works";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Works />
      </main>
    </>
  );
};

export default Home;
