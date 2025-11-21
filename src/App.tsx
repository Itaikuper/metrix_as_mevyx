import MatrixRain from './components/MatrixRain';
import { motion } from 'framer-motion';
import {
  Shield,
  Briefcase,
  Terminal,
  ChevronRight,
  Brain,
  Activity,
  BarChart3,
  Lock,
  Target,
  Users,
  LineChart,
  Mail,
  Linkedin
} from 'lucide-react';
import './App.css';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="app-container">
      <MatrixRain />

      <div className="content-wrapper">

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="main-header section"
        >
          <div className="logo-container">
            <img src="/ChatGPT Image Nov 13, 2025, 05_55_56 PM.png" alt="MEVYX Logo" className="main-logo" />
          </div>
          <h1 className="title text-neon glitch-text" data-text="MEVYX">MEVYX</h1>
          <h2 className="subtitle-large">MASTERING THE HUMAN ELEMENT</h2>
          <p className="hero-description">
            Train for the moments that matter. Our AI-powered human simulator creates realistic scenarios
            where you practice reading people, making critical decisions, and mastering the skills machines can't replicate.
          </p>
        </motion.header>

        {/* Value Proposition */}
        <motion.section
          {...fadeInUp}
          className="section value-prop"
        >
          <h3 className="section-title text-neon">TRAIN WHAT MACHINES CAN'T REPLACE</h3>
          <p className="section-text">
            Real expertise isn't learned from textbooks. It's built through experience—reading people,
            making split-second decisions, earning trust under pressure.
            <br /><br />
            Mevyx creates the scenarios you can't afford to learn from mistakes. Train on realistic simulations
            that adapt to you, preparing your team for moments where human skill decides everything.
          </p>
        </motion.section>

        {/* The Platform */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="section"
        >
          <h3 className="section-title text-neon text-center">THE MEVYX PLATFORM</h3>
          <div className="features-grid">
            <motion.div variants={fadeInUp} className="feature-card bg-glass border-neon">
              <div className="icon-wrapper"><Activity size={32} className="text-neon" /></div>
              <h4 className="card-title-small">REALISM</h4>
              <p className="card-text">Live scenarios, not scripted demos.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="feature-card bg-glass border-neon">
              <div className="icon-wrapper"><Brain size={32} className="text-neon" /></div>
              <h4 className="card-title-small">BEHAVIORAL MODELING</h4>
              <p className="card-text">AI that reads and reacts like people do.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="feature-card bg-glass border-neon">
              <div className="icon-wrapper"><BarChart3 size={32} className="text-neon" /></div>
              <h4 className="card-title-small">MEASURABLE GROWTH</h4>
              <p className="card-text">Track performance, identify gaps, prove ROI.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Domains */}
        <motion.section
          className="section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h3 className="section-title text-neon text-center">TWO DOMAINS, ONE MISSION</h3>
          <div className="cards-container">
            {/* Investigative Arm */}
            <motion.div
              variants={fadeInUp}
              className="domain-card bg-glass border-neon"
            >
              <div className="icon-wrapper">
                <Shield size={48} className="text-neon" />
              </div>
              <h2 className="card-title text-neon">MEVYX / OPERATIVE</h2>
              <h3 className="card-subtitle">HUMAN PERFORMANCE UNDER PRESSURE</h3>
              <p className="card-description">
                Train operatives for high-stakes human interaction. From reading micro-expressions to
                navigating complex negotiations—build skills that can't be faked.
              </p>
              <button className="btn-matrix">
                INITIALIZE PROTOCOL <ChevronRight size={16} style={{ display: 'inline', verticalAlign: 'middle' }} />
              </button>
            </motion.div>

            {/* Commercial Arm */}
            <motion.div
              variants={fadeInUp}
              className="domain-card bg-glass border-neon"
            >
              <div className="icon-wrapper">
                <Briefcase size={48} className="text-neon" />
              </div>
              <h2 className="card-title text-neon">MEVYX / COMMERCE</h2>
              <h3 className="card-subtitle">HUMAN INTELLIGENCE IN BUSINESS</h3>
              <p className="card-description">
                Turn your team into trusted advisors. Train executives and sales professionals to read the room,
                handle objections naturally, and close with confidence.
              </p>
              <button className="btn-matrix">
                ACCESS MARKET DATA <ChevronRight size={16} style={{ display: 'inline', verticalAlign: 'middle' }} />
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* Differentiators */}
        <motion.section
          className="section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h3 className="section-title text-neon text-center">BUILT FOR YOUR MISSION</h3>
          <div className="grid-2x2">
            <motion.div variants={fadeInUp} className="info-item">
              <Lock className="text-neon mb-2" size={24} />
              <h4 className="info-title">CONFIDENTIALITY FIRST</h4>
              <p className="info-text">Zero-knowledge architecture for classified scenarios.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="info-item">
              <Target className="text-neon mb-2" size={24} />
              <h4 className="info-title">MISSION-SPECIFIC</h4>
              <p className="info-text">Custom scenarios built around your real challenges.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="info-item">
              <Users className="text-neon mb-2" size={24} />
              <h4 className="info-title">REALISTIC INTERACTIONS</h4>
              <p className="info-text">Trainee performance drives scenario difficulty.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="info-item">
              <LineChart className="text-neon mb-2" size={24} />
              <h4 className="info-title">MEASURABLE OUTCOMES</h4>
              <p className="info-text">Quantify improvement with behavioral analytics.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer / Contact */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="main-footer section"
        >
          <div className="contact-container bg-glass border-neon">
            <div className="logo-container-small mb-6">
              <img src="/ChatGPT Image Nov 13, 2025, 05_55_56 PM.png" alt="MEVYX Logo" className="footer-logo" />
            </div>
            <h3 className="section-title text-neon">READY TO TRANSFORM TRAINING?</h3>
            <p className="contact-text">
              Mevyx is available to vetted organizations. Request a confidential demo or discuss custom training solutions.
            </p>
            <div className="contact-actions">
              <a href="mailto:itaikupers@gmail.com" className="btn-matrix">
                <Mail size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                REQUEST ACCESS
              </a>
              <a href="https://linkedin.com/company/mevyx" target="_blank" rel="noopener noreferrer" className="btn-matrix">
                <Linkedin size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                CONNECT ON LINKEDIN
              </a>
            </div>
          </div>

          <div className="system-status mt-8">
            <p><Terminal size={14} style={{ display: 'inline', marginRight: '6px' }} /> SYSTEM STATUS: ONLINE | ENCRYPTION: AES-256</p>
            <p className="copyright">&copy; {new Date().getFullYear()} MEVYX. ALL RIGHTS RESERVED.</p>
          </div>
        </motion.footer>

      </div>
    </div>
  );
}

export default App;
