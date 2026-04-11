import { useEffect, useState } from 'react';
import '../css/Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', target: 'home' },
  { label: 'Highlights', target: 'highlights' },
  { label: 'Achievers', target: 'achievers' },
  { label: 'Contact', target: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (target) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Primary navigation">
      <button type="button" className="nav-logo" onClick={() => scrollToSection('home')}>
        Gyan <em>Bhoomi</em>
      </button>

      <ul id="primary-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.target}>
            <button className="nav-btn hoverable" onClick={() => scrollToSection(item.target)}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`hamburger hoverable ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
