import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main>
    
      <section id="home">
        <Hero />
        <About/>
        <Projects/>
      </section>
</main>
  );
}
