import Header from "./_components/header";
import Hero from "./_components/hero";
import About from "./_components/about";
import Works from "./_components/works";
import Depoiments from "./_components/depoiments";
import Contact from "./_components/contact";
import Footer from "./_components/footer";
import WhatsappFloat from "./_components/whatsapp-float";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Works />
        <Depoiments />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
};

export default Home;
