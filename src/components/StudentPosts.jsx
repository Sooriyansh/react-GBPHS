// src/components/StudentPosts/StudentPosts.jsx
import React, { useState, useEffect, useRef } from 'react'
import {
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaSearchPlus,
  FaGraduationCap,
  FaCalendarAlt,
  FaShareAlt,
  FaDownload,
  FaHeart,
  FaExpand
} from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import '../css/StudentPost.css'

/* ══════════════════════════════
   STUDENT POSTS DATA
   
   Yahan apni images add karo
   ══════════════════════════════ */
const studentPosts = [
  {
    id: 1,
    // Apni actual image path use karo:
    // src: '/images/students/class-nursery.jpg',
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    thumb: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
    className: 'नर्सरी',
    classEn: 'Nursery',
    year: '2024-25',
    teacher: 'श्रीमती सुनीता शर्मा',
    studentCount: 28,
    section: 'A',
    category: 'primary'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800',
    thumb: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400',
    className: 'कक्षा 1',
    classEn: 'Class 1',
    year: '2024-25',
    teacher: 'श्रीमती रीना पटेल',
    studentCount: 32,
    section: 'A',
    category: 'primary'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800',
    thumb: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400',
    className: 'कक्षा 2',
    classEn: 'Class 2',
    year: '2024-25',
    teacher: 'श्री राजेश कुमार',
    studentCount: 30,
    section: 'A',
    category: 'primary'
  },
  {
    id: 4,
    src: 'https://images.unsplash6.com/photo-1509062522246-3755977927d7?w=800',
    thumb: 'https://images.unsplash6.com/photo-1509062522246-3755977927d7?w=400',
    className: 'कक्षा 3',
    classEn: 'Class 3',
    year: '2024-25',
    teacher: 'श्रीमती अनीता वर्मा',
    studentCount: 35,
    section: 'A',
    category: 'primary'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
    thumb: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400',
    className: 'कक्षा 4',
    classEn: 'Class 4',
    year: '2024-25',
    teacher: 'श्री महेश त्रिपाठी',
    studentCount: 33,
    section: 'A',
    category: 'middle'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800',
    thumb: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400',
    className: 'कक्षा 5',
    classEn: 'Class 5',
    year: '2024-25',
    teacher: 'श्रीमती प्रिया सिंह',
    studentCount: 31,
    section: 'A',
    category: 'middle'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
    thumb: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
    className: 'कक्षा 6',
    classEn: 'Class 6',
    year: '2024-25',
    teacher: 'श्री अमित शुक्ला',
    studentCount: 36,
    section: 'A',
    category: 'middle'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800',
    thumb: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400',
    className: 'कक्षा 7',
    classEn: 'Class 7',
    year: '2024-25',
    teacher: 'श्रीमती कविता दुबे',
    studentCount: 34,
    section: 'A',
    category: 'middle'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800',
    thumb: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400',
    className: 'कक्षा 8',
    classEn: 'Class 8',
    year: '2024-25',
    teacher: 'श्री संजय पाण्डेय',
    studentCount: 38,
    section: 'A',
    category: 'high'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800',
    thumb: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400',
    className: 'कक्षा 9',
    classEn: 'Class 9',
    year: '2024-25',
    teacher: 'श्री विकास मिश्रा',
    studentCount: 40,
    section: 'A',
    category: 'high'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
    thumb: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400',
    className: 'कक्षा 10',
    classEn: 'Class 10',
    year: '2024-25',
    teacher: 'श्रीमती माधुरी गुप्ता',
    studentCount: 42,
    section: 'A',
    category: 'high'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?w=800',
    thumb: 'https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?w=400',
    className: 'कक्षा 11 (विज्ञान)',
    classEn: 'Class 11 (Science)',
    year: '2024-25',
    teacher: 'श्री रमेश यादव',
    studentCount: 35,
    section: 'A',
    category: 'senior'
  },
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800',
    thumb: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=400',
    className: 'कक्षा 12 (विज्ञान)',
    classEn: 'Class 12 (Science)',
    year: '2024-25',
    teacher: 'श्री दिनेश तिवारी',
    studentCount: 30,
    section: 'A',
    category: 'senior'
  }
]

const filterCategories = [
  { id: 'all', label: 'सभी कक्षाएँ', labelEn: 'All Classes', icon: '🏫' },
  { id: 'primary', label: 'प्राथमिक', labelEn: 'Primary', icon: '🌱' },
  { id: 'middle', label: 'माध्यमिक', labelEn: 'Middle', icon: '📘' },
  { id: 'high', label: 'उच्च', labelEn: 'High', icon: '📗' },
  { id: 'senior', label: 'उच्चतर', labelEn: 'Senior', icon: '🎓' }
]

/* ══════════════════════════════
   LIGHTBOX
   ══════════════════════════════ */
const PostLightbox = ({ posts, currentIndex, onClose, onPrev, onNext, onJump }) => {
  const current = posts[currentIndex]
  const touchStart = useRef(null)

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
      className="sp-lb-overlay"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close */}
      <button className="sp-lb-close" onClick={onClose}>
        <FaTimes />
      </button>

      {/* Counter */}
      <div className="sp-lb-counter">
        <span className="sp-lb-current">{String(currentIndex + 1).padStart(2, '0')}</span>
        <span className="sp-lb-sep">/</span>
        <span className="sp-lb-total">{String(posts.length).padStart(2, '0')}</span>
      </div>

      {/* Nav */}
      <button className="sp-lb-nav sp-lb-prev" onClick={(e) => { e.stopPropagation(); onPrev() }}>
        <FaChevronLeft />
      </button>
      <button className="sp-lb-nav sp-lb-next" onClick={(e) => { e.stopPropagation(); onNext() }}>
        <FaChevronRight />
      </button>

      {/* Main Content */}
      <div className="sp-lb-content" onClick={(e) => e.stopPropagation()}>
        {/* Image */}
        <div className="sp-lb-image-wrap">
          <img src={current.src} alt={current.classEn} className="sp-lb-image" />

          {/* Class badge on image */}
          <div className="sp-lb-class-badge">
            <FaGraduationCap />
            <span>{current.className}</span>
          </div>
        </div>

        {/* Info Panel */}
        <div className="sp-lb-info-panel">
          <div className="sp-lb-info-header">
            <h3 className="sp-lb-class-name">{current.className}</h3>
            <p className="sp-lb-class-en">{current.classEn}</p>
          </div>

          <div className="sp-lb-info-divider" />

          <div className="sp-lb-details">
            <div className="sp-lb-detail-item">
              <FaCalendarAlt className="sp-lb-detail-icon" />
              <div>
                <span className="sp-lb-detail-label">सत्र</span>
                <span className="sp-lb-detail-value">{current.year}</span>
              </div>
            </div>

            <div className="sp-lb-detail-item">
              <FaUsers className="sp-lb-detail-icon" />
              <div>
                <span className="sp-lb-detail-label">छात्र संख्या</span>
                <span className="sp-lb-detail-value">{current.studentCount} छात्र</span>
              </div>
            </div>

            <div className="sp-lb-detail-item">
              <FaGraduationCap className="sp-lb-detail-icon" />
              <div>
                <span className="sp-lb-detail-label">कक्षा अध्यापक</span>
                <span className="sp-lb-detail-value">{current.teacher}</span>
              </div>
            </div>
          </div>

          {/* School watermark */}
          <div className="sp-lb-watermark">
            ज्ञान भूमि पब्लिक स्कूल
          </div>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="sp-lb-thumbs" onClick={(e) => e.stopPropagation()}>
        {posts.map((post, i) => (
          <button
            key={post.id}
            className={`sp-lb-thumb ${i === currentIndex ? 'sp-lb-thumb-active' : ''}`}
            onClick={() => onJump(i)}
          >
            <img src={post.thumb} alt="" />
            <span className="sp-lb-thumb-label">{post.classEn}</span>
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="sp-lb-progress">
        <div
          className="sp-lb-progress-fill"
          style={{ width: `${((currentIndex + 1) / posts.length) * 100}%` }}
        />
      </div>
    </div>
  )
}

/* ══════════════════════════════
   POST CARD
   ══════════════════════════════ */
const PostCard = ({ post, index, onClick }) => {
  const cardRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [liked, setLiked] = useState(false)

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

  const handleShare = (e) => {
    e.stopPropagation()
    if (navigator.share) {
      navigator.share({
        title: `${post.className} - ज्ञान भूमि स्कूल`,
        text: `${post.className} (${post.classEn}) - सत्र ${post.year}`,
        url: window.location.href
      })
    }
  }

  return (
    <div
      ref={cardRef}
      className={`sp-card ${isVisible ? 'sp-card-visible' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* ── Card Top: School Header ── */}
      <div className="sp-card-header">
        <div className="sp-card-school-icon">
          <FaGraduationCap />
        </div>
        <div className="sp-card-school-info">
          <span className="sp-card-school-name">ज्ञान भूमि पब्लिक स्कूल</span>
          <span className="sp-card-year">
            <FaCalendarAlt className="sp-year-icon" />
            सत्र {post.year}
          </span>
        </div>
        <button
          className="sp-card-share-btn"
          onClick={handleShare}
          title="Share"
        >
          <FaShareAlt />
        </button>
      </div>

      {/* ── Image ── */}
      <div className="sp-card-image-wrap" onClick={() => onClick(index)}>
        {/* Skeleton */}
        {!loaded && (
          <div className="sp-skeleton">
            <div className="sp-skeleton-shimmer" />
          </div>
        )}

        <img
          src={post.thumb}
          alt={post.classEn}
          className={`sp-card-img ${loaded ? 'sp-img-loaded' : ''}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />

        {/* Hover Overlay */}
        <div className="sp-card-overlay">
          <div className="sp-overlay-zoom">
            <FaExpand />
            <span>पूरी तस्वीर देखें</span>
          </div>

          {/* Corner decorations */}
          <i className="sp-corner sp-tl" />
          <i className="sp-corner sp-tr" />
          <i className="sp-corner sp-bl" />
          <i className="sp-corner sp-br" />
        </div>

        {/* Class Badge */}
        <div className="sp-class-badge">
          <span className="sp-badge-text">{post.className}</span>
        </div>

        {/* Section Badge */}
        <div className="sp-section-badge">
          Section {post.section}
        </div>
      </div>

      {/* ── Card Footer Info ── */}
      <div className="sp-card-footer">
        {/* Class Name */}
        <div className="sp-footer-title-row">
          <h3 className="sp-footer-class">{post.className}</h3>
          <span className="sp-footer-class-en">{post.classEn}</span>
        </div>

        {/* Divider */}
        <div className="sp-footer-divider">
          <span className="sp-fdiv-line" />
          <span className="sp-fdiv-dot">◆</span>
          <span className="sp-fdiv-line" />
        </div>

        {/* Details Row */}
        <div className="sp-footer-details">
          <div className="sp-detail">
            <FaUsers className="sp-detail-icon" />
            <span>{post.studentCount} छात्र</span>
          </div>
          <div className="sp-detail">
            <FaGraduationCap className="sp-detail-icon" />
            <span>{post.teacher}</span>
          </div>
        </div>

        {/* Action Row */}
        <div className="sp-footer-actions">
          <button
            className={`sp-action-btn sp-like-btn ${liked ? 'sp-liked' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              setLiked(!liked)
            }}
          >
            <FaHeart />
            <span>{liked ? 'पसंद किया' : 'पसंद करें'}</span>
          </button>

          <button
            className="sp-action-btn sp-view-btn"
            onClick={() => onClick(index)}
          >
            <FaSearchPlus />
            <span>देखें</span>
          </button>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════ */
const StudentPosts = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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

  const filteredPosts =
    activeFilter === 'all'
      ? studentPosts
      : studentPosts.filter((p) => p.category === activeFilter)

  const totalStudents = filteredPosts.reduce((sum, p) => sum + p.studentCount, 0)

  return (
    <section
      className={`sp-section ${isVisible ? 'sp-visible' : ''}`}
      ref={sectionRef}
      id="students"
    >
      {/* ── Ambient ── */}
      <div className="sp-ambient">
        <div className="sp-orb sp-orb1" />
        <div className="sp-orb sp-orb2" />
        <div className="sp-grid-bg" />
      </div>

      {/* ── Header ── */}
      <div className="sp-header">
        <span className="sp-badge">
          <HiSparkles /> हमारे छात्र <HiSparkles />
        </span>
        <h2 className="sp-title">
          <span className="sp-title-hi">कक्षा-वार छात्र</span>
          <span className="sp-title-en">Class-wise Students</span>
        </h2>
        <div className="sp-title-rule">
          <span className="sp-rule-line" />
          <span className="sp-rule-icon">👨‍🎓</span>
          <span className="sp-rule-line" />
        </div>
        <p className="sp-subtitle">
          ज्ञान भूमि पब्लिक स्कूल के सभी कक्षाओं के छात्रों की तस्वीरें
        </p>
      </div>

      {/* ── Stats ── */}
      <div className="sp-stats">
        <div className="sp-stat-item">
          <span className="sp-stat-num">{filteredPosts.length}</span>
          <span className="sp-stat-label">कक्षाएँ</span>
        </div>
        <div className="sp-stat-divider" />
        <div className="sp-stat-item">
          <span className="sp-stat-num">{totalStudents}</span>
          <span className="sp-stat-label">कुल छात्र</span>
        </div>
        <div className="sp-stat-divider" />
        <div className="sp-stat-item">
          <span className="sp-stat-num">2024-25</span>
          <span className="sp-stat-label">सत्र</span>
        </div>
      </div>

      {/* ── Filters ── */}
      <div className="sp-filters">
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            className={`sp-filter-btn ${activeFilter === cat.id ? 'sp-filter-active' : ''}`}
            onClick={() => setActiveFilter(cat.id)}
          >
            <span className="sp-filter-icon">{cat.icon}</span>
            <span className="sp-filter-label">{cat.label}</span>
            <span className="sp-filter-en">{cat.labelEn}</span>
          </button>
        ))}
      </div>

      {/* ── Posts Grid ── */}
      <div className="sp-posts-grid">
        {filteredPosts.map((post, index) => (
          <PostCard
            key={post.id}
            post={post}
            index={index}
            onClick={(idx) => {
              setLightboxIndex(idx)
              setLightboxOpen(true)
            }}
          />
        ))}

        {filteredPosts.length === 0 && (
          <div className="sp-empty">
            <span>📷</span>
            <p>इस श्रेणी में कोई पोस्ट नहीं है</p>
          </div>
        )}
      </div>

      {/* ── Bottom ── */}
      <div className="sp-bottom-decor">
        <span className="sp-dec-line" />
        <span className="sp-dec-diamond">◆</span>
        <span className="sp-dec-line" />
      </div>

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <PostLightbox
          posts={filteredPosts}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() =>
            setLightboxIndex((p) => (p === 0 ? filteredPosts.length - 1 : p - 1))
          }
          onNext={() =>
            setLightboxIndex((p) => (p === filteredPosts.length - 1 ? 0 : p + 1))
          }
          onJump={(i) => setLightboxIndex(i)}
        />
      )}
    </section>
  )
}

export default StudentPosts
