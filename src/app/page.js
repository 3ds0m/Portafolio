"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [greeting, setGreeting] = useState("¡Hola!");
  const [formStatus, setFormStatus] = useState(""); // "", "sending", "success", "error"
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Load and apply theme, and determine dynamic greeting based on client-side time
  useEffect(() => {
    setMounted(true);
    
    // Theme setup
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }

    // Dynamic greeting based on hours
    const hours = new Date().getHours();
    if (hours >= 6 && hours < 12) {
      setGreeting("¡Buenos días! 🌅");
    } else if (hours >= 12 && hours < 20) {
      setGreeting("¡Buenas tardes! ☀️");
    } else {
      setGreeting("¡Buenas noches! 🌙");
    }
  }, []);

  // Handle manual theme toggle
  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  // Handle contact form submit (simulated)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus(""), 5000);
    }, 1200);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Real data from Edson's CV
  const experiences = [
    {
      role: "Desarrollador Web Full Stack",
      company: "Freelance",
      period: "Junio 2025 - Presente",
      description: "Iniciativa emprendedora de diseño, desarrollo y despliegue de aplicaciones web y CRMs personalizados para autónomos y pequeñas empresas. Gestión integral del ciclo de vida del software: captación de clientes, toma de requisitos, arquitectura, presupuesto y despliegue final.",
      stack: ["Next.js", "React", "Node.js", "WordPress", "PostgreSQL"],
      color: "var(--pastel-mint)"
    },
    {
      role: "Desarrollador Backend Junior",
      company: "Beca Técnica",
      period: "Marzo 2025 - Junio 2025",
      description: "Gestión directa de infraestructura cloud en Azure, administración de bases de datos y servidores Windows Server para la optimización de procesos y generación de informes de calidad. Desarrollo de utilidades en C# y scripts en Perl para auditorías automatizadas de candidatos.",
      stack: ["C#", ".NET", "Perl", "Azure", "Windows Server"],
      color: "var(--pastel-blue)"
    },
    {
      role: "Diseño, Señalización y Construcción",
      company: "Trabajo Autónomo",
      period: "Febrero 2020 - Abril 2023",
      description: "Gestión de proyectos personalizados de extremo a extremo, desde el presupuesto inicial hasta la entrega. Desarrollo de habilidades clave de comunicación directa con clientes, organización de plazos exigentes y resolución eficiente de problemas técnicos en obra.",
      stack: ["Gestión de Proyectos", "Diseño", "Presupuestos"],
      color: "var(--pastel-rust)"
    }
  ];

  const projects = [
    {
      title: "Mi Transfer",
      description: "Aplicación web de transferencia de archivos P2P segura. Permite enviar y recibir archivos de cualquier tamaño de manera directa sin servidores intermedios, conectando dispositivos mediante WebRTC (PeerJS). Incluye chat en tiempo real, soporte de idiomas y emparejamiento rápido con códigos QR.",
      tags: ["WebRTC", "PeerJS", "JavaScript", "P2P"],
      tagColor: "var(--pastel-yellow)",
      github: "https://github.com/3ds0m/minigpt", /* Note: User can change it later if they want to */
      demo: "https://mitransfer.vercel.app/",
    },
    {
      title: "MiniGPT Español",
      description: "Implementación desde cero de un modelo Generative Pre-trained Transformer (Decoder-only) en PyTorch para la generación de texto en español a nivel de caracteres. Soporta auto-atención multi-cabeza y muestreo por temperatura.",
      tags: ["PyTorch", "Python", "Transformers", "Deep Learning"],
      tagColor: "var(--pastel-mint)",
      github: "https://github.com/3ds0m/minigpt",
      demo: "",
    },
    {
      title: "Restaurante Vintage",
      description: "Sitio web interactivo de prueba para un restaurante tradicional ficticio, utilizado como plantilla comercial para captación de clientes de hostelería. Diseñado con una tipografía clásica, paleta de colores beige/verde oscuro, animaciones AOS y sección de reservas.",
      tags: ["Bootstrap 5", "AOS Animations", "Web Design", "Responsive"],
      tagColor: "var(--pastel-rust)",
      github: "https://github.com",
      demo: "https://restaurantevintage.vercel.app/",
    },
  ];

  const skillGroups = [
    {
      category: "Lenguajes",
      skills: ["JavaScript", "C#", "Java", "Python", "Perl", "HTML", "CSS", "Thymeleaf", "DTD", "XSD"],
    },
    {
      category: "Frameworks & Backend",
      skills: ["Next.js", "React", "Node.js", "Spring Boot", ".NET", "FastAPI", "Angular", "Express", "Bootstrap"],
    },
    {
      category: "Bases de Datos & Cloud",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Azure", "AWS", "Vercel", "Railway", "Render", "VPS"],
    },
    {
      category: "Herramientas & Testing",
      skills: ["Docker", "Docker Compose", "Kubernetes", "Git & GitHub", "Jira", "IntelliJ", "VS Code", "Cursor", "Postman", "Selenium", "Jest", "Pytest", "JUnit"],
    }
  ];

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <a href="#hero">⚡ edson.dev</a>
          </div>
          <div className={styles.navLinks}>
            <a href="#about">Sobre Mí</a>
            <a href="#experience">Experiencia</a>
            <a href="#projects">Proyectos</a>
            <a href="#skills">Habilidades</a>
            <a href="#contact">Contacto</a>
            <button 
              onClick={toggleTheme} 
              className={styles.themeToggle} 
              aria-label="Toggle Theme"
              title="Cambiar Tema"
            >
              {isDark ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatarBgPattern}></div>
            <Image 
              src="/avatar.png" 
              alt="Avatar de Edson Gonzales" 
              width={160} 
              height={160} 
              className={styles.avatarImage}
              priority
            />
          </div>
          <p className={styles.heroGreeting}>{greeting}</p>
          <h1 className={styles.heroTitle}>
            Soy <span className={styles.highlight}>Edson Gonzales</span>.
          </h1>
          <h2 className={styles.heroSubtitle}>
            Desarrollador Full Stack enfocado en construir soluciones robustas, limpias y funcionales.
          </h2>
          <div className={styles.heroCta}>
            <a href="#projects" className={styles.btnPrimary}>Ver Proyectos</a>
            <a href="#contact" className={styles.btnSecondary}>Hablemos</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionCategory}>01. Sobre Mí</p>
          <h2 className={styles.sectionTitle}>Filosofía & Perfil</h2>
        </div>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutCardFull}>
            <p className={styles.aboutTextBig}>
              Persona de rápido aprendizaje, dedicada y comprometida. Destaco por mi capacidad de trabajo en equipo, responsabilidad, puntualidad y empatía, lo que me permite colaborar de forma efectiva con clientes y compañeros de desarrollo para crear un ambiente laboral positivo.
            </p>
            <div className={styles.educationBox}>
              <div className={styles.eduIcon}>🎓</div>
              <div>
                <h4>Grado Superior en Desarrollo de Aplicaciones Web (DAW)</h4>
                <p>IES Francisco de Quevedo | 2023 - 2025</p>
              </div>
            </div>
            <div className={styles.certificationBox}>
              <div className={styles.certIcon}>🗣️</div>
              <div>
                <h4>Inglés Nivel C1 (Certificado)</h4>
                <p>Capacidad para trabajar y comunicarme fluidamente en entornos internacionales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={styles.experienceSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionCategory}>02. Trayectoria</p>
          <h2 className={styles.sectionTitle}>Experiencia Laboral</h2>
        </div>
        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.timelineDot} style={{ backgroundColor: exp.color }}></div>
              <div className={styles.timelineContent}>
                <span className={styles.timelinePeriod}>{exp.period}</span>
                <h3 className={styles.timelineRole}>
                  {exp.role} <span className={styles.timelineCompany}>@ {exp.company}</span>
                </h3>
                <p className={styles.timelineDescription}>{exp.description}</p>
                <div className={styles.timelineStack}>
                  {exp.stack.map((tech, tIdx) => (
                    <span key={tIdx} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projectsSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionCategory}>03. Mi Trabajo</p>
          <h2 className={styles.sectionTitle}>Proyectos Seleccionados</h2>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <article key={idx} className={styles.projectCard}>
              <div 
                className={styles.projectHeaderBadge} 
                style={{ backgroundColor: project.tagColor }}
              >
                {project.title.substring(0, 2)}
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.projectTag}>
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a href={project.github} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    Código
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                  </a>
                  {project.demo && (
                    <a href={project.demo} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                      Demo
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.skillsSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionCategory}>04. Mi Caja de Herramientas</p>
          <h2 className={styles.sectionTitle}>Habilidades Técnicas</h2>
        </div>
        <div className={styles.skillsContainer}>
          {skillGroups.map((group, groupIdx) => (
            <div key={groupIdx} className={styles.skillGroupCard}>
              <h3 className={styles.skillGroupTitle}>{group.category}</h3>
              <div className={styles.skillsList}>
                {group.skills.map((skill, sIdx) => {
                  const pastelColors = [
                    "var(--pastel-lilac)", 
                    "var(--pastel-blue)", 
                    "var(--pastel-pink)", 
                    "var(--pastel-yellow)", 
                    "var(--pastel-rust)", 
                    "var(--pastel-mint)"
                  ];
                  const color = pastelColors[(sIdx + groupIdx) % pastelColors.length];
                  
                  return (
                    <span 
                      key={sIdx} 
                      className={styles.skillChip} 
                      style={{ "--hover-color": color }}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionCategory}>05. Hablemos</p>
          <h2 className={styles.sectionTitle}>¿Listo para empezar un proyecto?</h2>
        </div>
        <div className={styles.contactLayout}>
          <div className={styles.contactInfo}>
            <h3>Información de Contacto</h3>
            <p>No dudes en comunicarte conmigo para oportunidades laborales, colaboraciones freelancing o cualquier consulta técnica.</p>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>✉️</span>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:edson7mayo@gmail.com">edson7mayo@gmail.com</a></p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📞</span>
                <div>
                  <strong>Teléfono</strong>
                  <p><a href="tel:+34642229726">+34 642 22 97 26</a></p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <div>
                  <strong>Ubicación</strong>
                  <p>Madrid, España</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactCard}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tu nombre completo"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="tucorreo@ejemplo.com"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Hola Edson, me interesa tu perfil para..."
                  rows="4"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={styles.btnSubmit}
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? "Enviando..." : "Enviar Mensaje"}
              </button>
              {formStatus === "success" && (
                <p className={styles.successMessage}>
                  ¡Mensaje enviado con éxito! Te responderé lo antes posible. 🚀
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerGreeting}>
            <span className={styles.circadianGreeting}>{greeting}</span> 
            <span>Gracias por visitar mi portafolio.</span>
          </div>
          
          <div className={styles.footerSocials}>
            <a href="https://github.com/3ds0m" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/reynaldo-edson-gonzales-ramos-149481332/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="mailto:edson7mayo@gmail.com" aria-label="Email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>

          <p className={styles.footerCredits}>
            Inspirado estéticamente en la esencia de seanhalpin.xyz
            <br />
            Hecho con ♥ usando Next.js & Vanilla CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
