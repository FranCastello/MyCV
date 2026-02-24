"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import AnimeChibi from "../components/AnimeChibi";
function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { rootMargin = "0px 0px -5% 0px", threshold = 0.05 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { rootMargin, threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  // Fallback: si después de montar el elemento está en viewport, mostrarlo (evita contenido invisible)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) setIsVisible((v) => v || true);
    }, 150);
    return () => clearTimeout(t);
  }, []);

  return [ref, isVisible];
}

function AnimatedSection({ children, className = "", delayMs = 0 }) {
  const [ref, isVisible] = useInView();
  const style = isVisible && delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined;
  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </section>
  );
}

const content = {
  en: {
    title: "Industrial Engineer",
    profile: "Profile",
    profileText:
      "I am an Industrial Engineer. My experience includes general IT project management and, more recently, a focus on blockchain and web3 technology. I prioritize efficiency from project inception to successful delivery. I am a sociable individual who is always eager to learn and grow. I enjoy sports and outdoor activities, and I am passionate about entrepreneurship.",
    workExperience: "Work Experience",
    education: "Education",
    technicalSkills: "Technical Skills",
    coreSkills: "Core Skills",
    technicalPlatform: "Technical & Platform Knowledge",
    softSkills: "Soft Skills (Strategic optimization)",
    industryExpertise: "Industry Expertise",
    languages: "Languages",
    certifications: "Certifications",
    downloadCV: "Download CV (PDF)",
    downloadCVEn: "English",
    downloadCVEs: "Spanish",
    lang: "Language",
    experience: [
      {
        role: "Engineering Project Manager",
        period: "2024 – Now",
        company: "Avature",
        description: null,
        bullets: [
          "Maintain an over-arching view of the interactions between multiple teams to guarantee fluent communication and collaboration.",
          "Optimize efficiency through the creation, tuning, and formalization of cross-team processes.",
          "Ensure quality standards and identify opportunities for improvement across our Engineering area.",
          "Review the tasks engineering teams are in charge of to ensure they fulfill company standards.",
          "Set and reassess standards and policies.",
          "Design and automate processes for Engineering.",
          "Escalate issues and coordinate solutions.",
          "Receive and reroute queries from various teams.",
        ],
      },
      {
        role: "Project & Product Manager",
        period: "2021 – 2023",
        company: "Shone Live (Guru Labs)",
        description:
          "As a Project & Product Manager at Guru Labs, a part of the web3 ecosystem within Shone Live, I led three pioneering projects in the realm of blockchain technology and decentralization. These projects encompassed a platform for NFT sales during live streams and trivia games, a decentralized exchange for warranty-backed NFT auctions, and a white-label platform aimed at enhancing user acquisition and retention for web3 projects.",
        bullets: [
          "Implementing SCRUM methodology, including organizing and moderating all associated meetings.",
          "Gathering functional requirements, managing backlogs and sprints.",
          "Creating, prioritizing, and refining epics, user stories, and development tasks.",
          "Research and documentation related to product development.",
          "Creating and maintaining user-oriented product documentation.",
          "Platform testing, identifying issues, and suggesting improvements in user interfaces and experience.",
          "Competitive analysis, product research, and features map design.",
          "Supporting marketing and sales activities, including social media management, content calendar design, research, and AI-driven content creation.",
          "Reviewing and assessing user interfaces proposed by the design team.",
          "Contributing to the creation of pitch decks for fundraising.",
        ],
      },
      {
        role: "Management",
        period: "2014 – 2021",
        company: "Agrybal S.A.",
        description: null,
        bullets: [
          "Agricultural cycle management.",
          "Livestock cycle management.",
          "Supply chain management.",
          "Investments and acquisitions.",
        ],
      },
      {
        role: "Management",
        period: "2012 – 2021",
        company: "Medytec S.R.L.",
        description: null,
        bullets: [
          "International Commerce.",
          "Financial and Business Management.",
          "Suppliers Management.",
          "Logistics Coordination.",
          "Projects Management.",
          "Quality Assurance.",
        ],
      },
    ],
    educationList: [
      {
        title: "Industrial Engineer",
        period: "2009 – 2017",
        institution: "Facultad de Ingeniería Química (UNL)",
        note: "Project Management, Information Systems for Manufacturing, Programming (Pascal).",
        link: "https://fiq.unl.edu.ar/vivilafiq/ingenieria-industrial/",
      },
      {
        title: "Master in Business Administration",
        period: "2019 – Present",
        institution: "Facultad de Ciencias Económicas (UNL)",
        note: "Production and Technological Innovation, Marketing Direction, Information Systems for Decision Making.",
        link: null,
      },
      {
        title: "Diploma in Project Management",
        period: "2022 – 2023",
        institution: "Academy by Numen",
        note: null,
        link: null,
      },
      {
        title: "English Upper Intermediate Level",
        period: null,
        institution: "Asociación Argentina de Cultura Inglesa",
        note: null,
        link: null,
      },
    ],
    coreSkillsCategories: [
      {
        title: "Product Strategy",
        items: [
          "Product Discovery",
          "Product Strategy & Roadmapping",
          "OKRs & KPI Definition",
          "Product-Market Fit Validation",
          "Go-To-Market Strategy",
          "SaaS Pricing Strategy",
        ],
      },
      {
        title: "Product Execution",
        items: [
          "Agile (Scrum / Kanban)",
          "Sprint Planning & Backlog Prioritization",
          "User Stories & PRDs",
          "Stakeholder Management",
          "Risk Management",
        ],
      },
      {
        title: "Product Analytics",
        items: [
          "KPI Definition",
          "Funnel Analysis",
          "A/B Testing Concepts",
          "Data-informed Decision Making",
          "North Star Metric Definition",
        ],
      },
    ],
    technicalPlatformList: [
      "API & REST Fundamentals",
      "UX/UI & Figma Prototyping",
      "AI Tools for Product (ChatGPT, Cursor, LLM workflows)",
      "No-code / Low-code Understanding",
      "Blockchain & Web3 Product Concepts",
      "DeFi Mechanisms (Liquidity Pools, Token Incentives)",
      "NFT-based Product Models",
    ],
    softSkillsCategories: [
      {
        title: "Leadership & Management",
        items: [
          "Cross-functional Leadership",
          "Executive Communication",
          "Decision-making under uncertainty",
          "Conflict Resolution",
          "Negotiation",
        ],
      },
      {
        title: "Strategic Thinking",
        items: [
          "Systems Thinking",
          "Business-Oriented Mindset",
          "Outcome-driven mindset",
          "Prioritization under constraints",
        ],
      },
      {
        title: "Execution",
        items: [
          "Ownership mentality",
          "Bias for action",
          "High accountability",
          "Structured problem solving",
        ],
      },
    ],
    industryExpertiseCategories: [
      {
        title: "HealthTech",
        items: [
          "PACS Workflow Understanding",
          "DICOM Fundamentals",
          "Medical Imaging Product Design",
        ],
      },
      {
        title: "HR Tech",
        items: [
          "ATS & CRM Platforms",
          "Talent Acquisition Workflows",
          "Enterprise HR Systems",
        ],
      },
    ],
    languagesList: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Upper Intermediate (Cambridge FIRST Certificate, Level B2)" },
    ],
    certificationsList: [
      "Cambridge FIRST Certificate — Level B2",
      "Project Management Fundamentals — LinkedIn Learning",
      "SCRUM: Roles — LinkedIn Learning",
      "Javascript Essentials — LinkedIn Learning",
      "Course in Project Management",
    ],
  },
  es: {
    title: "Ingeniero Industrial",
    profile: "Perfil",
    profileText:
      "Mi profesión es la de Ingeniero Industrial. Mi experiencia incluye la gestión de proyectos IT en general y más recientemente con orientación a la tecnología blockchain y web3. Mi enfoque se centra en la eficiencia, desde la concepción hasta la entrega exitosa. Soy un individuo sociable y siempre dispuesto a aprender y crecer. Disfruto del deporte y las actividades al aire libre, soy un apasionado del emprendimiento.",
    workExperience: "Experiencia Laboral",
    education: "Educación",
    technicalSkills: "Habilidades Técnicas",
    coreSkills: "Core Skills",
    technicalPlatform: "Conocimiento técnico y de plataformas",
    softSkills: "Habilidades blandas (Optimización estratégica)",
    industryExpertise: "Experiencia sectorial",
    languages: "Idiomas",
    certifications: "Certificaciones",
    downloadCV: "Descargar CV (PDF)",
    downloadCVEn: "Inglés",
    downloadCVEs: "Español",
    lang: "Idioma",
    experience: [
      {
        role: "Engineering Project Manager",
        period: "2024 – Actualidad",
        company: "Avature",
        description: null,
        bullets: [
          "Mantener una visión global de las interacciones entre múltiples equipos para garantizar comunicación y colaboración fluidas.",
          "Optimizar la eficiencia mediante la creación, ajuste y formalización de procesos entre equipos.",
          "Asegurar estándares de calidad e identificar oportunidades de mejora en el área de Ingeniería.",
          "Revisar las tareas de los equipos de ingeniería para asegurar el cumplimiento de los estándares de la empresa.",
          "Establecer y reevaluar estándares y políticas.",
          "Diseñar y automatizar procesos para Ingeniería.",
          "Escalar problemas y coordinar soluciones.",
          "Recibir y redirigir consultas de diversos equipos.",
        ],
      },
      {
        role: "Project & Product Manager",
        period: "2021 – 2023",
        company: "Shone Live (Guru Labs)",
        description:
          "Como Project & Product Manager en Guru Labs, parte del ecosistema web3 de Shone Live, lideré tres proyectos pioneros en tecnología blockchain y descentralización: una plataforma de venta de NFT en transmisiones en vivo y juegos de trivia, un exchange descentralizado para subastas con garantías y una plataforma white-label para adquisición y retención de usuarios en proyectos web3.",
        bullets: [
          "Implementación de metodología SCRUM, organización y moderación de reuniones asociadas.",
          "Relevamiento de requisitos funcionales, gestión del backlog y de los sprints.",
          "Creación, priorización y refinamiento de épicas, historias de usuario y tareas de desarrollo.",
          "Investigación y documentación relacionada con el desarrollo del producto.",
          "Creación y mantenimiento de documentación del producto orientada al usuario.",
          "Testing de la plataforma, identificación de errores y sugerencia de mejoras en interfaces y experiencia de usuario.",
          "Análisis de la competencia, investigación de producto y diseño de feature maps.",
          "Apoyo en marketing y ventas: redes sociales, calendarios de contenido, creación de contenido con IA.",
          "Revisión y evaluación de interfaces propuestas por el equipo de diseño.",
          "Contribución a la creación del pitch deck para recaudación de inversiones.",
        ],
      },
      {
        role: "Gerencia General",
        period: "2014 – 2021",
        company: "Agrybal S.A.",
        description: null,
        bullets: [
          "Gestión del ciclo agrícola.",
          "Gestión del ciclo ganadero.",
          "Gestión de la cadena de suministro.",
          "Inversiones y adquisiciones.",
        ],
      },
      {
        role: "Gerencia General",
        period: "2012 – 2021",
        company: "Medytec S.R.L.",
        description: null,
        bullets: [
          "Comercio Internacional.",
          "Gestión Financiera y Empresarial.",
          "Gestión de Proveedores.",
          "Coordinación Logística.",
          "Gestión de Proyectos.",
          "Gestión de Calidad.",
        ],
      },
    ],
    educationList: [
      {
        title: "Ingeniero Industrial",
        period: "2009 – 2017",
        institution: "Facultad de Ingeniería Química (UNL)",
        note: "Gestión de Proyectos, Sistemas de Información para la Manufactura, Programación.",
        link: "https://fiq.unl.edu.ar/vivilafiq/ingenieria-industrial/",
      },
      {
        title: "Maestría en Administración de Negocios",
        period: "2019 – Presente",
        institution: "Facultad de Ciencias Económicas (UNL)",
        note: "Producción e Innovación Tecnológica, Dirección de Marketing, Sistemas de Información para la Toma de Decisiones.",
        link: null,
      },
      {
        title: "Diplomatura en Gestión de Proyectos",
        period: "2022 – 2023",
        institution: "Academy by Numen",
        note: null,
        link: null,
      },
      {
        title: "Nivel de Inglés Avanzado (Upper Intermediate)",
        period: null,
        institution: "Asociación Argentina de Cultura Inglesa",
        note: null,
        link: null,
      },
    ],
    coreSkillsCategories: [
      {
        title: "Estrategia de producto",
        items: [
          "Product Discovery",
          "Estrategia y roadmap de producto",
          "OKRs y definición de KPIs",
          "Validación de product-market fit",
          "Estrategia Go-To-Market",
          "Estrategia de precios SaaS",
        ],
      },
      {
        title: "Ejecución de producto",
        items: [
          "Agile (Scrum / Kanban)",
          "Planificación de sprints y priorización del backlog",
          "User Stories y PRDs",
          "Gestión de stakeholders",
          "Gestión de riesgos",
        ],
      },
      {
        title: "Analítica de producto",
        items: [
          "Definición de KPIs",
          "Análisis de embudo",
          "Conceptos de A/B testing",
          "Decisiones basadas en datos",
          "Definición de North Star Metric",
        ],
      },
    ],
    technicalPlatformList: [
      "Fundamentos de API y REST",
      "UX/UI y prototipado en Figma",
      "Herramientas de IA para producto (ChatGPT, Cursor, flujos LLM)",
      "Conocimiento no-code / low-code",
      "Conceptos de producto Blockchain y Web3",
      "Mecanismos DeFi (Liquidity Pools, incentivos con tokens)",
      "Modelos de producto basados en NFT",
    ],
    softSkillsCategories: [
      {
        title: "Liderazgo y gestión",
        items: [
          "Liderazgo cross-functional",
          "Comunicación ejecutiva",
          "Toma de decisiones bajo incertidumbre",
          "Resolución de conflictos",
          "Negociación",
        ],
      },
      {
        title: "Pensamiento estratégico",
        items: [
          "Pensamiento sistémico",
          "Mentalidad orientada al negocio",
          "Mentalidad orientada a resultados",
          "Priorización bajo restricciones",
        ],
      },
      {
        title: "Ejecución",
        items: [
          "Mentalidad de ownership",
          "Sesgo por la acción",
          "Alta responsabilidad",
          "Resolución estructurada de problemas",
        ],
      },
    ],
    industryExpertiseCategories: [
      {
        title: "HealthTech",
        items: [
          "Comprensión de flujos PACS",
          "Fundamentos DICOM",
          "Diseño de producto en imagen médica",
        ],
      },
      {
        title: "HR Tech",
        items: [
          "Plataformas ATS y CRM",
          "Flujos de adquisición de talento",
          "Sistemas de RRHH empresarial",
        ],
      },
    ],
    languagesList: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Nivel Avanzado (Upper Intermediate, Certificado FIRST Cambridge B2)" },
    ],
    certificationsList: [
      "Certificado FIRST de Cambridge — Nivel B2",
      "Fundamentos de Gestión de Proyectos — LinkedIn Learning",
      "SCRUM: Roles — LinkedIn Learning",
      "Conceptos esenciales de JavaScript — LinkedIn Learning",
      "Curso de Gestión de Proyectos",
    ],
  },
};

export default function CVPage() {
  const [lang, setLang] = useState("en");
  const [pdfGenerating, setPdfGenerating] = useState(false);
  const pdfRef = useRef(null);
  const t = content[lang];

  async function handleDownloadPdf(langCode) {
    setLang(langCode);
    setPdfGenerating(true);
    await new Promise((r) => setTimeout(r, 500));
    const element = pdfRef.current;
    if (!element) {
      setPdfGenerating(false);
      return;
    }
    try {
      element.classList.add("pdf-export");
      const html2pdf = (await import("html2pdf.js")).default;
      const filename = `Francisco-Castello-CV-${langCode === "en" ? "EN" : "ES"}.pdf`;
      await html2pdf()
        .set({
          margin: 12,
          filename,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, logging: false },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        })
        .from(element)
        .save();
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      element.classList.remove("pdf-export");
    }
    setPdfGenerating(false);
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 md:py-16">
      {/* Top bar: language + PDF downloads (oculto al imprimir/guardar como PDF) */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[var(--muted)]/30 print:hidden">
        <div className="flex items-center gap-3">
          <span className="text-sm text-[var(--muted)]">{t.lang}:</span>
          <button
            type="button"
            onClick={() => setLang("en")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              lang === "en"
                ? "bg-[var(--muted)]/25 text-[var(--foreground)]"
                : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]/10"
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLang("es")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              lang === "es"
                ? "bg-[var(--muted)]/25 text-[var(--foreground)]"
                : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]/10"
            }`}
          >
            ES
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-[var(--muted)]">{t.downloadCV}:</span>
          <button
            type="button"
            disabled={pdfGenerating}
            onClick={() => handleDownloadPdf("en")}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--muted)]/15 text-sm text-[var(--foreground)] hover:bg-[var(--muted)]/25 transition-colors disabled:opacity-60"
          >
            {pdfGenerating ? "…" : t.downloadCVEn}
          </button>
          <button
            type="button"
            disabled={pdfGenerating}
            onClick={() => handleDownloadPdf("es")}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--muted)]/15 text-sm text-[var(--foreground)] hover:bg-[var(--muted)]/25 transition-colors disabled:opacity-60"
          >
            {pdfGenerating ? "…" : t.downloadCVEs}
          </button>
        </div>
      </div>

      <div ref={pdfRef}>
      {/* Header estilo CV: nombre | foto | nombre + título */}
      <header className="border-b border-[var(--muted)]/30 pb-8 mb-8">
        <div className="flex flex-col items-center">
          <div className="flex w-full max-w-2xl items-center justify-between gap-4">
            <h1 className="text-2xl font-bold tracking-[0.2em] text-[var(--foreground)] sm:text-3xl">
              FRANCISCO
            </h1>
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-b from-teal-400 to-cyan-500 opacity-90" />
              <div className="relative h-24 w-20 overflow-hidden rounded-[1.75rem] border-2 border-white shadow-lg sm:h-28 sm:w-24">
                <Image
                  src="/foto-header.png"
                  alt="Francisco Castello"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="96px"
                  style={{ filter: "contrast(1.05) saturate(1.08)" }}
                />
              </div>
            </div>
            <h1 className="text-2xl font-bold tracking-[0.2em] text-[var(--foreground)] sm:text-3xl">
              CASTELLO
            </h1>
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm font-medium tracking-[0.2em] text-[var(--muted)] sm:text-base">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            {t.title}
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
          </p>
        </div>
        <hr className="mx-auto mt-6 max-w-2xl border-[var(--muted)]/30" />
        <div className="mx-auto mt-6 grid max-w-2xl gap-6 sm:grid-cols-[1fr,2fr] sm:gap-8">
          <div className="flex flex-col gap-1 text-sm text-[var(--muted)]">
            <a href="mailto:franciscojcastello@gmail.com" className="hover:text-teal-600 transition-colors">
              franciscojcastello@gmail.com
            </a>
            <a href="tel:+54-342-4215966" className="hover:text-teal-600 transition-colors">
              +54-342-4215966
            </a>
            <span>Tucumán 3148, Santa Fe 3000, Argentina</span>
            <a
              href="https://www.linkedin.com/in/franciscojaviercastello"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <p className="border-l-2 border-teal-200 pl-4 text-sm leading-relaxed text-[var(--muted)] sm:pl-6">
            {t.profileText}
          </p>
        </div>
      </header>

      {/* Profile */}
      <AnimatedSection className="mb-10" delayMs={0}>
        <div className="flex items-center gap-3 mb-3">
          <AnimeChibi variant="profile" />
          <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)]">
            {t.profile}
          </h2>
        </div>
        <p className="text-[var(--foreground)] leading-relaxed">{t.profileText}</p>
      </AnimatedSection>

      {/* Work Experience */}
      <AnimatedSection className="mb-10" delayMs={60}>
        <div className="flex items-center gap-3 mb-4">
          <AnimeChibi variant="workExperience" />
          <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)]">
            {t.workExperience}
          </h2>
        </div>
        <ul className="space-y-8">
          {t.experience.map((job) => (
            <li key={`${job.company}-${job.period}`}>
              <div className="flex flex-wrap justify-between gap-2">
                <h3 className="font-semibold text-[var(--foreground)]">{job.role}</h3>
                <span className="text-sm text-[var(--muted)]">{job.period}</span>
              </div>
              <p className="text-sm text-[var(--muted)] mt-0.5">{job.company}</p>
              {job.description && (
                <p className="mt-2 text-[var(--foreground)] leading-relaxed text-sm">{job.description}</p>
              )}
              <ul className="mt-3 space-y-1 text-[var(--foreground)] leading-relaxed list-disc list-inside text-sm">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection className="mb-10" delayMs={120}>
        <div className="flex items-center gap-3 mb-4">
          <AnimeChibi variant="education" />
          <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)]">
            {t.education}
          </h2>
        </div>
        <ul className="space-y-5">
          {t.educationList.map((item) => (
            <li key={item.title + item.institution}>
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">{item.title}</h3>
              </div>
              <p className="text-sm text-[var(--muted)]">{item.institution}</p>
              {item.note && (
                <p className="text-xs text-[var(--muted)] mt-1">
                  {item.link ? (
                    <>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)]">
                        {item.link.replace(/^https?:\/\//, "").split("/")[0]}
                      </a>
                      {" — "}
                      {item.note}
                    </>
                  ) : (
                    item.note
                  )}
                </p>
              )}
            </li>
          ))}
        </ul>
      </AnimatedSection>

      {/* Core Skills */}
      <AnimatedSection className="mb-10" delayMs={180}>
        <div className="flex items-center gap-3 mb-4">
          <AnimeChibi variant="coreSkills" />
          <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)]">
            {t.coreSkills}
          </h2>
        </div>
        <div className="space-y-5">
          {t.coreSkillsCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2">{cat.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 rounded-md bg-[var(--muted)]/15 text-sm text-[var(--foreground)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Technical & Platform Knowledge */}
      <AnimatedSection className="mb-10" delayMs={200}>
        <div className="flex items-center gap-3 mb-4">
          <AnimeChibi variant="technicalSkills" />
          <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)]">
            {t.technicalPlatform}
          </h2>
        </div>
        <ul className="flex flex-wrap gap-2">
          {t.technicalPlatformList.map((skill) => (
            <li
              key={skill}
              className="px-3 py-1.5 rounded-md bg-[var(--muted)]/15 text-sm text-[var(--foreground)]"
            >
              {skill}
            </li>
          ))}
        </ul>
      </AnimatedSection>

      {/* Soft Skills */}
      <AnimatedSection className="mb-10" delayMs={220}>
        <div className="flex items-center gap-3 mb-4">
          <AnimeChibi variant="softSkills" />
          <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)]">
            {t.softSkills}
          </h2>
        </div>
        <div className="space-y-5">
          {t.softSkillsCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2">{cat.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 rounded-md bg-[var(--muted)]/15 text-sm text-[var(--foreground)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Industry Expertise */}
      <AnimatedSection className="mb-10" delayMs={240}>
        <div className="flex items-center gap-3 mb-4">
          <AnimeChibi variant="industryExpertise" />
          <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)]">
            {t.industryExpertise}
          </h2>
        </div>
        <div className="space-y-5">
          {t.industryExpertiseCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2">{cat.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 rounded-md bg-[var(--muted)]/15 text-sm text-[var(--foreground)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Languages */}
      <AnimatedSection className="mb-10" delayMs={300}>
        <div className="flex items-center gap-3 mb-3">
          <AnimeChibi variant="languages" />
          <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)]">
            {t.languages}
          </h2>
        </div>
        <ul className="space-y-1 text-[var(--foreground)]">
          {t.languagesList.map((l) => (
            <li key={l.name}>
              <strong>{l.name}</strong> — {l.level}
            </li>
          ))}
        </ul>
      </AnimatedSection>

      {/* Certifications */}
      <AnimatedSection delayMs={360}>
        <div className="flex items-center gap-3 mb-3">
          <AnimeChibi variant="certifications" />
          <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)]">
            {t.certifications}
          </h2>
        </div>
        <ul className="space-y-1 text-[var(--foreground)] text-sm">
          {t.certificationsList.map((cert, i) => (
            <li key={i}>{cert}</li>
          ))}
        </ul>
      </AnimatedSection>
      </div>

    </main>
  );
}
