import { useEffect, useRef, useState } from 'react';
import '../css/Projects.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faChalkboardUser,
  faFutbol,
  faSchool,
  faShieldHalved,
  faUserLock,
} from '@fortawesome/free-solid-svg-icons';

const PROJECTS = [
  {
    id: 1,
    num: '01',
    title: 'About Our School',
    subtitle: 'School Overview',
    year: 'Established Learning Journey',
    status: 'Active',
    statusColor: '#4ade80',
    desc: 'We provide a nurturing academic environment where every learner is supported in studies, discipline, confidence, and long-term growth.',
    tags: ['Holistic Development', 'Safe Environment', 'Quality Education', 'Student Focused'],
    emoji: <FontAwesomeIcon icon={faUserLock} />,
    bgGradient: 'radial-gradient(ellipse at 70% 50%, #1a2a3a 0%, #0a0a0a 65%)',
    accentColor: '#60a5fa',
  },
  {
    id: 2,
    num: '02',
    title: 'Safety First',
    subtitle: 'Student Protection',
    year: 'Campus Priority',
    status: 'Priority',
    statusColor: '#4ade80',
    desc: 'Student safety stays at the center of our campus culture with discipline, supervision, and a secure atmosphere for daily learning.',
    tags: ['Safe Campus', 'Monitored Spaces', 'Student Care'],
    emoji: <FontAwesomeIcon icon={faShieldHalved} />,
    bgGradient: 'radial-gradient(ellipse at 30% 60%, #001a1a 0%, #0a0a0a 65%)',
    accentColor: '#22d3ee',
  },
  {
    id: 3,
    num: '03',
    title: 'Regular Classes',
    subtitle: 'Academic Excellence',
    year: 'Daily Learning',
    status: 'Core Focus',
    statusColor: '#4ade80',
    desc: 'A structured curriculum, regular classroom teaching, and planned assessments help students build strong academic foundations year after year.',
    tags: ['Structured Curriculum', 'Regular Exams', 'Academic Growth'],
    emoji: <FontAwesomeIcon icon={faBookOpen} />,
    bgGradient: 'radial-gradient(ellipse at 60% 40%, #1a1a00 0%, #0a0a0a 65%)',
    accentColor: '#facc15',
  },
  {
    id: 4,
    num: '04',
    title: 'Experienced Teachers',
    subtitle: 'Expert Faculty',
    year: 'Dedicated Mentors',
    status: 'Dedicated Team',
    statusColor: '#4ade80',
    desc: 'Our faculty guides students with subject expertise, personal attention, and consistent mentoring in both academics and character building.',
    tags: ['Qualified Teachers', 'Mentorship', 'Personal Guidance'],
    emoji: <FontAwesomeIcon icon={faChalkboardUser} />,
    bgGradient: 'radial-gradient(ellipse at 40% 70%, #1a001a 0%, #0a0a0a 65%)',
    accentColor: '#f472b6',
  },
  {
    id: 5,
    num: '05',
    title: 'Sports Facilities',
    subtitle: 'Health and Fitness',
    year: 'Balanced Development',
    status: 'Active',
    statusColor: '#4ade80',
    desc: 'Sports and physical activities help students stay fit, learn teamwork, and develop confidence beyond the classroom.',
    tags: ['Outdoor Games', 'Physical Fitness', 'Teamwork'],
    emoji: <FontAwesomeIcon icon={faFutbol} />,
    bgGradient: 'radial-gradient(ellipse at 65% 35%, #002000 0%, #0a0a0a 65%)',
    accentColor: '#22c55e',
  },
  {
    id: 6,
    num: '06',
    title: 'Our Legacy',
    subtitle: 'School Vision',
    year: 'Growing Every Year',
    status: 'Growing',
    statusColor: '#60a5fa',
    desc: 'Gyan Bhoomi School continues to grow as a trusted place for meaningful education, strong values, and future-ready student development.',
    tags: ['Trusted School', 'Leadership', 'Future Ready'],
    emoji: <FontAwesomeIcon icon={faSchool} />,
    bgGradient: 'radial-gradient(ellipse at 50% 50%, #1a1205 0%, #0a0a0a 65%)',
    accentColor: '#c8a96e',
  },
];

function ProjectPanel({ proj, isActive, progress }) {
  return (
    <div className="parallax-panel">
      <div
        className="parallax-bg"
        style={{
          background: proj.bgGradient,
          transform: `scale(${1 + progress * 0.05})`,
          opacity: isActive ? 1 : 0.45,
        }}
      />

      <div className="parallax-overlay-grid" />

      <div className="parallax-content">
        <div
          className="panel-left"
          style={{
            opacity: isActive ? 1 : 0.35,
            transform: isActive ? 'translateX(0)' : 'translateX(-24px)',
          }}
        >
          <div className="panel-meta-row">
            <span className="panel-num" style={{ color: `${proj.accentColor}30` }}>
              {proj.num}
            </span>
            <span className="panel-line" style={{ background: `${proj.accentColor}60` }} />
            <span
              className="panel-status"
              style={{
                color: proj.statusColor,
                borderColor: `${proj.statusColor}50`,
                background: `${proj.statusColor}12`,
              }}
            >
              {proj.status}
            </span>
          </div>

          <p className="panel-subtitle" style={{ color: proj.accentColor }}>
            {proj.subtitle} | {proj.year}
          </p>
          <h2 className="panel-title">{proj.title}</h2>
          <p className="panel-desc">{proj.desc}</p>

          <div className="panel-tags">
            {proj.tags.map((tag) => (
              <span
                key={tag}
                className="panel-tag"
                style={{ borderColor: `${proj.accentColor}50`, color: proj.accentColor }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          className="panel-right"
          style={{
            opacity: isActive ? 1 : 0.2,
            transform: isActive ? 'translateX(0) scale(1)' : 'translateX(30px) scale(0.95)',
          }}
        >
          <div className="mock-card" style={{ borderColor: `${proj.accentColor}40` }}>
            <div className="mock-top">
              <span />
              <span />
              <span />
            </div>
            <div className="mock-stage" style={{ background: proj.bgGradient }}>
              <span
                className="mock-emoji"
                style={{ filter: `drop-shadow(0 0 25px ${proj.accentColor}60)` }}
              >
                {proj.emoji}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="panel-progress-track">
        <div
          className="panel-progress-bar"
          style={{
            width: isActive ? `${progress * 100}%` : '0%',
            background: `linear-gradient(90deg, ${proj.accentColor}, #ffffff)`,
          }}
        />
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progresses, setProgresses] = useState(PROJECTS.map(() => 0));
  const sectionRefs = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const winH = window.innerHeight;

      let currentActive = 0;
      const nextProgress = PROJECTS.map((_, i) => {
        const el = sectionRefs.current[i];
        if (!el) return 0;

        const sectionTop = el.offsetTop;
        const sectionHeight = el.offsetHeight;
        const relative = scrollY - sectionTop;
        const progress = Math.max(0, Math.min(1, relative / winH));

        if (relative >= 0 && relative < sectionHeight - winH) {
          currentActive = i;
        }

        return progress;
      });

      setActiveIdx(currentActive);
      setProgresses(nextProgress);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="highlights" className="projects-parallax" aria-labelledby="highlights-title">
      <h2 id="highlights-title" className="sr-only">
        School highlights and facilities
      </h2>
      <div className="projects-side-progress" aria-hidden="true">
        {PROJECTS.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth' })}
            className={`side-dot ${i === activeIdx ? 'active' : ''}`}
            style={{ '--dot-color': p.accentColor }}
            aria-label={`Go to ${p.title}`}
          />
        ))}
      </div>

      {PROJECTS.map((proj, i) => (
        <div
          key={proj.id}
          id={`highlight-${proj.id}`}
          ref={(el) => {
            sectionRefs.current[i] = el;
          }}
          className="project-section-wrap"
        >
          <ProjectPanel proj={proj} isActive={activeIdx === i} progress={progresses[i]} />
        </div>
      ))}
    </section>
  );
}
