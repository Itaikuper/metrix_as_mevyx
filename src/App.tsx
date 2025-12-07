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
  Mail
} from 'lucide-react';
import './App.css';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
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

  const scrollToContact = () => {
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Background Elements */}
      <div className="bg-gradient-orb orb-1"></div>
      <div className="bg-gradient-orb orb-2"></div>
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
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-section section"
        >
          <div className="hero-content max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium tracking-wide">
              ADVANCED BEHAVIORAL SIMULATION
            </div>
            <h1 className="title text-gradient">Master The Human Element</h1>
            <p className="hero-description">
              The premier AI platform for simulating and assessing complex human interactions.
              From <strong>high-stakes field scenarios</strong> to <strong>corporate leadership</strong>.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="btn-primary" onClick={scrollToContact}>
                Start Assessment <ChevronRight size={16} className="ml-2 inline" />
              </button>
              <button className="btn-secondary" onClick={scrollToContact}>
                View Scenarios
              </button>
            </div>
          </div>
        </motion.header>

        {/* Value Proposition - Left Aligned for Professional Readability */}
        <motion.section
          {...fadeInUp}
          className="section value-prop glass-panel p-12 rounded-2xl"
        >
          <div className="grid-split">
            <div className="text-content text-left">
              <h3 className="section-title text-accent text-left">Precision in Human Dynamics</h3>
              <p className="section-text text-left">
                Mevyx bridges the gap between theory and reality. We provide a secure environment to practice
                high-stakes conversations, evaluate soft skills, and train for scenarios where failure is not an option.
              </p>
              <ul className="feature-list mt-6 text-left">
                <li><Target size={16} className="inline mr-2 text-accent" /> Realistic Behavioral Modeling</li>
                <li><Lock size={16} className="inline mr-2 text-accent" /> Zero-Knowledge Privacy Architecture</li>
                <li><BarChart3 size={16} className="inline mr-2 text-accent" /> Quantitative Performance Metrics</li>
              </ul>
            </div>
            <div className="visual-content flex items-center justify-center">
              {/* Placeholder for a future dashboard image or graphic */}
              <div className="placeholder-graphic">
                <Activity size={64} className="text-accent opacity-50" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* The Platform */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="section"
        >
          <div className="section-header text-center mb-16">
            <h3 className="section-title">The Mevyx Ecosystem</h3>
            <p className="section-subtitle">Comprehensive tools for every stage of human development.</p>
          </div>

          <div className="features-grid">
            <motion.div variants={fadeInUp} className="feature-card glass-panel text-left">
              <div className="icon-wrapper"><Activity size={28} className="text-accent" /></div>
              <h4 className="card-title-small">Dynamic Simulation</h4>
              <p className="card-text">Unscripted, evolving scenarios for sales, service, and ops that adapt to user behavior in real-time.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="feature-card glass-panel text-left">
              <div className="icon-wrapper"><Brain size={28} className="text-accent" /></div>
              <h4 className="card-title-small">Cognitive Assessment</h4>
              <p className="card-text">Deep analysis of decision-making, empathy, and interpersonal skills using advanced psychometrics.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="feature-card glass-panel text-left">
              <div className="icon-wrapper"><BarChart3 size={28} className="text-accent" /></div>
              <h4 className="card-title-small">Actionable Feedback</h4>
              <p className="card-text">Instant, data-driven grading for students and professionals to pinpoint areas for improvement.</p>
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
              className="domain-card glass-panel text-left"
            >
              <div className="card-header flex items-center mb-4">
                <Shield size={32} className="text-accent mr-3" />
                <h2 className="card-title-sm">Human Skills Wing</h2>
              </div>
              <h3 className="card-subtitle">Tactical & Interpersonal</h3>
              <p className="card-description">
                Specialized training for <strong>field personnel</strong> and elite teams.
                Simulate complex rapport building, information gathering, and high-pressure psychological maneuvering.
              </p>
              <div className="card-footer mt-auto">
                <button className="link-btn" onClick={scrollToContact}>
                  Initialize Protocol <ChevronRight size={16} className="ml-1 inline" />
                </button>
              </div>
            </motion.div>

            {/* Commercial Wing */}
            <motion.div
              variants={fadeInUp}
              className="domain-card glass-panel text-left"
            >
              <div className="card-header flex items-center mb-4">
                <Briefcase size={32} className="text-accent mr-3" />
                <h2 className="card-title-sm">Commercial Wing</h2>
              </div>
              <h3 className="card-subtitle">Sales & Service</h3>
              <p className="card-description">
                Immersive scenarios for <strong>marketing simulations</strong>, <strong>sales mastery</strong>, and <strong>customer service</strong>.
                Train teams to handle objections and close deals.
              </p>
              <div className="card-footer mt-auto">
                <button className="link-btn" onClick={scrollToContact}>
                  Access Market Data <ChevronRight size={16} className="ml-1 inline" />
                </button>
              </div>
            </motion.div>

            {/* Assessment Wing */}
            <motion.div
              variants={fadeInUp}
              className="domain-card glass-panel text-left"
            >
              <div className="card-header flex items-center mb-4">
                <Activity size={32} className="text-accent mr-3" />
                <h2 className="card-title-sm">Mevyx Assessment</h2>
              </div>
              <h3 className="card-subtitle">Recruitment & Academic</h3>
              <p className="card-description">
                The gold standard for <strong>Business Schools</strong> and HR.
                Conduct automated <strong>job interviews</strong> and evaluate candidate potential with precision.
              </p>
              <div className="card-footer mt-auto">
                <button className="link-btn" onClick={scrollToContact}>
                  Start Evaluation <ChevronRight size={16} className="ml-1 inline" />
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
          <div id="contact-section" className="contact-container glass-panel p-12 text-center">
            <h3 className="section-title text-accent mb-4">Ready to Transform Training?</h3>
            <p className="contact-text mb-8">
              Mevyx is available to vetted organizations. Request a confidential demo or discuss custom training solutions.
            </p>
            <div className="contact-actions flex justify-center">
              <a href="mailto:itaikupers@gmail.com" className="btn-primary">
                <Mail size={18} className="inline mr-2" />
                Request Access
              </a>
            </div>
          </div>

          <div className="system-status mt-12 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/40 border border-white/10 text-xs text-gray-400">
              <Terminal size={12} className="mr-2 text-green-500" />
              SYSTEM STATUS: ONLINE | ENCRYPTION: AES-256
            </div>
            <p className="copyright mt-4 text-gray-500 text-sm">&copy; {new Date().getFullYear()} MEVYX. ALL RIGHTS RESERVED.</p>
          </div>
        </motion.footer>

      </div>
    </div>
  );
}

export default App;
