import React, { useEffect, useRef, useState } from 'react';
import '../css/HorizontalGallery.css';
import mirchiImg from '../img/mirchi.webp';
import nikitaImg from '../img/nikita-didi.webp';
import aadiImg from '../img/aadi.jpg';
import anishiImg from '../img/anishi-sahu.jpg';
import deepaliImg from '../img/dpi.jpg';
import khushboImg from '../img/didi.jpg';
import anjaliImg from '../img/angali.jpg';
import dishaImg from '../img/kutti.jpg';
import khushiImg from '../img/khusbhi-kori.jpg';
import rahulImg from '../img/rahul-kori.jpg';

const galleryImages = [
  { id: 1, src: aadiImg, title: 'Aditya Patel', session: '2022-2023', desc: 'Percentage: 87.6%' },
  { id: 2, src: mirchiImg, title: 'Ankita Kirar', session: '2022-2023', desc: 'Percentage: 90.6%' },
  { id: 3, src: nikitaImg, title: 'Nikita Patel', session: '2022-2023', desc: 'Percentage: 90.2%' },
  { id: 4, src: anishiImg, title: 'Anishi Sahu', session: '2022-2023', desc: 'Percentage: 87%' },
  { id: 5, src: deepaliImg, title: 'Deepali Patel', session: '2022-2023', desc: 'Percentage: 85.6%' },
  { id: 6, src: khushboImg, title: 'Khushbo Namdev', session: '2022-2023', desc: 'Percentage: 83.6%' },
  { id: 7, src: anjaliImg, title: 'Anjali Patel', session: '2022-2023', desc: 'Percentage: 82%' },
  { id: 8, src: dishaImg, title: 'Disha Tiwari', session: '2022-2023', desc: 'Percentage: 82.2%' },
  { id: 9, src: khushiImg, title: 'Khushi Bunkar', session: '2022-2023', desc: 'Percentage: 82%' },
];

const HorizontalGallery = () => {
  const sectionRef = useRef(null);
  const trackContainerRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [touchedIndex, setTouchedIndex] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isCompactLayout, setIsCompactLayout] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(hover: none), (pointer: coarse)');
    const updateTouchMode = () => setIsTouchDevice(media.matches);
    updateTouchMode();
    media.addEventListener('change', updateTouchMode);
    return () => media.removeEventListener('change', updateTouchMode);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');
    const updateLayoutMode = () => setIsCompactLayout(media.matches);
    updateLayoutMode();
    media.addEventListener('change', updateLayoutMode);
    return () => media.removeEventListener('change', updateLayoutMode);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const container = trackContainerRef.current;
    const track = trackRef.current;
    if (!section || !track || !container) return undefined;

    if (isCompactLayout) {
      section.style.height = 'auto';
      track.style.transform = 'translateX(0)';
      setScrollProgress(0);
      setActiveIndex(0);
      setIsInView(false);
      return undefined;
    }

    const getDesktopTravelDistance = () => {
      const lastCard = track.lastElementChild;
      if (!lastCard) return 0;
      return Math.max(lastCard.offsetLeft + lastCard.clientWidth - container.clientWidth, 0);
    };

    const syncDesktopSectionHeight = () => {
      const horizontalDistance = getDesktopTravelDistance();
      section.style.height = `${window.innerHeight + horizontalDistance}px`;
    };

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const sectionH = section.offsetHeight;
      const scrollable = Math.max(sectionH - windowH, 1);

      if (rect.top <= 0 && rect.bottom >= windowH) {
        setIsInView(true);
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / scrollable));
        setScrollProgress(progress);

        const totalCards = galleryImages.length;
        const idx = Math.floor(progress * totalCards);
        setActiveIndex(Math.min(idx, totalCards - 1));

        const trackWidth = getDesktopTravelDistance();
        track.style.transform = `translateX(-${progress * trackWidth}px)`;
      } else if (rect.top > 0) {
        setScrollProgress(0);
        setActiveIndex(0);
        track.style.transform = 'translateX(0)';
        setIsInView(false);
      } else {
        setScrollProgress(1);
        setActiveIndex(galleryImages.length - 1);
        const trackWidth = getDesktopTravelDistance();
        track.style.transform = `translateX(-${trackWidth}px)`;
        setIsInView(false);
      }
    };

    syncDesktopSectionHeight();
    window.addEventListener('resize', syncDesktopSectionHeight);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('resize', syncDesktopSectionHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isCompactLayout]);

  useEffect(() => {
    const container = trackContainerRef.current;
    if (!container || !isCompactLayout) return undefined;

    const handleContainerScroll = () => {
      const maxScroll = Math.max(container.scrollWidth - container.clientWidth, 0);
      const progress = maxScroll > 0 ? container.scrollLeft / maxScroll : 0;
      const totalCards = galleryImages.length;
      const idx = Math.round(progress * (totalCards - 1));

      setScrollProgress(progress);
      setActiveIndex(Math.min(idx, totalCards - 1));
    };

    handleContainerScroll();
    container.addEventListener('scroll', handleContainerScroll, { passive: true });

    return () => container.removeEventListener('scroll', handleContainerScroll);
  }, [isCompactLayout]);

  return (
    <section id="achievers" className="hgallery-section" ref={sectionRef} aria-labelledby="achievers-title">
      <div className="hg-ambient">
        <div className="hg-orb hg-orb1" />
        <div className="hg-orb hg-orb2" />
        <div className="hg-orb hg-orb3" />
        <div className="hg-grid-bg" />
      </div>

      <div className="hgallery-sticky">
        <div className="hg-header">
          <span className="hg-badge">Top Students</span>
          <h2 id="achievers-title" className="hg-title">
            <span className="hg-title-hi">Student Achievers</span>
            <span className="hg-title-en">Session Highlights</span>
          </h2>
          <div className="hg-title-rule">
            <span className="hg-rule-line" />
            <span className="hg-rule-diamond">*</span>
            <span className="hg-rule-line" />
          </div>
        </div>

        <div className="hg-progress-wrapper">
          <div className="hg-progress-track">
            <div className="hg-progress-fill" style={{ transform: `scaleX(${scrollProgress})` }} />
          </div>
          <span className="hg-progress-count">
            {String(activeIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
          </span>
        </div>

        <div className="hg-track-container" ref={trackContainerRef}>
          <div className="hg-track" ref={trackRef}>
            {galleryImages.map((img, index) => (
              <div
                className={`hg-card ${index === activeIndex ? 'hg-card-active' : ''} ${
                  touchedIndex === index ? 'hg-card-touched' : ''
                }`}
                key={img.id}
                onClick={() => {
                  if (!isTouchDevice) return;
                  setTouchedIndex((prev) => (prev === index ? null : index));
                }}
              >
                <span className="hg-card-num">{String(img.id).padStart(2, '0')}</span>

                <div className="hg-card-img-wrap">
                  <img src={img.src} alt={img.title} className="hg-card-img" loading="lazy" />
                  <div className="hg-card-img-overlay" />

                  <i className="hg-corner hg-tl" />
                  <i className="hg-corner hg-tr" />
                  <i className="hg-corner hg-bl" />
                  <i className="hg-corner hg-br" />
                </div>

                <div className="hg-card-text">
                  <h3 className="hg-card-title">{img.title}</h3>
                  <p className="hg-card-title-en">Session: {img.session}</p>
                  <span className="hg-card-divider">
                    <i className="hg-mini-diamond" />
                  </span>
                  <p className="hg-card-desc">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hg-dots" aria-hidden="true">
          {galleryImages.map((_, i) => (
            <span key={i} className={`hg-dot ${i === activeIndex ? 'hg-dot-active' : ''}`} />
          ))}
        </div>

        <div className={`hg-scroll-hint ${isInView ? 'hg-hint-visible' : ''}`}>
          <span className="hg-hint-arrow">&gt;</span>
          <span className="hg-hint-text">Scroll to view more</span>
        </div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
