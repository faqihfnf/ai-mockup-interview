import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import PlusPoint from "./_components/PlusPoint";
import Footer from "./_components/Footer";
import Faq from "./_components/Faq";
import About from "./_components/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PlusPoint />
      <About />
      <Faq />
      <Footer />
    </div>
  );
}
