import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="relative min-h-screen bg-bg-dark">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Grid Overlay */}
      <div className="fixed inset-0 grid-overlay pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Suspense fallback={<LoadingScreen />}>
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
