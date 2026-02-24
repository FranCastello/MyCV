"use client";

import { useState, useEffect, useRef } from "react";

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
    softSkills: "Soft Skills",
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
        title: "Diploma in Web Development",
        period: "2023 – Present",
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
    technicalSkillsList: [
      "Microsoft Office",
      "Google Docs",
      "Jira",
      "Trello",
      "Asana",
      "Parabol",
      "Notion",
      "Figma / Figjam",
      "SCRUM",
      "KANBAN",
      "Web development (basics)",
      "ChatGPT",
      "Midjourney",
      "Slack",
      "Telegram",
      "Discord",
      "WhatsApp",
      "Instagram",
      "X",
      "Facebook",
      "YouTube",
    ],
    softSkillsList: [
      "Problem solving",
      "Teamwork",
      "Logical thinking",
      "Leadership",
      "Communication",
      "Negotiation",
      "Technical skills",
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
    softSkills: "Habilidades Blandas",
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
        title: "Diplomatura en Desarrollo Web Full Stack",
        period: "2023 – Presente",
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
    technicalSkillsList: [
      "Microsoft Office",
      "Google Docs",
      "Jira",
      "Trello",
      "Asana",
      "Parabol",
      "Notion",
      "Figma / Figjam",
      "SCRUM",
      "KANBAN",
      "Desarrollo web (nociones)",
      "ChatGPT",
      "Midjourney",
      "Slack",
      "Telegram",
      "Discord",
      "WhatsApp",
      "Instagram",
      "X",
      "Facebook",
      "YouTube",
    ],
    softSkillsList: [
      "Resolución de problemas",
      "Trabajo en equipo",
      "Pensamiento lógico",
      "Liderazgo",
      "Comunicación",
      "Negociación",
      "Perfil técnico",
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
  const [photoError, setPhotoError] = useState(false);
  const t = content[lang];

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 md:py-16">
      {/* Top bar: language + PDF downloads */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[var(--muted)]/30">
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
          <a
            href="/cv-en.pdf"
            download="Francisco-Castello-CV-EN.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--muted)]/15 text-sm text-[var(--foreground)] hover:bg-[var(--muted)]/25 transition-colors"
          >
            {t.downloadCVEn}
          </a>
          <a
            href="/cv-es.pdf"
            download="Francisco-Castello-CV-ES.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--muted)]/15 text-sm text-[var(--foreground)] hover:bg-[var(--muted)]/25 transition-colors"
          >
            {t.downloadCVEs}
          </a>
        </div>
      </div>

      {/* Header with photo */}
      <header className="border-b border-[var(--muted)]/30 pb-8 mb-8 flex flex-col sm:flex-row gap-6 items-start">
        <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-[var(--muted)]/20 flex items-center justify-center">
          {!photoError ? (
            <img
              src="/photo.jpg"
              alt="Francisco Castello"
              className="w-full h-full object-cover"
              onError={() => setPhotoError(true)}
            />
          ) : (
            <span className="text-2xl sm:text-3xl font-bold text-[var(--muted)]" aria-hidden>FC</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)]">
            Francisco Castello
          </h1>
          <p className="text-lg text-[var(--muted)] mt-1">{t.title}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-sm text-[var(--muted)]">
            <a href="mailto:franciscojcastello@gmail.com" className="hover:text-[var(--foreground)] transition-colors">
              franciscojcastello@gmail.com
            </a>
            <a href="tel:+54-342-4215966" className="hover:text-[var(--foreground)] transition-colors">
              +54-342-4215966
            </a>
            <span>Tucumán 3148, Santa Fe 3000, Argentina</span>
            <a
              href="https://www.linkedin.com/in/franciscojaviercastello"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Profile */}
      <AnimatedSection className="mb-10" delayMs={0}>
        <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">
          {t.profile}
        </h2>
        <p className="text-[var(--foreground)] leading-relaxed">{t.profileText}</p>
      </AnimatedSection>

      {/* Work Experience */}
      <AnimatedSection className="mb-10" delayMs={60}>
        <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">
          {t.workExperience}
        </h2>
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
        <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">
          {t.education}
        </h2>
        <ul className="space-y-5">
          {t.educationList.map((item) => (
            <li key={item.title + item.institution}>
              <div className="flex flex-wrap justify-between gap-2">
                <h3 className="font-semibold text-[var(--foreground)]">{item.title}</h3>
                {item.period && <span className="text-sm text-[var(--muted)]">{item.period}</span>}
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

      {/* Technical Skills */}
      <AnimatedSection className="mb-10" delayMs={180}>
        <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">
          {t.technicalSkills}
        </h2>
        <ul className="flex flex-wrap gap-2">
          {t.technicalSkillsList.map((skill) => (
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
      <AnimatedSection className="mb-10" delayMs={240}>
        <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">
          {t.softSkills}
        </h2>
        <ul className="flex flex-wrap gap-2">
          {t.softSkillsList.map((skill) => (
            <li
              key={skill}
              className="px-3 py-1.5 rounded-md bg-[var(--muted)]/15 text-sm text-[var(--foreground)]"
            >
              {skill}
            </li>
          ))}
        </ul>
      </AnimatedSection>

      {/* Languages */}
      <AnimatedSection className="mb-10" delayMs={300}>
        <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">
          {t.languages}
        </h2>
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
        <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">
          {t.certifications}
        </h2>
        <ul className="space-y-1 text-[var(--foreground)] text-sm">
          {t.certificationsList.map((cert, i) => (
            <li key={i}>{cert}</li>
          ))}
        </ul>
      </AnimatedSection>
    </main>
  );
}
