/* Variables Globales & Thèmes */
:root {
  --font-family: 'Plus Jakarta Sans', sans-serif;
  --bg-primary: #0a1118;
  --bg-card: rgba(18, 30, 43, 0.7);
  --border-color: rgba(255, 255, 255, 0.1);
  --text-main: #f0f4f8;
  --text-muted: #94a3b8;
  --primary-orange: #f59e0b;
  --primary-blue: #2563eb;
  --gradient-accent: linear-gradient(135deg, #f59e0b, #d97706);
  --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

[data-theme="light"] {
  --bg-primary: #f8fafc;
  --bg-card: rgba(255, 255, 255, 0.8);
  --border-color: rgba(0, 0, 0, 0.08);
  --text-main: #0f172a;
  --text-muted: #475569;
  --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.08);
}

/* Reinitialisation */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family);
  background-color: var(--bg-primary);
  color: var(--text-main);
  line-height: 1.6;
  overflow-x: hidden;
  transition: background-color 0.3s ease, color 0.3s ease;
  position: relative;
}

.container {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
}

/* Arrière-plan Blueprint */
.blueprint-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: 
    linear-gradient(rgba(37, 99, 235, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37, 99, 235, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: -2;
  pointer-events: none;
}

.glow {
  position: fixed;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(120px);
  z-index: -1;
  pointer-events: none;
}

.glow-1 {
  top: 10%;
  left: 10%;
  background: rgba(245, 158, 11, 0.15);
}

.glow-2 {
  bottom: 20%;
  right: 10%;
  background: rgba(37, 99, 235, 0.15);
}

/* Cartes Effet Verre (Glassmorphism) */
.glass-card {
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: var(--glass-shadow);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary-orange);
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.2rem 0;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
}

.nav-container {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-main);
  text-decoration: none;
}

.logo i {
  color: var(--primary-orange);
}

.logo span {
  color: var(--primary-orange);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--primary-orange);
}

.nav-actions {
  display: flex;
  gap: 1rem;
}

.btn-icon {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-main);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.btn-icon:hover {
  background: rgba(245, 158, 11, 0.2);
}

.mobile-only {
  display: none;
}

/* Section Hero */
.hero-section {
  padding: 180px 0 100px 0;
  text-align: center;
}

.hero-badge {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid var(--primary-orange);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary-orange);
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.gradient-text {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  max-width: 650px;
  margin: 0 auto 2.5rem auto;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
}

/* Boutons */
.btn {
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: var(--gradient-accent);
  color: #fff;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);
}

.btn-outline {
  border: 1px solid var(--border-color);
  color: var(--text-main);
  background: transparent;
}

.btn-outline:hover {
  border-color: var(--primary-orange);
  color: var(--primary-orange);
}

/* Sections communes */
.section {
  padding: 80px 0;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.section-title i {
  color: var(--primary-orange);
}

/* À propos */
.info-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.5rem;
}

.chip {
  background: rgba(37, 99, 235, 0.1);
  border: 1px solid rgba(37, 99, 235, 0.3);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

/* Timeline */
.timeline {
  position: relative;
  border-left: 2px solid var(--border-color);
  padding-left: 2rem;
  margin-left: 1rem;
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
}

.timeline-dot {
  position: absolute;
  left: -2.6rem;
  top: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--primary-orange);
  border: 4px solid var(--bg-primary);
}

.timeline-date {
  font-size: 0.85rem;
  color: var(--primary-orange);
  font-weight: 700;
}

/* Compétences */
.skills-grid, .projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.skill-icon {
  font-size: 2rem;
  color: var(--primary-orange);
  margin-bottom: 1rem;
}

/* Projets */
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-header i {
  font-size: 1.8rem;
  color: var(--primary-blue);
}

.project-tag {
  font-size: 0.75rem;
  background: rgba(245, 158, 11, 0.15);
  color: var(--primary-orange);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-weight: 700;
}

/* Contact */
.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.contact-details {
  margin-top: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.contact-item i {
  font-size: 1.5rem;
  color: var(--primary-orange);
}

.contact-item a {
  color: var(--text-main);
  text-decoration: none;
  font-weight: 600;
}

.contact-item a:hover {
  text-decoration: underline;
}

.form-group {
  margin-bottom: 1.2rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: rgba(0, 0, 0, 0.2);
  color: var(--text-main);
  font-family: inherit;
}

.form-group input:focus, .form-group textarea:focus {
  outline: none;
  border-color: var(--primary-orange);
}

.full-width {
  width: 100%;
  justify-content: center;
}

/* Footer */
.footer {
  border-top: 1px solid var(--border-color);
  padding: 2rem 0;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.footer-tagline {
  margin-top: 0.5rem;
  font-weight: 600;
}

/* Responsive Mobile */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.3rem;
  }
  .contact-wrapper {
    grid-template-columns: 1fr;
  }
  .mobile-only {
    display: flex;
  }
  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--bg-primary);
    flex-direction: column;
    padding: 1.5rem;
    border-bottom: 1px solid var(--border-color);
  }
  .nav-links.active {
    display: flex;
  }
}