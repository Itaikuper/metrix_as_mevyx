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
  Mail
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
            <img src="/ChatGPT Image Nov 13, 2025, 05_57_49 PM.png" alt="MEVYX Logo" className="main-logo" />
          </div>
          <div className="bg-glass border-neon p-8 rounded-lg max-w-4xl mx-auto mt-8">
            <h1 className="title text-neon glitch-text" data-text="MEVYX">MEVYX</h1>
            <h2 className="subtitle-large">MASTERING THE HUMAN ELEMENT</h2>
            <p className="hero-description">
              Train for the moments that matter. Our AI-powered human simulator creates realistic scenarios
              where you practice reading people, making critical decisions, and mastering the skills machines can't replicate.
            </p>
          </div>
        </motion.header>

        {/* Value Proposition */}
        <motion.section
          {...fadeInUp}
          className="section value-prop bg-glass border-neon p-8 rounded-lg"
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
          <div className="cards-container">
            {/* Human Operations Wing */}
            <motion.div
              variants={fadeInUp}
              className="domain-card bg-glass border-neon"
            >
              <div className="icon-wrapper">
                <Shield size={48} className="text-neon" />
              </div>
              <h2 className="card-title text-neon">HUMAN OPERATIONS WING</h2>
              <h3 className="card-subtitle">ADVANCED HUMAN DYNAMICS</h3>
              <p className="card-description">
                Strategic interviewing. Target profiling. Rapport building.
              </p>
              <button className="btn-matrix">
                INITIALIZE PROTOCOL <ChevronRight size={16} style={{ display: 'inline', verticalAlign: 'middle' }} />
              </button>
            </motion.div>

            {/* Commercial Wing */}
            <motion.div
              variants={fadeInUp}
              className="domain-card bg-glass border-neon"
            >
              <div className="icon-wrapper">
                <Briefcase size={48} className="text-neon" />
              </div>
              <h2 className="card-title text-neon">COMMERCIAL WING</h2>
              <h3 className="card-subtitle">HIGH-STAKES NEGOTIATION</h3>
              <p className="card-description">
                High-end real estate negotiation. Objection handling. Closing psychology for luxury markets.
              </p>
              <button className="btn-matrix">
                ACCESS MARKET DATA <ChevronRight size={16} style={{ display: 'inline', verticalAlign: 'middle' }} />
              </button>
            </motion.div>

            {/* Assessment Wing */}
            <motion.div
              variants={fadeInUp}
              className="domain-card bg-glass border-neon"
            >
              <div className="icon-wrapper">
                <Activity size={48} className="text-neon" />
              </div>
              <h2 className="card-title text-neon">ASSESSMENT WING</h2>
              <h3 className="card-subtitle">PROFESSIONAL EVALUATION</h3>
              <p className="card-description">
                Professional candidate assessment. Structured interviews. HR evaluation reports.
              </p>
              <button className="btn-matrix">
                START EVALUATION <ChevronRight size={16} style={{ display: 'inline', verticalAlign: 'middle' }} />
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
            <motion.div variants={fadeInUp} className="info-item bg-glass border-neon rounded-lg">
              <Lock className="text-neon mb-2" size={24} />
              <h4 className="info-title">CONFIDENTIALITY FIRST</h4>
              <p className="info-text">Zero-knowledge architecture for classified scenarios.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="info-item bg-glass border-neon rounded-lg">
              <Target className="text-neon mb-2" size={24} />
              <h4 className="info-title">MISSION-SPECIFIC</h4>
              <p className="info-text">Custom scenarios built around your real challenges.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="info-item bg-glass border-neon rounded-lg">
              <Users className="text-neon mb-2" size={24} />
              <h4 className="info-title">REALISTIC INTERACTIONS</h4>
              <p className="info-text">Trainee performance drives scenario difficulty.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="info-item bg-glass border-neon rounded-lg">
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
              <img src="/ChatGPT Image Nov 13, 2025, 05_57_49 PM.png" alt="MEVYX Logo" className="footer-logo" />
            </div>
            <h3 className="section-title text-neon">READY TO TRANSFORM TRAINING?</h3>
            <p className="contact-text">
              Mevyx is available to vetted organizations. Request a confidential demo or discuss custom training solutions.
            </p>
            <div className="contact-actions" style={{ justifyContent: 'center' }}>
              <a href="mailto:itaikupers@gmail.com" className="btn-matrix">
                <Mail size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                REQUEST ACCESS
              </a>
            </div>
          </div>

          <div className="system-status mt-8 bg-glass border-neon" style={{ padding: '1rem', borderRadius: '0.5rem', display: 'inline-flex', flexDirection: 'column' }}>
            <p><Terminal size={14} style={{ display: 'inline', marginRight: '6px' }} /> SYSTEM STATUS: ONLINE | ENCRYPTION: AES-256</p>
            <p className="copyright">&copy; {new Date().getFullYear()} MEVYX. ALL RIGHTS RESERVED.</p>
          </div>
        </motion.footer>

      </div>
    </div>
  );
}

export default App;
