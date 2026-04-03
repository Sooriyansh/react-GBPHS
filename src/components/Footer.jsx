import '../css/Footer.css';
import razzImg from '../img/razz.jpg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copy">
        <p>
          Copyright {new Date().getFullYear()} <span>Gyan Bhoomi Higher Secondary School, Dobhi</span>. All rights
          reserved.
        </p>
        <p>
          Designed for <span>school visibility, trust, and admissions</span>
        </p>
      </div>

      <div className="footer-creator">
        <img src={razzImg} alt="Razz" className="footer-creator-image" loading="lazy" />
        <p>
          Created by <span>Razz</span>
        </p>
      </div>
    </footer>
  );
}
