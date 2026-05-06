import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dial from './components/Dial';

const Profile = lazy(() => import('./components/Profile'));
const Projects = lazy(() => import('./components/Projects'));
const TechStack = lazy(() => import('./components/TechStack'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-bg-base">
      <Navbar />
      <Dial />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Profile />
          <Projects />
          <TechStack />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
