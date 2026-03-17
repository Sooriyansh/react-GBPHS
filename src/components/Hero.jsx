import { useEffect, useRef, useState } from 'react';
import '../css/Hero.css';
import sideImg from '../img/school/side.jpg';
import schoolImg from '../img/school/school1.jpg';
import gateImg from '../img/school/gate.jpg';
import toiletImg from '../img/school/toilate.jpg';

const sliderImages = [
  { src: sideImg, alt: 'Classroom' },
  { src: schoolImg, alt: 'School Campus' },
  { src: gateImg, alt: 'School Gate' },
  { src: toiletImg, alt: 'School Facility' }
];

const stats = [
  { count: 2000, label: 'Students Enrolled' },
  { count: 30, label: 'Expert Teachers' },
  { count: 95, label: 'Success Rate' },
];

function useCountUp(target, started) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!started) return;

    let n = 0;
    const step = target / 55;

    const id = setInterval(() => {
      n += step;
      if (n >= target) {
        n = target;
        clearInterval(id);
      }
      setVal(Math.floor(n));
    }, 20);

    return () => clearInterval(id);
  }, [started, target]);

  return val;
}

function StatItem({ count, label, started }) {
  const val = useCountUp(count, started);

  return (
    <div className="school-hero__stat-item">
      <span className="school-hero__stat-num">{val}+</span>
      <span className="school-hero__stat-label">{label}</span>
    </div>
  );
}

export default function Hero() {
  const [countStarted, setCountStarted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setCountStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const sliderId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 2000);

    return () => clearInterval(sliderId);
  }, []);

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth <= 900);
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const renderHeroVisual = () => (
    <div className="school-hero__visual">
      <div className="school-hero__card">
        <div className="school-hero__card-border" />
        <div className="school-hero__card-offset" />
        <div className="school-hero__card-content">
          <span className="school-hero__monogram">
            <span className="school-hero__slider">
              {sliderImages.map((slide, index) => (
                <img
                  key={slide.alt}
                  src={slide.src}
                  alt={slide.alt}
                  className={`school-hero__card-image ${currentSlide === index ? 'is-active' : ''}`}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </span>
          </span>
          <span className="school-hero__divider-line" />
          <span className="school-hero__card-tag">Gyan Bhoomi School Dobhi</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="home" className="school-hero">
      <div className="school-hero__corner school-hero__corner--tl" />
      <div className="school-hero__corner school-hero__corner--br" />
      <div className="school-hero__glow" />

      <div className="school-hero__content">
        <p className="school-hero__eyebrow">Gyan Bhoomi Higher Secondary School Dobhi</p>

        <h1 className="school-hero__title">
          WELCOME TO
          <br />
          <em>GYAN BHOOMI</em>
          <br />
          SCHOOL DOBHI
        </h1>

        <p className="school-hero__highlights">Academic Excellence � Holistic Development � Strong Values</p>

        <p className="school-hero__description">
          Gyan Bhoomi School Dobhi is dedicated to providing high-quality education and nurturing future leaders through
          academic excellence, holistic development, and strong moral values.
        </p>

        {isMobile && renderHeroVisual()}

        <div className="school-hero__actions">
          <a
            href="#projects"
            className="btn-copper hoverable"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Our School
          </a>

          <a
            href="#contact"
            className="btn-outline-copper hoverable"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Us
          </a>
        </div>

        <div className="school-hero__stats" ref={statsRef}>
          {stats.map((s) => (
            <StatItem key={s.label} {...s} started={countStarted} />
          ))}
        </div>
      </div>

      {!isMobile && renderHeroVisual()}
    </section>
  );
}
