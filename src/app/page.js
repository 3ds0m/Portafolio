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
  Moon
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
    // Subtle 3D rotation
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
      className={`group relative bg-var(--color-tile-bg) border border-brand-border/60 shadow-tile rounded-none overflow-hidden transition-all duration-300 ease-out select-none ${
        highlightBorder ? "hover:border-brand-secondary" : "hover:border-brand-accent"
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

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");
  const [greeting, setGreeting] = useState("¡HOLA!");
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeExperienceIdx, setActiveExperienceIdx] = useState(0);

  // Terminal state
  const [terminalForm, setTerminalForm] = useState({ name: "", email: "", message: "" });
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  // Load and apply theme, clock updates
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
        setGreeting("BUENOS DÍAS 🌅");
      } else if (h >= 12 && h < 20) {
        setGreeting("BUENAS TARDES ☀️");
      } else {
        setGreeting("BUENAS NOCHES 🌙");
      }
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
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

  // Real CV data
  const experiences = [
    {
      role: "Freelance Full Stack",
      company: "Proyectos Propios",
      period: "2025 - PRESENTE",
      description: "Diseño, desarrollo e implementación de aplicaciones web y CRMs personalizados para autónomos y pequeñas empresas. Arquitectura Serverless, bases de datos optimizadas y layouts modernos enfocados en conversión y accesibilidad.",
      stack: ["Next.js", "React", "Node.js", "WordPress", "PostgreSQL"],
      color: "var(--color-pastel-mint)"
    },
    {
      role: "Backend Junior",
      company: "Beca Técnica",
      period: "MAR 2025 - JUN 2025",
      description: "Optimización de bases de datos relacionales e infraestructura cloud en Azure. Automatización de informes de auditoría y calidad mediante scripts en Perl y utilidades backend optimizadas en C# y .NET.",
      stack: ["C#", ".NET", "Perl", "Azure", "Windows Server"],
      color: "var(--color-pastel-blue)"
    },
    {
      role: "Diseño & Construcción",
      company: "Trabajo Autónomo",
      period: "2020 - 2023",
      description: "Liderazgo de proyectos técnicos coordinando tiempos, presupuestos y entregas con clientes directos. Desarrollo de capacidades de resolución de problemas e ingeniería de requerimientos bajo presión.",
      stack: ["Gestión Técnica", "Presupuestos", "AutoCad"],
      color: "var(--color-pastel-rust)"
    }
  ];

  const projects = [
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
      subtitle: "PyTorch Language Model",
      description: "Implementación desde cero de un Transformer (Decoder-only) entrenado en PyTorch para generación de textos coherentes en español a nivel de caracteres. Configurable en tamaño de contexto, cabezales de atención y muestreo por temperatura.",
      tags: ["PyTorch", "Python", "Transformers", "Deep Learning"],
      tagColor: "var(--color-pastel-mint)",
      github: "https://github.com/3ds0m/minigpt",
      demo: ""
    }
  ];

  const techStack = [
    "Next.js", "React", "Node.js", "C#", ".NET", 
    "Python", "PyTorch", "Azure", "Docker", "PostgreSQL"
  ];

  // Terminal contact form handler
  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    if (!terminalForm.name || !terminalForm.email || !terminalForm.message) {
      setTerminalLogs(prev => [
        ...prev, 
        { type: "error", text: "ERROR: Todos los campos son requeridos para la transmisión." }
      ]);
      return;
    }

    setIsSubmitting(true);
    setTerminalLogs(prev => [
      ...prev, 
      { type: "system", text: "guest@edson.dev:~$ ./submit_proposal.sh" },
      { type: "info", text: "Iniciando handshake seguro con edson7mayo@gmail.com..." }
    ]);

    setTimeout(() => {
      setTerminalLogs(prev => [
        ...prev,
        { type: "info", text: "Empaquetando datos del remitente..." },
        { type: "info", text: `Enviando mensaje de: ${terminalForm.name}...` }
      ]);

      setTimeout(() => {
        setTerminalLogs(prev => [
          ...prev,
          { type: "success", text: "PROCESO EXITOSO: Mensaje enviado con código 200 OK." },
          { type: "success", text: "Pronto estaré en contacto contigo. ¡Gracias!" }
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

  return (
    <div className="w-full max-w-[1250px] mx-auto px-4 py-8 flex flex-col min-h-screen justify-between selection:bg-brand-accent selection:text-white">
      
      {/* --- Simplified Editorial Header --- */}
      <header className="w-full py-6 flex justify-between items-center border-b border-brand-border mb-10">
        <div className="font-headings font-extrabold text-2xl tracking-tight text-text-main">
          ⚡ EDSON GONZALES
        </div>
        
        <div className="flex items-center gap-6 font-tech text-xs">
          <a 
            href="mailto:edson7mayo@gmail.com" 
            className="hover:text-brand-accent transition-colors hidden sm:inline"
          >
            [ edson7mayo@gmail.com ]
          </a>
          
          <button 
            onClick={toggleTheme} 
            className="p-2 border border-brand-border hover:border-brand-accent hover:text-brand-accent transition-all cursor-pointer flex items-center gap-2 select-none"
            aria-label="Toggle Theme"
            title="Cambiar Modo"
          >
            {isDark ? (
              <>
                <Sun size={14} />
                <span>CLARO</span>
              </>
            ) : (
              <>
                <Moon size={14} />
                <span>OSCURO</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* --- Main 12-Column Asymmetric Grid Container --- */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full flex-grow mb-12"
      >
        
        {/* ==========================================
            TILE A: HERO PRESENTATION TILE (Size: 6x2)
           ========================================== */}
        <CardTile className="lg:col-span-6 lg:row-span-2 p-8 flex flex-col justify-between bg-tile-bg min-h-[360px]">
          <div className="flex justify-between items-start">
            <span className="font-tech text-[10px] text-brand-accent bg-brand-border/40 px-2 py-0.5 font-bold tracking-wider">
              01 / PRESENTACIÓN
            </span>
          </div>
          
          <div className="my-6">
            <p className="font-tech text-xs text-brand-accent mb-2 font-bold tracking-widest uppercase">
              // DESARROLLADOR WEB FULL STACK
            </p>
            <h1 className="font-headings font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-text-main leading-none uppercase">
              EDSON<br/>GONZALES
            </h1>
            <p className="font-body text-sm text-text-main/70 mt-4 leading-relaxed max-w-[480px]">
              Especializado en el diseño e implementación de productos interactivos robustos, modulares y de alto rendimiento.
            </p>
          </div>
          
          <div className="flex items-center gap-3 text-xs font-tech text-text-main/60">
            <span className="w-2.5 h-2.5 bg-green-500 inline-block animate-pulse"></span>
            DISPONIBLE PARA PROYECTOS / FREELANCE
          </div>
        </CardTile>

        {/* ==========================================
            TILE B: PROFILE DETAIL TILE (Size: 6x1)
           ========================================== */}
        <CardTile className="lg:col-span-6 lg:row-span-1 p-8 flex flex-col justify-between bg-tile-bg">
          <div className="flex justify-between items-start">
            <span className="font-tech text-[10px] text-brand-accent bg-brand-border/40 px-2 py-0.5 font-bold tracking-wider">
              02 / PERFIL PROFESIONAL
            </span>
            <span className="font-tech text-xs text-text-main/40">MADRID, ES</span>
          </div>
          
          <p className="font-body text-sm text-text-main/80 my-4 leading-relaxed">
            Persona de rápido aprendizaje, dedicada y comprometida. Destaco por mi capacidad de resolver problemas complejos, adaptabilidad y empatía técnica con clientes y compañeros.
          </p>

          <div className="flex gap-4 font-tech text-[10px] text-brand-accent/80 font-bold">
            <span>ESTUDIOS: DAW (GRADO SUPERIOR)</span>
            <span className="text-brand-border">|</span>
            <span>IDIOMAS: INGLÉS C1</span>
          </div>
        </CardTile>

        {/* ==========================================
            TILE C: EXPERIENCE STAT (Size: 3x1)
           ========================================== */}
        <CardTile 
          style={{ 
            backgroundColor: "var(--color-tile-highlight-bg)", 
            color: "var(--color-tile-highlight-text)" 
          }}
          className="lg:col-span-3 lg:row-span-1 p-6 flex flex-col justify-between"
        >
          <span className="font-tech text-[10px] tracking-wider bg-black/10 px-2 py-0.5 w-max font-bold">
            TRAYECTORIA
          </span>
          <div className="my-2">
            <span className="font-headings font-extrabold text-5xl tracking-tighter leading-none">
              +2
            </span>
            <p className="font-tech text-[11px] font-extrabold tracking-wider leading-tight uppercase mt-1">
              AÑOS DE EXPERIENCIA<br/>EN DESARROLLO Y OBRA
            </p>
          </div>
          <span className="font-tech text-[9px] opacity-80">PROYECTOS TÉCNICOS COMPLETOS</span>
        </CardTile>

        {/* ==========================================
            TILE D: TECH STACK GRID (Size: 3x1)
           ========================================== */}
        <CardTile className="lg:col-span-3 lg:row-span-1 p-6 flex flex-col justify-between bg-tile-bg">
          <span className="font-tech text-[10px] text-brand-accent bg-brand-border/40 px-2 py-0.5 font-bold tracking-wider w-max">
            03 / TECNOLOGÍAS
          </span>
          <div className="flex flex-wrap gap-1.5 my-2">
            {techStack.slice(0, 8).map((tech, idx) => (
              <span 
                key={idx} 
                className="font-tech text-[9px] bg-brand-border/20 text-text-main border border-brand-border px-1.5 py-0.5 hover:border-brand-accent transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          <span className="font-tech text-[9px] text-text-main/40 uppercase font-bold">Herramientas de automatización</span>
        </CardTile>

        {/* ==========================================
            TILE E: INTERACTIVE PROJECT SHOWCASE (Size: 8x2)
           ========================================== */}
        <CardTile className="lg:col-span-8 lg:row-span-2 p-8 flex flex-col justify-between bg-tile-bg min-h-[420px]">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-brand-border/80 pb-4">
            <span className="font-tech text-[10px] text-brand-accent bg-brand-border/40 px-2 py-0.5 font-bold tracking-wider w-max">
              04 / PROYECTOS DESTACADOS
            </span>
            
            {/* Visual Tabs */}
            <div className="flex flex-wrap gap-2 font-tech text-xs">
              {projects.map((proj, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProjectIdx(idx)}
                  className={`px-3 py-1 border transition-all cursor-pointer ${
                    activeProjectIdx === idx 
                      ? "border-brand-accent bg-brand-accent text-white font-bold"
                      : "border-brand-border text-text-main/60 hover:text-text-main hover:border-brand-border/80"
                  }`}
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
                  <span className="font-tech text-xs text-brand-accent font-bold tracking-widest block uppercase">
                    {projects[activeProjectIdx].subtitle}
                  </span>
                  <h3 className="font-headings font-extrabold text-3xl tracking-tight text-text-main mt-1 uppercase">
                    {projects[activeProjectIdx].title}
                  </h3>
                  <p className="font-body text-sm text-text-main/70 mt-3 leading-relaxed">
                    {projects[activeProjectIdx].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {projects[activeProjectIdx].tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="font-tech text-[10px] bg-brand-border/20 border border-brand-border px-2 py-0.5 text-text-main/80"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Decorative Visual/Wireframe Asset for project */}
                <div className="lg:col-span-5 h-[160px] bg-brand-border/20 border border-brand-border/60 flex flex-col justify-between p-4 relative overflow-hidden group/asset">
                  <div className="absolute inset-0 bg-radial-gradient from-brand-accent/5 to-transparent pointer-events-none"></div>
                  
                  {/* Wireframe grids */}
                  <div className="absolute -right-4 -bottom-4 w-28 h-28 border border-dashed border-brand-accent/20 rounded-none transform rotate-12 transition-transform group-hover/asset:rotate-45 duration-700"></div>
                  
                  <div className="flex justify-between items-start z-10">
                    <Code size={18} className="text-brand-accent" />
                    <span className="font-tech text-[9px] text-brand-secondary font-bold">PREVIEW.SH</span>
                  </div>
                  
                  <div className="z-10">
                    <span className="font-tech text-[10px] text-text-main/30 block tracking-widest uppercase font-bold">
                      ESTADO // ACTIVO
                    </span>
                    <span className="font-headings font-bold text-xl text-text-main/80 block mt-1 tracking-tight">
                      {projects[activeProjectIdx].title.toUpperCase()}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action Links */}
          <div className="flex gap-4 border-t border-brand-border/80 pt-4 font-tech text-xs">
            <a 
              href={projects[activeProjectIdx].github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-main flex items-center gap-1.5 hover:text-brand-accent transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" /> [ CÓDIGO_FUENTE ]
            </a>
            {projects[activeProjectIdx].demo && (
              <a 
                href={projects[activeProjectIdx].demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-accent flex items-center gap-1.5 hover:text-brand-secondary transition-colors font-bold"
              >
                <ExternalLink size={14} /> [ DEMO_EN_VIVO ]
              </a>
            )}
          </div>
        </CardTile>

        {/* ==========================================
            TILE F: PRODUCTION PROCESS (Size: 4x2)
           ========================================== */}
        <CardTile className="lg:col-span-4 lg:row-span-2 p-8 flex flex-col justify-between bg-tile-bg">
          <span className="font-tech text-[10px] text-brand-accent bg-brand-border/40 px-2 py-0.5 font-bold tracking-wider w-max">
            05 / METODOLOGÍA DE TRABAJO
          </span>
          
          <div className="my-6 flex-grow flex flex-col justify-center">
            <h3 className="font-headings font-extrabold text-2xl tracking-tight text-text-main mb-6 uppercase">
              MI PROCESO
            </h3>
            
            <div className="space-y-4 font-tech text-xs">
              <div className="border-l-2 border-brand-border pl-4 hover:border-brand-accent transition-colors py-1">
                <span className="text-brand-accent font-bold">01 / ESTRUCTURAR</span>
                <p className="text-text-main/60 font-body text-xs mt-0.5">Analizar requisitos y mapear la arquitectura lógica del sistema.</p>
              </div>
              <div className="border-l-2 border-brand-border pl-4 hover:border-brand-accent transition-colors py-1">
                <span className="text-brand-accent font-bold">02 / CODIFICAR</span>
                <p className="text-text-main/60 font-body text-xs mt-0.5">Escritura de código limpio, testeable y aplicando principios de optimización.</p>
              </div>
              <div className="border-l-2 border-brand-border pl-4 hover:border-brand-accent transition-colors py-1">
                <span className="text-brand-accent font-bold">03 / VALIDAR</span>
                <p className="text-text-main/60 font-body text-xs mt-0.5">Validación e integración mediante pruebas de caja negra, integradas y unitarias.</p>
              </div>
              <div className="border-l-2 border-brand-border pl-4 hover:border-brand-accent transition-colors py-1">
                <span className="text-brand-accent font-bold">04 / DESPLEGAR</span>
                <p className="text-text-main/60 font-body text-xs mt-0.5">Configuración CI/CD y publicación automatizada en entornos de producción resilientes.</p>
              </div>
            </div>
          </div>
          
          <span className="font-tech text-[9px] text-text-main/40 uppercase font-bold">Enfoque en la robustez y limpieza</span>
        </CardTile>

        {/* ==========================================
            TILE G: EXPERIENCE TIMELINE WIDGET (Size: 6x2)
           ========================================== */}
        <CardTile className="lg:col-span-6 lg:row-span-2 p-8 flex flex-col justify-between bg-tile-bg min-h-[380px]">
          <div className="flex justify-between items-start border-b border-brand-border pb-4 mb-4">
            <span className="font-tech text-[10px] text-brand-accent bg-brand-border/40 px-2 py-0.5 font-bold tracking-wider">
              06 / HISTORIAL LABORAL
            </span>
            <span className="font-tech text-xs text-text-main/40 uppercase font-bold">Experiencia</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 my-2 flex-grow items-center">
            
            {/* Left selector menu */}
            <div className="sm:col-span-5 flex flex-col gap-2 font-tech text-xs">
              {experiences.map((exp, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveExperienceIdx(idx)}
                  className={`text-left p-2.5 border transition-all cursor-pointer ${
                    activeExperienceIdx === idx 
                      ? "border-brand-accent text-text-main bg-brand-accent/10 font-bold"
                      : "border-brand-border text-text-main/60 hover:text-text-main hover:border-brand-border/80"
                  }`}
                >
                  <span className="text-[10px] text-brand-accent block mb-0.5 font-bold">{exp.period}</span>
                  {exp.role.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Right dynamic panel details */}
            <div className="sm:col-span-7 h-full flex flex-col justify-between p-4 bg-brand-border/20 border border-brand-border/50">
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
                    <span className="font-tech text-[9.5px] uppercase tracking-widest block text-brand-accent font-bold">
                      {experiences[activeExperienceIdx].company.toUpperCase()}
                    </span>
                    <h4 className="font-headings font-extrabold text-lg text-text-main uppercase leading-tight mt-0.5">
                      {experiences[activeExperienceIdx].role}
                    </h4>
                  </div>
                  
                  <p className="font-body text-xs text-text-main/70 leading-relaxed">
                    {experiences[activeExperienceIdx].description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {experiences[activeExperienceIdx].stack.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="font-tech text-[9px] bg-brand-border text-text-main px-1.5 py-0.5 border border-brand-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="border-t border-brand-border pt-4 flex gap-4 font-tech text-xs text-text-main/50">
            <span>PERIODO: 2020 - 2025</span>
          </div>
        </CardTile>

        {/* ==========================================
            TILE H: STATUS & CLOCK WIDGET (Size: 2x2)
           ========================================== */}
        <CardTile className="lg:col-span-2 lg:row-span-2 p-6 flex flex-col justify-between bg-tile-bg text-center items-center justify-center">
          <span className="font-tech text-[9px] text-brand-accent bg-brand-border/40 px-2 py-0.5 font-bold tracking-wider w-max">
            07 / HORA LOCAL
          </span>

          <div className="my-6">
            <Clock size={28} className="text-brand-accent mx-auto mb-2 animate-pulse" />
            <div className="font-tech font-bold text-2xl tracking-tighter text-text-main">
              {time || "00:00:00"}
            </div>
            <span className="font-tech text-[10px] text-text-main/40 block mt-1 uppercase font-bold">Madrid, ES</span>
          </div>

          <div className="font-tech text-[10px] text-brand-accent font-bold uppercase leading-tight mt-2 border-t border-brand-border pt-3 w-full">
            {greeting}
          </div>
        </CardTile>

        {/* ==========================================
            TILE I: TERMINAL STYLE CONTACT FORM (Size: 4x2)
           ========================================== */}
        <CardTile className="lg:col-span-4 lg:row-span-2 p-6 flex flex-col justify-between bg-[#111216] border-[#2A2B30] min-h-[380px]">
          <div className="flex justify-between items-center border-b border-[#2A2B30] pb-3 mb-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
            </div>
            <span className="font-tech text-[9.5px] text-brand-accent font-bold uppercase">
              guest@edson.dev: ~/contacto
            </span>
          </div>

          <form onSubmit={handleTerminalSubmit} className="flex-grow flex flex-col justify-between font-tech text-xs space-y-3">
            
            {/* Simulated log feed */}
            <div className="flex-grow overflow-y-auto max-h-[140px] text-[10px] space-y-1 bg-black/40 p-2 border border-[#2A2B30] mb-2 font-mono scrollbar-thin">
              <div className="text-white/40">// Logs de la transmisión activa...</div>
              {terminalLogs.map((log, idx) => (
                <div 
                  key={idx} 
                  className={
                    log.type === "error" ? "text-red-400" :
                    log.type === "success" ? "text-green-400" :
                    log.type === "system" ? "text-brand-secondary" : "text-white/70"
                  }
                >
                  {log.text}
                </div>
              ))}
            </div>

            {/* Input boxes structured as bash variables */}
            <div className="space-y-2">
              <div className="flex flex-col gap-1">
                <label className="text-white/40 uppercase text-[9px]">// 1. Nombre</label>
                <div className="flex items-center gap-1.5 bg-black/20 px-2 py-1.5 border border-[#2A2B30]">
                  <span className="text-brand-accent">$</span>
                  <input 
                    type="text"
                    name="name"
                    value={terminalForm.name}
                    onChange={handleTerminalInputChange}
                    placeholder="Escribe tu nombre"
                    disabled={isSubmitting}
                    onFocus={() => setFocusedInput("name")}
                    onBlur={() => setFocusedInput(null)}
                    required
                    className="bg-transparent border-none outline-none flex-grow text-white text-xs font-tech placeholder-white/20"
                  />
                  {focusedInput === "name" && <span className="w-1.5 h-3 bg-brand-secondary animate-ping"></span>}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-white/40 uppercase text-[9px]">// 2. Email</label>
                <div className="flex items-center gap-1.5 bg-black/20 px-2 py-1.5 border border-[#2A2B30]">
                  <span className="text-brand-accent">$</span>
                  <input 
                    type="email"
                    name="email"
                    value={terminalForm.email}
                    onChange={handleTerminalInputChange}
                    placeholder="tucorreo@ejemplo.com"
                    disabled={isSubmitting}
                    onFocus={() => setFocusedInput("email")}
                    onBlur={() => setFocusedInput(null)}
                    required
                    className="bg-transparent border-none outline-none flex-grow text-white text-xs font-tech placeholder-white/20"
                  />
                  {focusedInput === "email" && <span className="w-1.5 h-3 bg-brand-secondary animate-ping"></span>}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-white/40 uppercase text-[9px]">// 3. Mensaje</label>
                <div className="flex items-start gap-1.5 bg-black/20 px-2 py-1.5 border border-[#2A2B30]">
                  <span className="text-brand-accent mt-0.5">$</span>
                  <textarea 
                    name="message"
                    value={terminalForm.message}
                    onChange={handleTerminalInputChange}
                    placeholder="Escribe tu mensaje..."
                    rows={2}
                    disabled={isSubmitting}
                    onFocus={() => setFocusedInput("message")}
                    onBlur={() => setFocusedInput(null)}
                    required
                    className="bg-transparent border-none outline-none flex-grow text-white text-xs font-tech placeholder-white/20 resize-none"
                  />
                  {focusedInput === "message" && <span className="w-1.5 h-3 bg-brand-secondary animate-ping"></span>}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 bg-brand-accent text-white font-bold hover:bg-white hover:text-black transition-all uppercase font-tech text-xs tracking-wider select-none rounded-none cursor-pointer flex items-center justify-center gap-2 ${
                isSubmitting ? "opacity-55 cursor-not-allowed" : ""
              }`}
            >
              <Terminal size={14} />
              {isSubmitting ? "EJECUTANDO..." : "EJECUTAR_PROPUESTA.SH"}
            </button>
          </form>
        </CardTile>

      </motion.main>

      {/* --- Footer --- */}
      <footer className="w-full border-t border-brand-border mt-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-tech text-text-main/50">
        <div className="flex items-center gap-2">
          <Cpu size={14} className="text-brand-accent" />
          <span>REJILLA MODULAR // MODO CLARO: TACTILE PAPER // MODO OSCURO: SWISS NEO-METRO</span>
        </div>
        
        <div className="flex gap-4 font-bold">
          <a href="https://github.com/3ds0m" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors flex items-center gap-1">
            <GithubIcon className="w-3.5 h-3.5" /> [ GITHUB ]
          </a>
          <a href="https://www.linkedin.com/in/reynaldo-edson-gonzales-ramos-149481332/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors flex items-center gap-1">
            <LinkedinIcon className="w-3.5 h-3.5" /> [ LINKEDIN ]
          </a>
          <a href="mailto:edson7mayo@gmail.com" className="hover:text-brand-accent transition-colors flex items-center gap-1">
            <Mail size={12} /> [ EMAIL ]
          </a>
        </div>
        
        <span>EDSON GONZALES © 2026 // SYSTEM BUILD OK</span>
      </footer>

    </div>
  );
}
