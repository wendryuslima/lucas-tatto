import Header from "./_components/header";
import Hero from "./_components/hero";
import About from "./_components/about";
import Works from "./_components/works";
import Depoiments from "./_components/depoiments";
import Contact from "./_components/contact";
import Footer from "./_components/footer";
import WhatsappFloat from "./_components/whatsapp-float";
import { LanguageProvider } from "./_components/language-provider";

const Home = () => {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
};

export default Home;
