import { useEffect, useRef, useState } from 'react';
import '../css/Hero.css';
import sideImg from '../img/school/side.jpg';
import schoolImg from '../img/school/school1.jpg';
import gateImg from '../img/school/gate.jpg';
import toiletImg from '../img/school/toilate.jpg';

const sliderImages = [
  { src: sideImg, alt: 'School campus side view' },
  { src: schoolImg, alt: 'Gyan Bhoomi school campus' },
  { src: gateImg, alt: 'Main gate of Gyan Bhoomi School' },
  { src: toiletImg, alt: 'Student facility area' },
];

const stats = [
  { count: 2000, label: 'Students Enrolled' },
  { count: 30, label: 'Expert Teachers' },
  { count: 95, label: 'Academic Success Rate' },
];

function useCountUp(target, started) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!started) return undefined;

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
    if (!el) return undefined;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

  const scrollTo = (targetId) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderHeroVisual = () => (
    <div className="school-hero__visual" aria-hidden="true">
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
          <span className="school-hero__card-tag">Gyan Bhoomi Higher Secondary School, Dobhi</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="home" className="school-hero" aria-labelledby="hero-title">
      <div className="school-hero__corner school-hero__corner--tl" />
      <div className="school-hero__corner school-hero__corner--br" />
      <div className="school-hero__glow" />

      <div className="school-hero__content">
        <p className="school-hero__eyebrow">Gyan Bhoomi Higher Secondary School, Dobhi</p>

        <h1 id="hero-title" className="school-hero__title">
          WELCOME TO
          <br />
          <em>GYAN BHOOMI</em>
          <br />
          SCHOOL DOBHI
        </h1>

        <p className="school-hero__highlights">Academic Excellence | Holistic Development | Strong Values</p>

        <p className="school-hero__description">
          Gyan Bhoomi School Dobhi is committed to quality education, disciplined learning, and all-round student
          growth with experienced teachers, modern facilities, and a values-driven environment.
        </p>

        {isMobile && renderHeroVisual()}

        <div className="school-hero__actions">
          <a
            href="#highlights"
            className="btn-copper hoverable"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('highlights');
            }}
          >
            Explore Highlights
          </a>

          <a
            href="#contact"
            className="btn-outline-copper hoverable"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('contact');
            }}
          >
            Contact Us
          </a>
        </div>

        <div className="school-hero__stats" ref={statsRef}>
          {stats.map((item) => (
            <StatItem key={item.label} {...item} started={countStarted} />
          ))}
        </div>
      </div>

      {!isMobile && renderHeroVisual()}
    </section>
  );
}
