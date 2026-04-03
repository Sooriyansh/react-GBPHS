import './css/globals.css';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import OrnamentDivider from './components/OrnamentDivider';
import HorizontalGallery from './components/HorizontalGallery';
import ContactUs from './components/ContactUs';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Cursor />
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <OrnamentDivider />
        <Projects />
        <OrnamentDivider />
        <HorizontalGallery />
        <OrnamentDivider />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
