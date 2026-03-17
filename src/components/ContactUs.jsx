import React, { useEffect, useRef, useState } from 'react'
import '../css/ContactUs.css'
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCircleCheck,
  FaClock,
  FaDiamond,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaMap,
  FaMapLocationDot,
  FaPaperPlane,
  FaPenToSquare,
  FaPhone,
  FaUser,
  FaWhatsapp,
  FaYoutube
} from 'react-icons/fa6'

const contactData = [
  {
    id: 1,
    icon: <FaEnvelope />,
    label: 'ईमेल',
    labelEn: 'Email',
    value: 'gyanbhoomischool@gmail.com',
    link: 'mailto:gyanbhoomischool@gmail.com',
    color: '#c9a84c'
  },
  {
    id: 2,
    icon: <FaPhone />,
    label: 'फ़ोन',
    labelEn: 'Phone',
    value: '+91 98273 80701',
    link: 'tel:+919827380701',
    color: '#cd5529'
  },
  {
    id: 3,
    icon: <FaLocationDot />,
    label: 'पता',
    labelEn: 'Address',
    value: 'ज्ञानभूमि पब्लिक स्कूल, डोभी',
    link: 'https://maps.google.com/?q=Gyanbhumi+Public+School+Dobhi',
    color: '#c9a84c'
  },
  {
    id: 4,
    icon: <FaClock />,
    label: 'समय',
    labelEn: 'Timing',
    value: 'सोम - शनि : 10:00 AM - 3:00 PM',
    link: null,
    color: '#cd5529'
  }
]

const socialLinks = [
  {
    id: 'facebook',
    label: 'Facebook',
    icon: <FaFacebookF />,
    href: 'https://www.facebook.com/',
    color: '#1877f2',
    bg: 'rgba(24, 119, 242, 0.15)'
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/',
    color: '#e4405f',
    bg: 'rgba(228, 64, 95, 0.15)'
  },
  {
    id: 'youtube',
    label: 'YouTube',
    icon: <FaYoutube />,
    href: 'https://www.youtube.com/',
    color: '#ff0000',
    bg: 'rgba(255, 0, 0, 0.15)'
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: <FaWhatsapp />,
    href: 'https://wa.me/919827380701',
    color: '#25d366',
    bg: 'rgba(37, 211, 102, 0.15)'
  }
]

const ContactUs = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })
  const [formSent, setFormSent] = useState(false)

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `नाम: ${formData.name}%0Aफ़ोन: ${formData.phone}%0Aसंदेश: ${formData.message}`
    window.open(
      `https://wa.me/919827380701?text=${msg}`,
      '_blank'
    )
    setFormSent(true)
    setTimeout(() => setFormSent(false), 3000)
    setFormData({ name: '', phone: '', message: '' })
  }

  return (
    <section
      className={`contact-section ${isVisible ? 'contact-visible' : ''}`}
      ref={sectionRef}
      id="contact"
    >
      <div className="ct-ambient">
        <div className="ct-orb ct-orb1" />
        <div className="ct-orb ct-orb2" />
        <div className="ct-grid" />
      </div>

      <div className="ct-header">
        <span className="ct-badge">✦ संपर्क करें ✦</span>
        <h2 className="ct-title">
          <span className="ct-title-hi">हमसे संपर्क करें</span>
          <span className="ct-title-en">Contact Us</span>
        </h2>
        <div className="ct-title-rule">
          <span className="ct-rule-line" />
          <span className="ct-rule-icon"><FaEnvelope /></span>
          <span className="ct-rule-line" />
        </div>
        <p className="ct-subtitle">
          किसी भी प्रश्न या जानकारी के लिए हमसे संपर्क करें
        </p>
      </div>

      <div className="ct-content">
        <div className="ct-left">
          <div className="ct-info-grid">
            {contactData.map((item, index) => (
              <a
                key={item.id}
                href={item.link || '#'}
                className="ct-info-card"
                style={{
                  '--card-accent': item.color,
                  animationDelay: `${index * 0.15}s`
                }}
                target={item.link?.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
              >
                <i className="ct-c ct-c-tl" />
                <i className="ct-c ct-c-br" />

                <span className="ct-info-icon">{item.icon}</span>
                <div className="ct-info-text">
                  <span className="ct-info-label">
                    {item.label}
                    <small> ({item.labelEn})</small>
                  </span>
                  <span className="ct-info-value">{item.value}</span>
                </div>
                {item.link && <span className="ct-info-arrow"><FaArrowRight /></span>}
              </a>
            ))}
          </div>

          <form className="ct-form" onSubmit={handleSubmit}>
            <h3 className="ct-form-title">
              <span><FaPaperPlane /></span> संदेश भेजें
              <small>(Send Message)</small>
            </h3>

            <div className="ct-form-group">
              <label className="ct-label">
                नाम <small>(Name)</small>
              </label>
              <div className="ct-input-wrap">
                <span className="ct-input-icon"><FaUser /></span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="अपना नाम लिखें..."
                  required
                  className="ct-input"
                />
              </div>
            </div>

            <div className="ct-form-group">
              <label className="ct-label">
                फ़ोन <small>(Phone)</small>
              </label>
              <div className="ct-input-wrap">
                <span className="ct-input-icon"><FaPhone /></span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="अपना फ़ोन नंबर लिखें..."
                  required
                  className="ct-input"
                />
              </div>
            </div>

            <div className="ct-form-group">
              <label className="ct-label">
                संदेश <small>(Message)</small>
              </label>
              <div className="ct-input-wrap ct-textarea-wrap">
                <span className="ct-input-icon"><FaPenToSquare /></span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="अपना संदेश लिखें..."
                  required
                  className="ct-input ct-textarea"
                  rows="4"
                />
              </div>
            </div>

            <button
              type="submit"
              className={`ct-submit ${formSent ? 'ct-submit-sent' : ''}`}
            >
              {formSent ? (
                <>
                  <span><FaCircleCheck /></span>
                  <span>भेज दिया गया!</span>
                </>
              ) : (
                <>
                  <span><FaPaperPlane /></span>
                  <span>WhatsApp पर भेजें</span>
                  <span className="ct-btn-arrow"><FaArrowRight /></span>
                </>
              )}
            </button>
          </form>

          <div className="footer-social">
            <p className="social-heading">Connect With Us</p>
            <div className="social-icons-row">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  style={{
                    '--social-color': social.color,
                    '--social-bg': social.bg
                  }}
                  aria-label={social.label}
                >
                  <span className="social-icon-inner">{social.icon}</span>
                  <span className="social-label">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="ct-right">
          <div className="ct-map-container">
            <div className="ct-map-header">
              <span className="ct-map-pin"><FaLocationDot /></span>
              <div>
                <h4 className="ct-map-title">हमारा स्थान</h4>
                <p className="ct-map-subtitle">Our Location</p>
              </div>
            </div>

            <div className="ct-map-frame">
              {!mapLoaded && (
                <div className="ct-map-skeleton">
                  <div className="ct-skeleton-pulse" />
                  <span><FaMap /> नक्शा लोड हो रहा है...</span>
                </div>
              )}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.4411088519564!2d78.9200276!3d23.1175465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397f0e9be8e28767%3A0x5ae5220f242d2eda!2sGyanbhumi%20Public%20School%20Dobhi!5e0!3m2!1sen!2sin!4v1743696633991!5m2!1sen!2sin"
                className="ct-map-iframe"
                title="Gyanbhumi Public School Location"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setMapLoaded(true)}
              />

              <i className="ct-mc ct-mc-tl" />
              <i className="ct-mc ct-mc-tr" />
              <i className="ct-mc ct-mc-bl" />
              <i className="ct-mc ct-mc-br" />
            </div>

            <a
              href="https://maps.google.com/?q=Gyanbhumi+Public+School+Dobhi"
              target="_blank"
              rel="noopener noreferrer"
              className="ct-direction-btn"
            >
              <span><FaMapLocationDot /></span>
              <span>दिशा-निर्देश प्राप्त करें</span>
              <span className="ct-dir-arrow"><FaArrowUpRightFromSquare /></span>
            </a>
          </div>
        </div>
      </div>

      <div className="ct-bottom-decor">
        <span className="ct-dec-line" />
        <span className="ct-dec-diamond"><FaDiamond /></span>
        <span className="ct-dec-line" />
      </div>
    </section>
  )
}

export default ContactUs
