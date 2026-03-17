import { useEffect, useState } from 'react';
import '../css/Navbar.css';

const links = ['Home', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Primary navigation">
      <div className="nav-logo">
        Gyan <em>Bhoomi</em>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l}>
            <button className="nav-btn hoverable" onClick={() => scrollTo(l)}>
              {l}
            </button>
          </li>
        ))}
      </ul>

      <button
        className={`hamburger hoverable ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
