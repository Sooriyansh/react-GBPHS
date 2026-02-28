import './styles/globals.css';
import Cursor          from './components/Cursor';
import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import Projects        from './components/Projects';
import Footer          from './components/Footer';
import OrnamentDivider from './components/OrnamentDivider';
import HorizontalGallery from './components/HorizontalGallery';
import ContactUs from './components/ContactUs';
export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <OrnamentDivider />
      
      <OrnamentDivider />
      <Projects />
      <OrnamentDivider />
      <HorizontalGallery />
      <ContactUs />
      <Footer />
    </>
  );
}
