import React, { useEffect, useRef, useState } from 'react'
import './HorizontalGallery.css'
import mirchiImg from '../img/mirchi.webp'
import nikitaImg from '../img/nikita-didi.webp'
import aadiImg from '../img/aadi.jpg'
import anishiImg from '../img/anishi-sahu.jpg'
import akritiImg from '../img/my-jaan.jpg'
import deepaliImg from '../img/dpi.jpg'
import khushboImg from '../img/didi.jpg'
import anjaliImg from '../img/angali.jpg'
import dishaImg from '../img/kutti.jpg'
import khushiImg from '../img/khusbhi-kori.jpg'
import rahulImg from '../img/rahul-kori.jpg'
import abhijeetImg from '../img/abhijeet.jpg'
import pranavImg from '../img/pranav.jpg'

const galleryImages = [
  { id: 1, src: mirchiImg, title: 'ANKITA KIRAR', titleEn: '2022-2023', desc: 'Percentage: 90.6%' },
  { id: 2, src: nikitaImg, title: 'NIKITA PATEL', titleEn: '2022-2023', desc: 'Percentage: 90.2%' },
  { id: 3, src: aadiImg, title: 'ADITYA PATEL', titleEn: '2022-2023', desc: 'Percentage: 87.6%' },
  { id: 4, src: anishiImg, title: 'ANISHI SAHU', titleEn: '2022-2023', desc: 'Percentage: 87%' },
  { id: 5, src: akritiImg, title: 'AKRITI', titleEn: '2022-2023', desc: 'Percentage: 84.6%' },
  { id: 6, src: deepaliImg, title: 'DEEPALI PATEL', titleEn: '2022-2023', desc: 'Percentage: 85.6%' },
  { id: 7, src: khushboImg, title: 'KHUSHBO NAMDEV', titleEn: '2022-2023', desc: 'Percentage: 83.6%' },
  { id: 8, src: anjaliImg, title: 'ANJALI PATEL', titleEn: '2022-2023', desc: 'Percentage: 82%' },
  { id: 9, src: dishaImg, title: 'DISHA TIWARI', titleEn: '2022-2023', desc: 'Percentage: 82.2%' },
  { id: 10, src: khushiImg, title: 'KHUSHI BUNKAR', titleEn: '2022-2023', desc: 'Percentage: 82%' },
  { id: 11, src: rahulImg, title: 'RAHUL KORI', titleEn: '2022-2023', desc: 'Percentage: 87%' },
  { id: 12, src: abhijeetImg, title: 'ABHIJEET PATEL', titleEn: '2023-2028', desc: 'Percentage: 96.4%' },
  { id: 13, src: pranavImg, title: 'PRANAV PATEL', titleEn: '2023-2024', desc: 'Percentage: 94.4%' },
]

const HorizontalGallery = () => {
  const sectionRef = useRef(null)
  const trackContainerRef = useRef(null)
  const trackRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const [touchedIndex, setTouchedIndex] = useState(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(hover: none), (pointer: coarse)')
    const updateTouchMode = () => setIsTouchDevice(media.matches)
    updateTouchMode()
    media.addEventListener('change', updateTouchMode)
    return () => media.removeEventListener('change', updateTouchMode)
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    const container = trackContainerRef.current
    const track = trackRef.current
    if (!section || !track || !container) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const windowH = window.innerHeight
      const sectionH = section.offsetHeight
      const scrollable = sectionH - windowH

      if (rect.top <= 0 && rect.bottom >= windowH) {
        setIsInView(true)
        const scrolled = -rect.top
        const progress = Math.max(0, Math.min(1, scrolled / scrollable))
        setScrollProgress(progress)

        const totalCards = galleryImages.length
        const idx = Math.floor(progress * totalCards)
        setActiveIndex(Math.min(idx, totalCards - 1))

        const trackWidth = Math.max(track.scrollWidth - container.clientWidth, 0)
        track.style.transform = `translateX(-${progress * trackWidth}px)`
      } else {
        setIsInView(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hgallery-section" ref={sectionRef}>
      <div className="hg-ambient">
        <div className="hg-orb hg-orb1" />
        <div className="hg-orb hg-orb2" />
        <div className="hg-orb hg-orb3" />
        <div className="hg-grid-bg" />
      </div>

      <div className="hgallery-sticky">
        <div className="hg-header">
          <span className="hg-badge">Top Students</span>
          <h2 className="hg-title">
            <span className="hg-title-hi">Student Gallery</span>
            <span className="hg-title-en">Session Highlights</span>
          </h2>
          <div className="hg-title-rule">
            <span className="hg-rule-line" />
            <span className="hg-rule-diamond">?</span>
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
                  if (!isTouchDevice) return
                  setTouchedIndex((prev) => (prev === index ? null : index))
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
                  <p className="hg-card-title-en">Session: {img.titleEn}</p>
                  <span className="hg-card-divider">
                    <i className="hg-mini-diamond" />
                  </span>
                  <p className="hg-card-desc">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hg-dots">
          {galleryImages.map((_, i) => (
            <span key={i} className={`hg-dot ${i === activeIndex ? 'hg-dot-active' : ''}`} />
          ))}
        </div>

        <div className={`hg-scroll-hint ${isInView ? 'hg-hint-visible' : ''}`}>
          <span className="hg-hint-arrow">?</span>
          <span className="hg-hint-text">Scroll karein</span>
        </div>
      </div>
    </section>
  )
}

export default HorizontalGallery
