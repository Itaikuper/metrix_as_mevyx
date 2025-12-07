import { motion } from 'framer-motion';
import {
  Shield,
  Briefcase,
  ChevronRight,
  Brain,
  Activity,
  BarChart3,
  Lock,
  Target,
  Mail,
  Sparkles,
  Zap,
  Linkedin
} from 'lucide-react';
import NeuralBackground from './components/NeuralBackground';
import './App.css';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Animated Neural Network Background */}
      <NeuralBackground />

      {/* Gradient Orbs */}
      <div className="bg-gradient-orb orb-1"></div>
      <div className="bg-gradient-orb orb-2"></div>
      <div className="bg-gradient-orb orb-3"></div>

      {/* Grid Overlay */}
      <div className="grid-overlay"></div>

      {/* Navigation Bar */}
      <nav className="navbar glass-panel-nav">
        <div className="nav-content">
          <div className="nav-logo">
            <img src="/ChatGPT Image Nov 13, 2025, 05_57_49 PM.png" alt="MEVYX" className="nav-logo-img" />
            <span className="nav-brand">MEVYX</span>
          </div>
          <div className="nav-actions">
            <button className="btn-nav" onClick={scrollToContact}>REQUEST ACCESS</button>
          </div>
        </div>
      </nav>

      <div className="content-wrapper">

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hero-section section"
        >
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hero-badge"
            >
              <Sparkles size={14} />
              ADVANCED BEHAVIORAL SIMULATION
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="title text-gradient"
            >
              Master The Human Element
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="hero-description"
            >
              The premier AI platform for simulating and assessing complex human interactions.
              From <strong>high-stakes field scenarios</strong> to <strong>corporate leadership</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="hero-cta"
            >
              <button className="btn-primary" onClick={scrollToContact}>
                <span>Start Assessment</span>
                <ChevronRight size={18} />
              </button>
              <button className="btn-secondary" onClick={scrollToContact}>
                View Scenarios
              </button>
            </motion.div>
          </div>
        </motion.header>

        {/* Value Proposition */}
        <motion.section
          {...fadeInUp}
          className="section value-prop glass-panel"
        >
          <div className="grid-split">
            <div className="text-content">
              <h3 className="section-title text-accent">Precision in Human Dynamics</h3>
              <p className="section-text">
                Mevyx bridges the gap between theory and reality. We provide a secure environment to practice
                high-stakes conversations, evaluate soft skills, and train for scenarios where failure is not an option.
              </p>
              <ul className="feature-list mt-6">
                <li>
                  <Target size={18} />
                  Realistic Behavioral Modeling
                </li>
                <li>
                  <Lock size={18} />
                  Zero-Knowledge Privacy Architecture
                </li>
                <li>
                  <BarChart3 size={18} />
                  Quantitative Performance Metrics
                </li>
              </ul>
            </div>
            <div className="visual-content flex items-center justify-center">
              <div className="placeholder-graphic">
                <Activity size={64} className="text-accent" style={{ opacity: 0.5 }} />
              </div>
            </div>
          </div>
        </motion.section>

        {/* The Platform */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="section"
        >
          <div className="section-header">
            <h3 className="section-title">The Mevyx Ecosystem</h3>
            <p className="section-subtitle">Comprehensive tools for every stage of human development.</p>
          </div>

          <div className="features-grid">
            <motion.div variants={staggerItem} className="feature-card glass-panel">
              <div className="icon-wrapper">
                <Zap size={28} />
              </div>
              <h4 className="card-title-small">Dynamic Simulation</h4>
              <p className="card-text">Unscripted, evolving scenarios for sales, service, and ops that adapt to user behavior in real-time.</p>
            </motion.div>

            <motion.div variants={staggerItem} className="feature-card glass-panel">
              <div className="icon-wrapper">
                <Brain size={28} />
              </div>
              <h4 className="card-title-small">Cognitive Assessment</h4>
              <p className="card-text">Deep analysis of decision-making, empathy, and interpersonal skills using advanced psychometrics.</p>
            </motion.div>

            <motion.div variants={staggerItem} className="feature-card glass-panel">
              <div className="icon-wrapper">
                <BarChart3 size={28} />
              </div>
              <h4 className="card-title-small">Actionable Feedback</h4>
              <p className="card-text">Instant, data-driven grading for students and professionals to pinpoint areas for improvement.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Domains */}
        <motion.section
          className="section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="cards-container">
            {/* Human Operations Wing */}
            <motion.div
              variants={staggerItem}
              className="domain-card glass-panel"
            >
              <div className="card-header">
                <Shield size={32} className="text-accent" />
                <h2 className="card-title-sm">Human Skills Wing</h2>
              </div>
              <h3 className="card-subtitle">Tactical & Interpersonal</h3>
              <p className="card-description">
                Specialized training for <strong>field personnel</strong> and elite teams.
                Simulate complex rapport building, information gathering, and high-pressure psychological maneuvering.
              </p>
              <div className="card-footer">
                <button className="link-btn" onClick={scrollToContact}>
                  Initialize Protocol <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>

            {/* Commercial Wing */}
            <motion.div
              variants={staggerItem}
              className="domain-card glass-panel"
            >
              <div className="card-header">
                <Briefcase size={32} className="text-accent" />
                <h2 className="card-title-sm">Commercial Wing</h2>
              </div>
              <h3 className="card-subtitle">Sales & Service</h3>
              <p className="card-description">
                Immersive scenarios for <strong>marketing simulations</strong>, <strong>sales mastery</strong>, and <strong>customer service</strong>.
                Train teams to handle objections and close deals.
              </p>
              <div className="card-footer">
                <button className="link-btn" onClick={scrollToContact}>
                  Access Market Data <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>

            {/* Assessment Wing */}
            <motion.div
              variants={staggerItem}
              className="domain-card glass-panel"
            >
              <div className="card-header">
                <Activity size={32} className="text-accent" />
                <h2 className="card-title-sm">Mevyx Assessment</h2>
              </div>
              <h3 className="card-subtitle">Recruitment & Academic</h3>
              <p className="card-description">
                The gold standard for <strong>Business Schools</strong> and HR.
                Conduct automated <strong>job interviews</strong> and evaluate candidate potential with precision.
              </p>
              <div className="card-footer">
                <button className="link-btn" onClick={scrollToContact}>
                  Start Evaluation <ChevronRight size={16} />
                </button>
              </div>
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
          <div id="contact-section" className="contact-container glass-panel">
            <h3 className="section-title text-accent mb-4">Ready to Transform Training?</h3>
            <p className="contact-text">
              Mevyx is available to vetted organizations. Request a confidential demo or discuss custom training solutions.
            </p>
            <div className="contact-actions">
              <a href="mailto:itaikupers@gmail.com" className="btn-primary">
                <Mail size={18} />
                <span>Request Access</span>
              </a>
              <a href="https://www.linkedin.com/in/itai-kuper-50ab464/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="system-status">
            <div className="status-badge">
              <span className="status-dot"></span>
              SYSTEM STATUS: ONLINE | ENCRYPTION: AES-256
            </div>
            <p className="copyright">&copy; {new Date().getFullYear()} MEVYX. ALL RIGHTS RESERVED.</p>
          </div>
        </motion.footer>

      </div>
    </div>
  );
}

export default App;
