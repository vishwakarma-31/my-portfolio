import Hero from './components/sections/Hero';
import Story from './components/sections/Story';
import Experience from './components/sections/Experience';
import Work from './components/sections/Work';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <>
      {/* 1. Hero — zoom into laptop screen on scroll */}
      <Hero />

      {/* 2. Portfolio flow begins after the zoom */}
      <Story />
      <Experience />
      <Work />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}
