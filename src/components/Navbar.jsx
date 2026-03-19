import { useEffect, useState } from 'react';
import '../css/Navbar.css';

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About School', id: 'projects' },
  { label: 'Top Students', id: 'skills' },
  { label: 'Contact Us', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Primary navigation">
      <div className="nav-logo">
        Gyan <em>Bhoomi</em>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link.id}>
            <button className="nav-btn hoverable" onClick={() => scrollTo(link.id)}>
              {link.label}
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
