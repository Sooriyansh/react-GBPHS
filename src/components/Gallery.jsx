// src/components/Gallery/Gallery.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaSearchPlus,
  FaDownload,
  FaShareAlt,
  FaTh,
  FaThLarge
} from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import '../css/Gallery.css'
import school1Img from '../img/school/school1.jpg'
import sideImg from '../img/school/side.jpg'
import gateImg from '../img/school/gate.jpg'
import toiletImg from '../img/school/toilate.jpg'


const categories = [
  { id: 'all', label: 'सभी', labelEn: 'All' },
  { id: 'school', label: 'स्कूल', labelEn: 'School' },
  { id: 'classroom', label: 'कक्षा', labelEn: 'Classroom' },
  { id: 'sports', label: 'खेल', labelEn: 'Sports' },
  { id: 'events', label: 'कार्यक्रम', labelEn: 'Events' },
  { id: 'lab', label: 'प्रयोगशाला', labelEn: 'Lab' }
]

const galleryImages = [
  {
    id: 1,
    src: school1Img,
    thumb: school1Img,
    title: 'स्कूल भवन',
    titleEn: 'School Building',
    category: 'school',
    size: 'large'
  },
  {
    id: 2,
    src: sideImg,
    thumb: sideImg,
    title: 'पुस्तकालय',
    titleEn: 'Library',
    category: 'school',
    size: 'medium'
  },
  {
    id: 3,
    src: gateImg,
    thumb: gateImg,
    title: 'कक्षा में पढ़ाई',
    titleEn: 'Classroom Learning',
    category: 'classroom',
    size: 'medium'
  },
  {
    id: 4,
    src: toiletImg,
    thumb: toiletImg,
    title: 'कंप्यूटर लैब',
    titleEn: 'Computer Lab',
    category: 'lab',
    size: 'small'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
    thumb: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400',
    title: 'खेल का मैदान',
    titleEn: 'Playground',
    category: 'sports',
    size: 'large'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800',
    thumb: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400',
    title: 'विज्ञान प्रयोगशाला',
    titleEn: 'Science Lab',
    category: 'lab',
    size: 'medium'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
    thumb: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
    title: 'सभागार',
    titleEn: 'Auditorium',
    category: 'events',
    size: 'small'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800',
    thumb: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400',
    title: 'वार्षिक उत्सव',
    titleEn: 'Annual Function',
    category: 'events',
    size: 'large'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800',
    thumb: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400',
    title: 'स्मार्ट क्लास',
    titleEn: 'Smart Class',
    category: 'classroom',
    size: 'small'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?w=800',
    thumb: 'https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?w=400',
    title: 'क्रिकेट मैदान',
    titleEn: 'Cricket Ground',
    category: 'sports',
    size: 'medium'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    thumb: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
    title: 'छात्र गतिविधि',
    titleEn: 'Student Activity',
    category: 'events',
    size: 'medium'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    thumb: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
    title: 'प्रवेश द्वार',
    titleEn: 'Main Gate',
    category: 'school',
    size: 'small'
  }
]


const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  const current = images[currentIndex]

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  const touchStart = useRef(null)
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e) => {
    if (!touchStart.current) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (diff > 60) onNext()
    if (diff < -60) onPrev()
    touchStart.current = null
  }

  if (!current) return null

  return (
    <div
      className="lb-overlay"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button className="lb-close" onClick={onClose}>
        <FaTimes />
      </button>

      <div className="lb-counter">
        <span className="lb-current">
          {String(currentIndex + 1).padStart(2, '0')}
        </span>
        <span className="lb-sep">/</span>
        <span className="lb-total">
          {String(images.length).padStart(2, '0')}
        </span>
      </div>

      <button
        className="lb-nav lb-prev"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
      >
        <FaChevronLeft />
      </button>
      <button
        className="lb-nav lb-next"
        onClick={(e) => { e.stopPropagation(); onNext() }}
      >
        <FaChevronRight />
      </button>

      <div className="lb-image-wrap" onClick={(e) => e.stopPropagation()}>
        <img
          src={current.src}
          alt={current.titleEn}
          className="lb-image"
        />

        <div className="lb-info">
          <h3 className="lb-info-title">{current.title}</h3>
          <p className="lb-info-en">{current.titleEn}</p>
        </div>
      </div>

      <div className="lb-thumbs" onClick={(e) => e.stopPropagation()}>
        {images.map((img, i) => (
          <button
            key={img.id}
            className={`lb-thumb ${i === currentIndex ? 'lb-thumb-active' : ''}`}
            onClick={() => {
              const event = new CustomEvent('lbJump', { detail: i })
              window.dispatchEvent(event)
            }}
          >
            <img src={img.thumb} alt="" />
          </button>
        ))}
      </div>

      <div className="lb-progress">
        <div
          className="lb-progress-fill"
          style={{
            width: `${((currentIndex + 1) / images.length) * 100}%`
          }}
        />
      </div>
    </div>
  )
}


const ImageCard = ({ image, index, onClick }) => {
  const cardRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`gl-card gl-${image.size} ${isVisible ? 'gl-card-visible' : ''}`}
      style={{ animationDelay: `${index * 0.08}s` }}
      onClick={() => onClick(index)}
    >
      {/* Image Skeleton */}
      {!loaded && (
        <div className="gl-skeleton">
          <div className="gl-skeleton-shimmer" />
        </div>
      )}

      {/* Image */}
      <img
        src={image.thumb}
        alt={image.titleEn}
        className={`gl-img ${loaded ? 'gl-img-loaded' : ''}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          if (e.currentTarget.src !== image.src) {
            e.currentTarget.src = image.src
            return
          }
          setLoaded(true)
        }}
      />

      {/* Overlay */}
      <div className="gl-overlay">
        {/* Corner borders */}
        <i className="gl-corner gl-tl" />
        <i className="gl-corner gl-tr" />
        <i className="gl-corner gl-bl" />
        <i className="gl-corner gl-br" />

        {/* Zoom icon */}
        <div className="gl-zoom-icon">
          <FaSearchPlus />
        </div>

        {/* Info */}
        <div className="gl-card-info">
          <h4 className="gl-card-title">{image.title}</h4>
          <p className="gl-card-en">{image.titleEn}</p>
        </div>

        {/* Category badge */}
        <span className="gl-card-badge">
          {categories.find((c) => c.id === image.category)?.label}
        </span>

        {/* Number */}
        <span className="gl-card-num">
          {String(image.id).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [gridStyle, setGridStyle] = useState('masonry') // masonry | grid
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // Section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Lightbox jump handler
  useEffect(() => {
    const handler = (e) => setLightboxIndex(e.detail)
    window.addEventListener('lbJump', handler)
    return () => window.removeEventListener('lbJump', handler)
  }, [])

  // Filtered images
  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  // Lightbox handlers
  const openLightbox = useCallback((index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
  }, [])

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    )
  }, [filteredImages.length])

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    )
  }, [filteredImages.length])

  return (
    <section
      className={`gallery-section ${isVisible ? 'gallery-visible' : ''}`}
      ref={sectionRef}
      id="gallery"
    >
      {/* ── Ambient ── */}
      <div className="gl-ambient">
        <div className="gl-orb gl-orb1" />
        <div className="gl-orb gl-orb2" />
        <div className="gl-grid-bg" />
      </div>

      {/* ── Header ── */}
      <div className="gl-header">
        <span className="gl-badge">
          <HiSparkles /> फोटो गैलरी <HiSparkles />
        </span>
        <h2 className="gl-title">
          <span className="gl-title-hi">हमारी गैलरी</span>
          <span className="gl-title-en">Our Gallery</span>
        </h2>
        <div className="gl-title-rule">
          <span className="gl-rule-line" />
          <span className="gl-rule-icon">📸</span>
          <span className="gl-rule-line" />
        </div>
        <p className="gl-subtitle">
          हमारे स्कूल की खूबसूरत झलकियाँ
        </p>
      </div>

      {/* ── Filter + Grid Toggle ── */}
      <div className="gl-toolbar">
        {/* Category Filters */}
        <div className="gl-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`gl-filter-btn ${
                activeCategory === cat.id ? 'gl-filter-active' : ''
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="gl-filter-hi">{cat.label}</span>
              <span className="gl-filter-en">{cat.labelEn}</span>
            </button>
          ))}
        </div>

        {/* Grid Toggle */}
        <div className="gl-grid-toggle">
          <button
            className={`gl-toggle-btn ${
              gridStyle === 'masonry' ? 'gl-toggle-active' : ''
            }`}
            onClick={() => setGridStyle('masonry')}
            title="Masonry"
          >
            <FaTh />
          </button>
          <button
            className={`gl-toggle-btn ${
              gridStyle === 'grid' ? 'gl-toggle-active' : ''
            }`}
            onClick={() => setGridStyle('grid')}
            title="Grid"
          >
            <FaThLarge />
          </button>
        </div>
      </div>

      {/* ── Image Count ── */}
      <div className="gl-count">
        <span className="gl-count-num">{filteredImages.length}</span>
        <span className="gl-count-text">
          {activeCategory === 'all' ? 'तस्वीरें' : `${
            categories.find((c) => c.id === activeCategory)?.label
          } की तस्वीरें`}
        </span>
      </div>

      {/* ── Gallery Grid ── */}
      <div className={`gl-gallery gl-${gridStyle}`}>
        {filteredImages.map((image, index) => (
          <ImageCard
            key={image.id}
            image={image}
            index={index}
            onClick={openLightbox}
          />
        ))}

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="gl-empty">
            <span className="gl-empty-icon">📷</span>
            <p>इस श्रेणी में कोई तस्वीर नहीं है</p>
          </div>
        )}
      </div>

      {/* ── Bottom Decoration ── */}
      <div className="gl-bottom-decor">
        <span className="gl-dec-line" />
        <span className="gl-dec-diamond">◆</span>
        <span className="gl-dec-line" />
      </div>

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}

export default Gallery
