"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Terminal, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  Code,
  Layers,
  Cpu,
  Sun,
  Moon,
  Download
} from "lucide-react";

// --- Custom SVG Brand Icons ---
function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// --- 3D Parallax Tilt Card Component ---
function CardTile({ children, className = "", onClick, style = {}, highlightBorder = false }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const rotateY = ((x - xc) / xc) * 3;
    const rotateX = -((y - yc) / yc) * 3;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.96 },
        visible: { opacity: 1, scale: 1 }
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative bg-[var(--color-tile-bg)] border border-[var(--color-brand-border)]/60 shadow-tile rounded-none overflow-hidden transition-all duration-300 ease-out select-none ${
        highlightBorder ? "hover:border-[var(--color-brand-secondary)]" : "hover:border-[var(--color-brand-accent)]"
      } ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        ...style
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

// --- Translation Data ---
const t = {
  es: {
    presentation: "01 / PRESENTACIÓN",
    profile: "02 / PERFIL PROFESIONAL",
    tech: "03 / TECNOLOGÍAS",
    projects: "04 / PROYECTOS DESTACADOS",
    methodology: "05 / METODOLOGÍA DE TRABAJO",
    timeline: "06 / HISTORIAL LABORAL",
    clock: "07 / HORA & CV",
    contact: "08 / CONTACTAR (CONSOLA)",
    available: "DISPONIBLE PARA PROYECTOS / FREELANCE",
    location: "MADRID, ESPAÑA",
    profileText: "Desarrollador de software orientado a backend y full stack, con experiencia en desarrollo y optimización de servicios web, APIs, bases de datos, cloud e infraestructura. He trabajado con Java, Spring Boot, C#, Node.js, React, PostgreSQL, Docker y Azure, participando en proyectos empresariales, automatización de procesos y desarrollo web freelance de principio a fin.",
    studies: "ESTUDIOS: DAW (IES FRANCISCO DE QUEVEDO)",
    languages: "CERTIFICACIONES: INGLÉS C1 (MCER)",
    experience: "EXPERIENCIA",
    yearsStat: "AÑOS DE EXPERIENCIA COMERCIAL Y TÉCNICA",
    projectsStat: "PROYECTOS TÉCNICOS COMPLETOS",
    runningCats: "ROTANDO CATEGORÍAS EN SISTEMA",
    sourceCode: "[ CÓDIGO_FUENTE ]",
    liveDemo: "[ DEMO_EN_VIVO ]",
    myProcess: "MI PROCESO",
    structure: "01 / ESTRUCTURAR",
    structureDesc: "Analizar requisitos y mapear la arquitectura lógica del sistema.",
    code: "02 / CODIFICAR",
    codeDesc: "Escritura de código limpio, testeable y aplicando principios de optimización.",
    validate: "03 / VALIDAR",
    validateDesc: "Validación e integración mediante pruebas de caja negra, integradas y unitarias.",
    deploy: "04 / DESPLEGAR",
    deployDesc: "Configuración CI/CD y publicación automatizada en entornos de producción resilientes.",
    focus: "Enfoque en la robustez y limpieza",
    period: "PERIODO: 2020 - PRESENTE",
    downloadLabel: "DESCARGAR CV ATS",
    submitLabel: "EJECUTAR_PROPUESTA.SH",
    executing: "EJECUTANDO...",
    contactLogs: "// Logs de la transmisión activa...",
    formRequired: "ERROR: Todos los campos son requeridos para la transmisión.",
    formName: "Nombre",
    formEmail: "Email",
    formMsg: "Mensaje",
    formWriteName: "Escribe tu nombre",
    formWriteEmail: "tucorreo@ejemplo.com",
    formWriteMsg: "Escribe tu mensaje...",
    formLogsGreeting: "Iniciando handshake seguro con edson7mayo@gmail.com...",
    formLogsPacking: "Empaquetando datos del remitente...",
    formLogsSending: "Enviando mensaje...",
    formLogsSuccess: "PROCESO EXITOSO: Mensaje enviado con código 200 OK.",
    formLogsSuccessMsg: "Pronto estaré en contacto contigo. ¡Gracias!",
    footerTitle: "REJILLA MODULAR // MODO CLARO: TACTILE PAPER // MODO OSCURO: SWISS NEO-METRO",
    greetingsDay: "BUENOS DÍAS :)",
    greetingsPM: "BUENAS TARDES :)",
    greetingsNight: "BUENAS NOCHES :)",
    roleLabel: "DESARROLLADOR WEB FULL STACK",
    roleDesc: "Especializado en el diseño e implementación de productos interactivos robustos, modulares y de alto rendimiento."
  },
  en: {
    presentation: "01 / PRESENTATION",
    profile: "02 / PROFESSIONAL PROFILE",
    tech: "03 / TECHNOLOGIES",
    projects: "04 / FEATURED PROJECTS",
    methodology: "05 / WORK METHODOLOGY",
    timeline: "06 / WORK TIMELINE",
    clock: "07 / TIME & CV",
    contact: "08 / CONTACT (TERMINAL)",
    available: "AVAILABLE FOR PROJECTS / FREELANCE",
    location: "MADRID, SPAIN",
    profileText: "Software developer oriented to backend and full stack, experienced in development and optimization of web services, APIs, databases, cloud, and infrastructure. Worked with Java, Spring Boot, C#, Node.js, React, PostgreSQL, Docker, and Azure, participating in enterprise projects, process automation, and end-to-end freelance web development.",
    studies: "STUDIES: DAW (IES FRANCISCO DE QUEVEDO)",
    languages: "CERTIFICATIONS: ENGLISH C1 (CEFR)",
    experience: "EXPERIENCE",
    yearsStat: "YEARS OF COMMERCIAL & TECHNICAL EXPERIENCE",
    projectsStat: "COMPLETED TECHNICAL PROJECTS",
    runningCats: "ROTATING SYSTEM CATEGORIES",
    sourceCode: "[ SOURCE_CODE ]",
    liveDemo: "[ LIVE_DEMO ]",
    myProcess: "MY PROCESS",
    structure: "01 / STRUCTURE",
    structureDesc: "Analyze requirements and map the system's logical architecture.",
    code: "02 / CODE",
    codeDesc: "Write clean, testable, and optimized code following best practices.",
    validate: "03 / VALIDATE",
    validateDesc: "Validate and integrate via black-box, integration, and unit tests.",
    deploy: "04 / DEPLOY",
    deployDesc: "CI/CD configuration and automated deployment to resilient production environments.",
    focus: "Focused on robustness and clean code",
    period: "PERIOD: 2020 - PRESENT",
    downloadLabel: "DOWNLOAD ATS CV",
    submitLabel: "EXECUTE_PROPOSAL.SH",
    executing: "EXECUTING...",
    contactLogs: "// Active transmission logs...",
    formRequired: "ERROR: All fields are required for transmission.",
    formName: "Name",
    formEmail: "Email",
    formMsg: "Message",
    formWriteName: "Enter your name",
    formWriteEmail: "yourmail@example.com",
    formWriteMsg: "Write your message...",
    formLogsGreeting: "Initiating secure handshake with edson7mayo@gmail.com...",
    formLogsPacking: "Packaging sender data...",
    formLogsSending: "Sending message...",
    formLogsSuccess: "SUCCESS: Message sent with code 200 OK.",
    formLogsSuccessMsg: "I will get back to you shortly. Thank you!",
    footerTitle: "MODULAR GRID // LIGHT MODE: TACTILE PAPER // DARK MODE: SWISS NEO-METRO",
    greetingsDay: "GOOD MORNING :)",
    greetingsPM: "GOOD AFTERNOON :)",
    greetingsNight: "GOOD EVENING :)",
    roleLabel: "FULL STACK WEB DEVELOPER",
    roleDesc: "Specialized in designing and implementing robust, modular, and high-performance interactive products."
  }
};

const techCategories = [
  {
    name: "Lenguajes / Languages",
    items: ["Java", "C#", "JavaScript", "Thymeleaf", "Perl", "Python", "HTML", "DTD", "XSD", "CSS"]
  },
  {
    name: "Frameworks",
    items: ["Springboot", ".NET", "Bootstrap", "Next.Js", "FastAPI", "React", "Angular", "Node JS"]
  },
  {
    name: "BBDD / Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    name: "Cloud",
    items: ["AWS", "Azure", "VPS", "Vercel", "Railway", "Render"]
  },
  {
    name: "Testing",
    items: ["Jest", "Pytest", "JUnit", "Docker Compose", "Kubernetes"]
  },
  {
    name: "Herramientas / Tools",
    items: ["Docker", "Git", "Github", "Jira", "IntelliJ", "VSCode", "Cursor", "Canva", "Excel", "Selenium", "Postman", "API Gateway", "Kong", "Kafka", "UIPath", "Claude Code", "TRAE"]
  }
];

const projectsData = {
  es: [
    {
      title: "Mi Transfer",
      subtitle: "P2P WebRTC File Share",
      description: "Aplicación de transferencia de archivos punto a punto (P2P) cifrada y de alta velocidad. Conectividad directa entre navegadores sin almacenar datos en servidores de terceros mediante WebRTC y emparejamiento por códigos QR.",
      tags: ["WebRTC", "PeerJS", "JavaScript", "P2P", "Vercel"],
      tagColor: "var(--color-pastel-yellow)",
      github: "https://github.com/3ds0m/minigpt",
      demo: "https://mitransfer.vercel.app/"
    },
    {
      title: "Casino Royale",
      subtitle: "Premium Simulator",
      description: "Simulador de casino virtual en tiempo real. Recrea mecánicas de Blackjack, Ruleta Europea y Dados con un motor provably fair para garantizar la transparencia del juego. Persistencia y balance de saldo local (LocalStorage).",
      tags: ["React", "Vite", "Tailwind CSS", "LocalStorage"],
      tagColor: "var(--color-pastel-rust)",
      github: "https://github.com/3ds0m/CasinoRoyale",
      demo: "https://k-sino.vercel.app/"
    },
    {
      title: "MiniGPT Español",
      subtitle: "Modelos de Lenguaje PyTorch",
      description: "Implementación desde cero de un Transformer (Decoder-only) entrenado en PyTorch para generación de textos coherentes en español a nivel de caracteres. Configurable en tamaño de contexto, cabezales de atención y muestreo por temperatura.",
      tags: ["PyTorch", "Python", "Transformers", "Deep Learning"],
      tagColor: "var(--color-pastel-mint)",
      github: "https://github.com/3ds0m/minigpt",
      demo: ""
    }
  ],
  en: [
    {
      title: "Mi Transfer",
      subtitle: "P2P WebRTC File Share",
      description: "High-speed encrypted peer-to-peer (P2P) file transfer application. Direct browser-to-browser connections without server storing using WebRTC and QR code pairing.",
      tags: ["WebRTC", "PeerJS", "JavaScript", "P2P", "Vercel"],
      tagColor: "var(--color-pastel-yellow)",
      github: "https://github.com/3ds0m/minigpt",
      demo: "https://mitransfer.vercel.app/"
    },
    {
      title: "Casino Royale",
      subtitle: "Premium Simulator",
      description: "Real-time virtual casino simulator. Recreates Blackjack, European Roulette, and Dice using a provably fair engine to guarantee transparency. Local balance persistence.",
      tags: ["React", "Vite", "Tailwind CSS", "LocalStorage"],
      tagColor: "var(--color-pastel-rust)",
      github: "https://github.com/3ds0m/CasinoRoyale",
      demo: "https://k-sino.vercel.app/"
    },
    {
      title: "MiniGPT Español",
      subtitle: "PyTorch Language Model",
      description: "From-scratch PyTorch implementation of a Decoder-only Transformer trained to generate coherent Spanish text at a character level. Custom context size, attention heads, and sampling temperature.",
      tags: ["PyTorch", "Python", "Transformers", "Deep Learning"],
      tagColor: "var(--color-pastel-mint)",
      github: "https://github.com/3ds0m/minigpt",
      demo: ""
    }
  ]
};

const experiencesData = {
  es: [
    {
      role: "Freelance",
      company: "Proyectos Propios",
      period: "JUN 2025 - PRESENTE",
      description: "Desarrollo de aplicaciones web y CRM a medida para autónomos y pequeñas empresas con Next.js, React, Node.js y WordPress. Gestión integral: requisitos, presupuesto, arquitectura, desarrollo, despliegue y entrega. Implementación de soluciones full-stack enfocadas en necesidades de negocio.",
      stack: ["Next.js", "React", "Node.js", "WordPress", "CRM"],
      color: "var(--color-pastel-mint)"
    },
    {
      role: "Desarrollador Backend",
      company: "Teleperformance",
      period: "MAR 2025 - JUN 2025",
      description: "Administración de infraestructura cloud en Azure, bases de datos y Windows Server para informes de calidad y procesos internos. Desarrollo de herramientas internas en C# y scripts en Perl para auditoría y evaluación automatizada. Creación de automatizaciones RPA con UiPath para optimizar procesos empresariales.",
      stack: ["C#", "Azure", "Perl", "UiPath", "Windows Server", "SQL"],
      color: "var(--color-pastel-blue)"
    },
    {
      role: "Desarrollador Backend Semi-Senior",
      company: "Bitel (Lima - Perú)",
      period: "FEB 2020 - ABR 2023",
      description: "Desarrollo y mantenimiento de servicios web internos y de atención al cliente. Optimización del rendimiento para reducir tiempos de carga y mejorar la estabilidad de los servicios. Migración de bases de datos y migración de monolitos Java a C#. Automatización de validaciones de calidad y apoyo en QA con Jenkins y Postman. Tareas de infraestructura, servidores, NAS y cloud. Trabajo en equipo de 10 personas.",
      stack: ["Java", "C#", "Spring Boot", "React", "Node.js", "PostgreSQL", "Docker", "Jenkins", "Azure", "Postman", "Nginx", "Apache"],
      color: "var(--color-pastel-rust)"
    }
  ],
  en: [
    {
      role: "Freelance Developer",
      company: "Independent Projects",
      period: "JUN 2025 - PRESENT",
      description: "Development of custom web applications and bespoke CRMs for freelancers and small businesses with Next.js, React, Node.js, and WordPress. End-to-end management: requirements, budgeting, architecture, development, deployment, and delivery. Business-oriented full-stack solutions.",
      stack: ["Next.js", "React", "Node.js", "WordPress", "CRM"],
      color: "var(--color-pastel-mint)"
    },
    {
      role: "Backend Developer",
      company: "Teleperformance",
      period: "MAR 2025 - JUN 2025",
      description: "Administration of cloud infrastructure in Azure, databases, and Windows Server for quality reporting and internal processes. Development of internal tooling in C# and automation scripts in Perl for automated auditing and evaluations. Building RPA automations with UiPath.",
      stack: ["C#", "Azure", "Perl", "UiPath", "Windows Server", "SQL"],
      color: "var(--color-pastel-blue)"
    },
    {
      role: "Semi-Senior Backend Developer",
      company: "Bitel (Lima - Peru)",
      period: "FEB 2020 - APR 2023",
      description: "Development and maintenance of internal web services and customer care platforms. Performance optimization to reduce latency and enhance service stability. Database migrations and modernizing Java monoliths to C#. QA validation automation with Jenkins and Postman. Infrastructure, server maintenance, NAS, and cloud in a collaborative team of 10 engineers.",
      stack: ["Java", "C#", "Spring Boot", "React", "Node.js", "PostgreSQL", "Docker", "Jenkins", "Azure", "Postman", "Nginx", "Apache"],
      color: "var(--color-pastel-rust)"
    }
  ]
};

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");
  const [greetingKey, setGreetingKey] = useState("day");
  const [lang, setLang] = useState("es");
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeExperienceIdx, setActiveExperienceIdx] = useState(0);
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  // Terminal state
  const [terminalForm, setTerminalForm] = useState({ name: "", email: "", message: "" });
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  // Load and apply theme, clock updates, and tech rotation
  useEffect(() => {
    setMounted(true);
    
    // Theme setup: Default to light mode (Tactile Paper) unless theme is explicitly saved as dark
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      if (!savedTheme) {
        localStorage.setItem("theme", "light");
      }
    }

    const updateTime = () => {
      const date = new Date();
      const hh = String(date.getHours()).padStart(2, "0");
      const mm = String(date.getMinutes()).padStart(2, "0");
      const ss = String(date.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
      
      const h = date.getHours();
      if (h >= 6 && h < 12) {
        setGreetingKey("day");
      } else if (h >= 12 && h < 20) {
        setGreetingKey("pm");
      } else {
        setGreetingKey("night");
      }
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Rotate tech stack categories every 3.5 seconds
    const techInterval = setInterval(() => {
      setActiveCategoryIdx((prev) => (prev + 1) % techCategories.length);
    }, 3500);

    return () => {
      clearInterval(interval);
      clearInterval(techInterval);
    };
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

  // Terminal contact form handler
  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    if (!terminalForm.name || !terminalForm.email || !terminalForm.message) {
      setTerminalLogs(prev => [
        ...prev, 
        { type: "error", text: t[lang].formRequired }
      ]);
      return;
    }

    setIsSubmitting(true);
    setTerminalLogs(prev => [
      ...prev, 
      { type: "system", text: `guest@edson.dev:~$ ./submit_proposal.sh` },
      { type: "info", text: t[lang].formLogsGreeting }
    ]);

    setTimeout(() => {
      setTerminalLogs(prev => [
        ...prev,
        { type: "info", text: t[lang].formLogsPacking },
        { type: "info", text: `${t[lang].formLogsSending} (${terminalForm.name})...` }
      ]);

      setTimeout(() => {
        setTerminalLogs(prev => [
          ...prev,
          { type: "success", text: t[lang].formLogsSuccess },
          { type: "success", text: t[lang].formLogsSuccessMsg }
        ]);
        setTerminalForm({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      }, 1000);
    }, 1000);
  };

  const handleTerminalInputChange = (e) => {
    const { name, value } = e.target;
    setTerminalForm(prev => ({ ...prev, [name]: value }));
  };

  if (!mounted) return null;

  const currentProjects = projectsData[lang];
  const currentExperiences = experiencesData[lang];
  
  const greetingText = greetingKey === "day" ? t[lang].greetingsDay :
                       greetingKey === "pm" ? t[lang].greetingsPM :
                       t[lang].greetingsNight;

  return (
    <div className="w-full max-w-[1250px] mx-auto px-4 py-8 flex flex-col min-h-screen justify-between selection:bg-[var(--color-brand-accent)] selection:text-white">
      
      {/* --- Simplified Editorial Header --- */}
      <header className="w-full py-6 flex justify-between items-center border-b border-[var(--color-brand-border)] mb-10">
        <div className="font-headings font-extrabold text-2xl tracking-tight text-[var(--color-text-main)]">
          EDSON GONZALES
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6 font-tech text-xs">
          <a 
            href="mailto:edson7mayo@gmail.com" 
            className="hover:text-[var(--color-brand-accent)] transition-colors hidden md:inline text-[var(--color-text-main)]/70"
            id="header-email-link"
          >
            [ edson7mayo@gmail.com ]
          </a>
          
          {/* Language Selector */}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="px-2.5 py-1.5 border border-[var(--color-brand-border)] hover:border-[var(--color-brand-accent)] hover:text-[var(--color-brand-accent)] text-[var(--color-text-main)] transition-all cursor-pointer font-tech text-[10px] font-bold select-none"
            id="lang-selector-btn"
            title="Cambiar idioma / Change language"
          >
            {lang === "es" ? "ENGLISH 🇬🇧" : "ESPAÑOL 🇪🇸"}
          </button>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="p-2 border border-[var(--color-brand-border)] hover:border-[var(--color-brand-accent)] hover:text-[var(--color-brand-accent)] text-[var(--color-text-main)] transition-all cursor-pointer flex items-center gap-2 select-none"
            aria-label="Toggle Theme"
            id="theme-toggle-btn"
            title="Cambiar modo claro/oscuro"
          >
            {isDark ? (
              <>
                <Sun size={14} />
                <span className="hidden sm:inline">CLARO</span>
              </>
            ) : (
              <>
                <Moon size={14} />
                <span className="hidden sm:inline">OSCURO</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* --- Main 12-Column Asymmetric Grid Container --- */}
      <main
        id="main-portfolio-grid"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full flex-grow mb-12"
      >
        
        {/* ==========================================
            TILE A: HERO PRESENTATION TILE (Size: 6x2)
           ========================================== */}
        <section id="sec-presentation" className="lg:col-span-6 lg:row-span-2">
          <CardTile className="p-8 flex flex-col justify-between min-h-[360px] h-full">
            <div className="flex justify-between items-start">
              <span className="font-tech text-[10px] text-[var(--color-brand-accent)] bg-[var(--color-brand-border)]/40 px-2 py-0.5 font-bold tracking-wider">
                {t[lang].presentation}
              </span>
            </div>
            
            <div className="my-6">
              <p className="font-tech text-xs text-[var(--color-brand-accent)] mb-2 font-bold tracking-widest uppercase">
                // {t[lang].roleLabel}
              </p>
              <h1 className="font-headings font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[var(--color-text-main)] leading-none uppercase">
                EDSON<br/>GONZALES
              </h1>
              <p className="font-body text-sm text-[var(--color-text-main)]/70 mt-4 leading-relaxed max-w-[480px]">
                {t[lang].roleDesc}
              </p>
            </div>
            
            <div className="flex items-center gap-3 text-xs font-tech text-[var(--color-text-main)]/60">
              <span className="w-2.5 h-2.5 bg-green-500 inline-block animate-pulse"></span>
              {t[lang].available}
            </div>
          </CardTile>
        </section>

        {/* ==========================================
            TILE B: PROFILE DETAIL TILE (Size: 6x1)
           ========================================== */}
        <section id="sec-profile" className="lg:col-span-6 lg:row-span-1">
          <CardTile className="p-8 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start">
              <span className="font-tech text-[10px] text-[var(--color-brand-accent)] bg-[var(--color-brand-border)]/40 px-2 py-0.5 font-bold tracking-wider">
                {t[lang].profile}
              </span>
              <span className="font-tech text-xs text-[var(--color-text-main)]/40">{t[lang].location}</span>
            </div>
            
            <p className="font-body text-sm text-[var(--color-text-main)]/80 my-4 leading-relaxed">
              {t[lang].profileText}
            </p>

            <div className="flex gap-4 font-tech text-[10px] text-[var(--color-brand-accent)]/80 font-bold">
              <span>{t[lang].studies}</span>
              <span className="text-[var(--color-brand-border)]">|</span>
              <span>{t[lang].languages}</span>
            </div>
          </CardTile>
        </section>

        {/* ==========================================
            TILE C: EXPERIENCE STAT (Size: 3x1)
           ========================================== */}
        <section id="sec-stats" className="lg:col-span-3 lg:row-span-1">
          <CardTile 
            style={{ 
              backgroundColor: "var(--color-tile-highlight-bg)", 
              color: "var(--color-tile-highlight-text)" 
            }}
            className="p-6 flex flex-col justify-between h-full"
          >
            <span className="font-tech text-[10px] tracking-wider bg-black/10 px-2 py-0.5 w-max font-bold">
              {t[lang].experience.toUpperCase()}
            </span>
            <div className="my-2">
              <span className="font-headings font-extrabold text-5xl tracking-tighter leading-none">
                +4
              </span>
              <p className="font-tech text-[11px] font-extrabold tracking-wider leading-tight uppercase mt-1">
                {t[lang].yearsStat}
              </p>
            </div>
            <span className="font-tech text-[9px] opacity-80">{t[lang].projectsStat}</span>
          </CardTile>
        </section>

        {/* ==========================================
            TILE D: ROTATING TECH STACK (Size: 3x1)
           ========================================== */}
        <section id="sec-technologies" className="lg:col-span-3 lg:row-span-1">
          <CardTile className="p-6 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start">
              <span className="font-tech text-[10px] text-[var(--color-brand-accent)] bg-[var(--color-brand-border)]/40 px-2 py-0.5 font-bold tracking-wider w-max">
                {t[lang].tech}
              </span>
              {/* Small indicators for rotating categories */}
              <div className="flex gap-1 mt-1">
                {techCategories.map((_, idx) => (
                  <span 
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                      activeCategoryIdx === idx ? "bg-[var(--color-brand-accent)]" : "bg-[var(--color-brand-border)]"
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="my-2 min-h-[65px] overflow-hidden flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategoryIdx}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-1"
                >
                  <span className="font-tech text-[9.5px] uppercase tracking-widest text-[var(--color-brand-accent)] font-bold block">
                    {techCategories[activeCategoryIdx].name}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {techCategories[activeCategoryIdx].items.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="font-tech text-[8px] bg-[var(--color-brand-border)]/20 text-[var(--color-text-main)] border border-[var(--color-brand-border)] px-1.5 py-0.5 hover:border-[var(--color-brand-accent)] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <span className="font-tech text-[9px] text-[var(--color-text-main)]/40 uppercase font-bold">
              {t[lang].runningCats}
            </span>
          </CardTile>
        </section>

        {/* ==========================================
            TILE E: INTERACTIVE PROJECT SHOWCASE (Size: 8x2)
           ========================================== */}
        <section id="sec-projects" className="lg:col-span-8 lg:row-span-2">
          <CardTile className="p-8 flex flex-col justify-between min-h-[420px] h-full">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-[var(--color-brand-border)]/80 pb-4">
              <span className="font-tech text-[10px] text-[var(--color-brand-accent)] bg-[var(--color-brand-border)]/40 px-2 py-0.5 font-bold tracking-wider w-max">
                {t[lang].projects}
              </span>
              
              {/* Visual Tabs */}
              <div className="flex flex-wrap gap-2 font-tech text-xs">
                {currentProjects.map((proj, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveProjectIdx(idx)}
                    className={`px-3 py-1 border transition-all cursor-pointer ${
                      activeProjectIdx === idx 
                        ? "border-[var(--color-brand-accent)] bg-[var(--color-brand-accent)] text-white font-bold"
                        : "border-[var(--color-brand-border)] text-[var(--color-text-main)]/60 hover:text-[var(--color-text-main)] hover:border-[var(--color-brand-border)]/80"
                    }`}
                    id={`project-tab-btn-${idx}`}
                  >
                    {proj.title.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Content Display */}
            <div className="my-6 flex-grow flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProjectIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                >
                  <div className="lg:col-span-7">
                    <span className="font-tech text-xs text-[var(--color-brand-accent)] font-bold tracking-widest block uppercase">
                      {currentProjects[activeProjectIdx].subtitle}
                    </span>
                    <h3 className="font-headings font-extrabold text-3xl tracking-tight text-[var(--color-text-main)] mt-1 uppercase">
                      {currentProjects[activeProjectIdx].title}
                    </h3>
                    <p className="font-body text-sm text-[var(--color-text-main)]/70 mt-3 leading-relaxed">
                      {currentProjects[activeProjectIdx].description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {currentProjects[activeProjectIdx].tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="font-tech text-[10px] bg-[var(--color-brand-border)]/20 border border-[var(--color-brand-border)] px-2 py-0.5 text-[var(--color-text-main)]/80"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative Visual/Wireframe Asset for project */}
                  <div className="lg:col-span-5 h-[160px] bg-[var(--color-brand-border)]/20 border border-[var(--color-brand-border)]/60 flex flex-col justify-between p-4 relative overflow-hidden group/asset">
                    <div className="absolute inset-0 bg-radial-gradient from-[var(--color-brand-accent)]/5 to-transparent pointer-events-none"></div>
                    
                    {/* Wireframe grids */}
                    <div className="absolute -right-4 -bottom-4 w-28 h-28 border border-dashed border-[var(--color-brand-accent)]/20 rounded-none transform rotate-12 transition-transform group-hover/asset:rotate-45 duration-700"></div>
                    
                    <div className="flex justify-between items-start z-10">
                      <Code size={18} className="text-[var(--color-brand-accent)]" />
                      <span className="font-tech text-[9px] text-[var(--color-brand-secondary)] font-bold">PREVIEW.SH</span>
                    </div>
                    
                    <div className="z-10">
                      <span className="font-tech text-[10px] text-[var(--color-text-main)]/30 block tracking-widest uppercase font-bold">
                        STATUS // ACTIVE
                      </span>
                      <span className="font-headings font-bold text-xl text-[var(--color-text-main)]/80 block mt-1 tracking-tight">
                        {currentProjects[activeProjectIdx].title.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Action Links */}
            <div className="flex gap-4 border-t border-[var(--color-brand-border)]/80 pt-4 font-tech text-xs">
              <a 
                href={currentProjects[activeProjectIdx].github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[var(--color-text-main)] flex items-center gap-1.5 hover:text-[var(--color-brand-accent)] transition-colors"
                id={`project-github-link-${activeProjectIdx}`}
              >
                <GithubIcon className="w-3.5 h-3.5" /> {t[lang].sourceCode}
              </a>
              {currentProjects[activeProjectIdx].demo && (
                <a 
                  href={currentProjects[activeProjectIdx].demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[var(--color-brand-accent)] flex items-center gap-1.5 hover:text-[var(--color-brand-secondary)] transition-colors font-bold"
                  id={`project-demo-link-${activeProjectIdx}`}
                >
                  <ExternalLink size={14} /> {t[lang].liveDemo}
                </a>
              )}
            </div>
          </CardTile>
        </section>

        {/* ==========================================
            TILE F: PRODUCTION PROCESS (Size: 4x2)
           ========================================== */}
        <section id="sec-methodology" className="lg:col-span-4 lg:row-span-2">
          <CardTile className="p-8 flex flex-col justify-between h-full">
            <span className="font-tech text-[10px] text-[var(--color-brand-accent)] bg-[var(--color-brand-border)]/40 px-2 py-0.5 font-bold tracking-wider w-max">
              {t[lang].methodology}
            </span>
            
            <div className="my-6 flex-grow flex flex-col justify-center">
              <h3 className="font-headings font-extrabold text-2xl tracking-tight text-[var(--color-text-main)] mb-6 uppercase">
                {t[lang].myProcess}
              </h3>
              
              <div className="space-y-4 font-tech text-xs">
                <div className="border-l-2 border-[var(--color-brand-border)] pl-4 hover:border-[var(--color-brand-accent)] transition-colors py-1">
                  <span className="text-[var(--color-brand-accent)] font-bold">{t[lang].structure}</span>
                  <p className="text-[var(--color-text-main)]/60 font-body text-xs mt-0.5">{t[lang].structureDesc}</p>
                </div>
                <div className="border-l-2 border-[var(--color-brand-border)] pl-4 hover:border-[var(--color-brand-accent)] transition-colors py-1">
                  <span className="text-[var(--color-brand-accent)] font-bold">{t[lang].code}</span>
                  <p className="text-[var(--color-text-main)]/60 font-body text-xs mt-0.5">{t[lang].codeDesc}</p>
                </div>
                <div className="border-l-2 border-[var(--color-brand-border)] pl-4 hover:border-[var(--color-brand-accent)] transition-colors py-1">
                  <span className="text-[var(--color-brand-accent)] font-bold">{t[lang].validate}</span>
                  <p className="text-[var(--color-text-main)]/60 font-body text-xs mt-0.5">{t[lang].validateDesc}</p>
                </div>
                <div className="border-l-2 border-[var(--color-brand-border)] pl-4 hover:border-[var(--color-brand-accent)] transition-colors py-1">
                  <span className="text-[var(--color-brand-accent)] font-bold">{t[lang].deploy}</span>
                  <p className="text-[var(--color-text-main)]/60 font-body text-xs mt-0.5">{t[lang].deployDesc}</p>
                </div>
              </div>
            </div>
            
            <span className="font-tech text-[9px] text-[var(--color-text-main)]/40 uppercase font-bold">{t[lang].focus}</span>
          </CardTile>
        </section>

        {/* ==========================================
            TILE G: EXPERIENCE TIMELINE WIDGET (Size: 6x2)
           ========================================== */}
        <section id="sec-timeline" className="lg:col-span-6 lg:row-span-2">
          <CardTile className="p-8 flex flex-col justify-between min-h-[380px] h-full">
            <div className="flex justify-between items-start border-b border-[var(--color-brand-border)] pb-4 mb-4">
              <span className="font-tech text-[10px] text-[var(--color-brand-accent)] bg-[var(--color-brand-border)]/40 px-2 py-0.5 font-bold tracking-wider">
                {t[lang].timeline}
              </span>
              <span className="font-tech text-xs text-[var(--color-text-main)]/40 uppercase font-bold">{t[lang].experience}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 my-2 flex-grow items-center">
              
              {/* Left selector menu */}
              <div className="sm:col-span-5 flex flex-col gap-2 font-tech text-xs">
                {currentExperiences.map((exp, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveExperienceIdx(idx)}
                    className={`text-left p-2.5 border transition-all cursor-pointer ${
                      activeExperienceIdx === idx 
                        ? "border-[var(--color-brand-accent)] text-[var(--color-text-main)] bg-[var(--color-brand-accent)]/10 font-bold"
                        : "border-[var(--color-brand-border)] text-[var(--color-text-main)]/60 hover:text-[var(--color-text-main)] hover:border-[var(--color-brand-border)]/80"
                    }`}
                    id={`experience-selector-btn-${idx}`}
                  >
                    <span className="text-[10px] text-[var(--color-brand-accent)] block mb-0.5 font-bold">{exp.period}</span>
                    {exp.role.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Right dynamic panel details */}
              <div className="sm:col-span-7 h-full flex flex-col justify-between p-4 bg-[var(--color-brand-border)]/20 border border-[var(--color-brand-border)]/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeExperienceIdx}
                    initial={{ opacity: 0, x: 5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <div>
                      <span className="font-tech text-[9.5px] uppercase tracking-widest block text-[var(--color-brand-accent)] font-bold">
                        {currentExperiences[activeExperienceIdx].company.toUpperCase()}
                      </span>
                      <h4 className="font-headings font-extrabold text-lg text-[var(--color-text-main)] uppercase leading-tight mt-0.5">
                        {currentExperiences[activeExperienceIdx].role}
                      </h4>
                    </div>
                    
                    <p className="font-body text-xs text-[var(--color-text-main)]/70 leading-relaxed">
                      {currentExperiences[activeExperienceIdx].description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {currentExperiences[activeExperienceIdx].stack.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="font-tech text-[9px] bg-[var(--color-brand-border)] text-[var(--color-text-main)] px-1.5 py-0.5 border border-[var(--color-brand-border)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="border-t border-[var(--color-brand-border)] pt-4 flex gap-4 font-tech text-xs text-[var(--color-text-main)]/50">
              <span>{t[lang].period}</span>
            </div>
          </CardTile>
        </section>

        {/* ==========================================
            TILE H: STATUS & CLOCK WIDGET + CV DOWNLOAD (Size: 2x2)
           ========================================== */}
        <section id="sec-clock-cv" className="lg:col-span-2 lg:row-span-2">
          <CardTile className="p-5 flex flex-col justify-between text-center items-center justify-center h-full">
            <span className="font-tech text-[9px] text-[var(--color-brand-accent)] bg-[var(--color-brand-border)]/40 px-2 py-0.5 font-bold tracking-wider w-max">
              {t[lang].clock}
            </span>

            <div className="my-4">
              <Clock size={24} className="text-[var(--color-brand-accent)] mx-auto mb-1.5 animate-pulse" />
              <div className="font-tech font-bold text-xl tracking-tighter text-[var(--color-text-main)]">
                {time || "00:00:00"}
              </div>
              <span className="font-tech text-[9px] text-[var(--color-text-main)]/40 block mt-0.5 uppercase font-bold">
                {t[lang].location}
              </span>
              <div className="font-tech text-[9px] text-[var(--color-brand-accent)] font-bold uppercase leading-tight mt-2">
                {greetingText}
              </div>
            </div>

            <div className="w-full border-t border-[var(--color-brand-border)] pt-3">
              <a
                id="btn-download-cv"
                href="/CV_Edson_Gonzales.pdf"
                download="CV_Edson_Gonzales.pdf"
                className="w-full py-1.5 border border-[var(--color-brand-border)] hover:border-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent)] hover:text-white transition-all duration-300 font-tech text-[10px] tracking-wider flex items-center justify-center gap-1.5 font-bold cursor-pointer select-none text-[var(--color-text-main)]"
                title={t[lang].downloadLabel}
              >
                <Download size={12} />
                <span>{t[lang].downloadLabel}</span>
              </a>
            </div>
          </CardTile>
        </section>

        {/* ==========================================
            TILE I: TERMINAL STYLE CONTACT FORM (Size: 4x2)
           ========================================== */}
        <section id="sec-contact" className="lg:col-span-4 lg:row-span-2">
          <CardTile className="p-6 flex flex-col justify-between bg-[#111216] border-[#2A2B30] min-h-[380px] h-full">
            <div className="flex justify-between items-center border-b border-[#2A2B30] pb-3 mb-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
              </div>
              <span className="font-tech text-[9.5px] text-[var(--color-brand-accent)] font-bold uppercase">
                guest@edson.dev: ~/contacto
              </span>
            </div>

            <form onSubmit={handleTerminalSubmit} className="flex-grow flex flex-col justify-between font-tech text-xs space-y-3">
              
              {/* Simulated log feed */}
              <div className="flex-grow overflow-y-auto max-h-[140px] text-[10px] space-y-1 bg-black/40 p-2 border border-[#2A2B30] mb-2 font-mono scrollbar-thin">
                <div className="text-white/40">{t[lang].contactLogs}</div>
                {terminalLogs.map((log, idx) => (
                  <div 
                    key={idx} 
                    className={
                      log.type === "error" ? "text-red-400" :
                      log.type === "success" ? "text-green-400" :
                      log.type === "system" ? "text-[var(--color-brand-secondary)]" : "text-white/70"
                    }
                  >
                    {log.text}
                  </div>
                ))}
              </div>

              {/* Input boxes structured as bash variables */}
              <div className="space-y-2">
                <div className="flex flex-col gap-1">
                  <label className="text-white/40 uppercase text-[9px]">// 1. {t[lang].formName}</label>
                  <div className="flex items-center gap-1.5 bg-black/20 px-2 py-1.5 border border-[#2A2B30]">
                    <span className="text-[var(--color-brand-accent)]">$</span>
                    <input 
                      type="text"
                      name="name"
                      value={terminalForm.name}
                      onChange={handleTerminalInputChange}
                      placeholder={t[lang].formWriteName}
                      disabled={isSubmitting}
                      onFocus={() => setFocusedInput("name")}
                      onBlur={() => setFocusedInput(null)}
                      required
                      className="bg-transparent border-none outline-none flex-grow text-white text-xs font-tech placeholder-white/20"
                      id="terminal-input-name"
                    />
                    {focusedInput === "name" && <span className="w-1.5 h-3 bg-[var(--color-brand-secondary)] animate-ping"></span>}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-white/40 uppercase text-[9px]">// 2. {t[lang].formEmail}</label>
                  <div className="flex items-center gap-1.5 bg-black/20 px-2 py-1.5 border border-[#2A2B30]">
                    <span className="text-[var(--color-brand-accent)]">$</span>
                    <input 
                      type="email"
                      name="email"
                      value={terminalForm.email}
                      onChange={handleTerminalInputChange}
                      placeholder={t[lang].formWriteEmail}
                      disabled={isSubmitting}
                      onFocus={() => setFocusedInput("email")}
                      onBlur={() => setFocusedInput(null)}
                      required
                      className="bg-transparent border-none outline-none flex-grow text-white text-xs font-tech placeholder-white/20"
                      id="terminal-input-email"
                    />
                    {focusedInput === "email" && <span className="w-1.5 h-3 bg-[var(--color-brand-secondary)] animate-ping"></span>}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-white/40 uppercase text-[9px]">// 3. {t[lang].formMsg}</label>
                  <div className="flex items-start gap-1.5 bg-black/20 px-2 py-1.5 border border-[#2A2B30]">
                    <span className="text-[var(--color-brand-accent)] mt-0.5">$</span>
                    <textarea 
                      name="message"
                      value={terminalForm.message}
                      onChange={handleTerminalInputChange}
                      placeholder={t[lang].formWriteMsg}
                      rows={2}
                      disabled={isSubmitting}
                      onFocus={() => setFocusedInput("message")}
                      onBlur={() => setFocusedInput(null)}
                      required
                      className="bg-transparent border-none outline-none flex-grow text-white text-xs font-tech placeholder-white/20 resize-none"
                      id="terminal-input-message"
                    />
                    {focusedInput === "message" && <span className="w-1.5 h-3 bg-[var(--color-brand-secondary)] animate-ping"></span>}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 bg-[var(--color-brand-accent)] text-white font-bold hover:bg-white hover:text-black transition-all uppercase font-tech text-xs tracking-wider select-none rounded-none cursor-pointer flex items-center justify-center gap-2 ${
                  isSubmitting ? "opacity-55 cursor-not-allowed" : ""
                }`}
                id="terminal-submit-btn"
              >
                <Terminal size={14} />
                {isSubmitting ? t[lang].executing : t[lang].submitLabel}
              </button>
            </form>
          </CardTile>
        </section>

      </main>

      {/* --- Footer --- */}
      <footer className="w-full border-t border-[var(--color-brand-border)] mt-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-tech text-[var(--color-text-main)]/50">
        <div className="flex items-center gap-2">
          <Cpu size={14} className="text-[var(--color-brand-accent)]" />
          <span>{t[lang].footerTitle}</span>
        </div>
        
        <div className="flex gap-4 font-bold">
          <a 
            href="https://github.com/3ds0m" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[var(--color-brand-accent)] transition-colors flex items-center gap-1 text-[var(--color-text-main)]/80"
            id="footer-github-link"
          >
            <GithubIcon className="w-3.5 h-3.5" /> [ GITHUB ]
          </a>
          <a 
            href="https://www.linkedin.com/in/reynaldo-edson-gonzales-ramos-149481332/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[var(--color-brand-accent)] transition-colors flex items-center gap-1 text-[var(--color-text-main)]/80"
            id="footer-linkedin-link"
          >
            <LinkedinIcon className="w-3.5 h-3.5" /> [ LINKEDIN ]
          </a>
          <a 
            href="mailto:edson7mayo@gmail.com" 
            className="hover:text-[var(--color-brand-accent)] transition-colors flex items-center gap-1 text-[var(--color-text-main)]/80"
            id="footer-email-link"
          >
            <Mail size={12} /> [ EMAIL ]
          </a>
        </div>
        
        <span>EDSON GONZALES © 2026 // SYSTEM BUILD OK</span>
      </footer>

    </div>
  );
}
