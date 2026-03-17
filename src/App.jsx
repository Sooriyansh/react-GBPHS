import './css/globals.css';
import Cursor          from './components/Cursor';
import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import Projects        from './components/Projects';
import Footer          from './components/Footer';
import OrnamentDivider from './components/OrnamentDivider';
import HorizontalGallery from './components/HorizontalGallery';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';
import StudentPosts from './components/StudentPosts';
export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <OrnamentDivider />
        <OrnamentDivider />
        {/* <Gallery /> */}
        <Projects />
        <OrnamentDivider />
        <HorizontalGallery />
        <ContactUs />
        {/* <StudentPosts />      */}
      </main>
      <Footer />

    </>
  );
}
