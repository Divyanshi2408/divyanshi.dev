import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main>
    
      <section id="home">
        <Hero />
        <About/>
        <Projects/>
        <ContactSection />
    
      </section>
</main>
  );
}
