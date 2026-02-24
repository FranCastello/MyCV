"use client";

/**
 * Caricaturas tipo anime/chibi que acompañan cada título de sección del CV.
 * Inspiradas en la foto: pelo oscuro, sonrisa. Cada variante tiene un detalle que referencia la sección.
 */
function ChibiFace({ children, accent = "#0d9488" }) {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="20" cy="20" rx="14" ry="16" fill={accent} fillOpacity="0.12" stroke="#0f766e" />
      <path d="M6 18 Q6 8 20 6 Q34 8 34 18" fill="#1e293b" stroke="#0f172a" strokeWidth="0.8" />
      <ellipse cx="14" cy="19" rx="3.5" ry="4" fill="#0f766e" fillOpacity="0.3" />
      <ellipse cx="26" cy="19" rx="3.5" ry="4" fill="#0f766e" fillOpacity="0.3" />
      <circle cx="14" cy="19" r="1.2" fill="#0f766e" />
      <circle cx="26" cy="19" r="1.2" fill="#0f766e" />
      <path d="M12 26 Q20 32 28 26" strokeWidth="1.2" />
      {children}
    </g>
  );
}

const variants = {
  profile: (
    <ChibiFace>
      <path d="M20 12 L18 18 L20 16 L22 18 Z" fill="#0d9488" fillOpacity="0.4" stroke="#0f766e" />
    </ChibiFace>
  ),
  workExperience: (
    <ChibiFace>
      <rect x="26" y="8" width="10" height="12" rx="1" fill="none" stroke="#0f766e" strokeWidth="1" />
      <path d="M28 11 L34 11 M28 14 L32 14" stroke="#0f766e" />
    </ChibiFace>
  ),
  education: (
    <ChibiFace>
      <path d="M20 8 L20 4" strokeWidth="2" />
      <ellipse cx="20" cy="6" rx="3" ry="2" fill="#0d9488" />
    </ChibiFace>
  ),
  technicalSkills: (
    <ChibiFace>
      <path d="M26 10 L28 14 L26 18 M30 10 L32 14 L30 18" stroke="#0f766e" />
    </ChibiFace>
  ),
  coreSkills: (
    <ChibiFace>
      <path d="M20 8 L20 4 M16 6 L24 6" strokeWidth="1.2" />
      <circle cx="20" cy="5" r="1.5" fill="#0d9488" fillOpacity="0.5" />
    </ChibiFace>
  ),
  industryExpertise: (
    <ChibiFace>
      <rect x="26" y="7" width="8" height="10" rx="1" fill="none" stroke="#0f766e" />
      <path d="M28 10 L32 10 M28 13 L30 13" stroke="#0f766e" />
    </ChibiFace>
  ),
  softSkills: (
    <ChibiFace>
      <path d="M26 10 Q30 14 26 18" />
      <path d="M26 12 L30 14 L26 16" />
    </ChibiFace>
  ),
  languages: (
    <ChibiFace>
      <path d="M30 10 Q34 10 34 14 L34 18 Q34 20 32 20 L28 20 L26 22 L26 20 L28 20 L32 20 Q34 20 34 18 Z" fill="#0d9488" fillOpacity="0.2" stroke="#0f766e" />
    </ChibiFace>
  ),
  certifications: (
    <ChibiFace>
      <rect x="26" y="6" width="8" height="12" rx="1.5" fill="none" stroke="#0f766e" />
      <circle cx="30" cy="16" r="0.8" fill="#0f766e" />
    </ChibiFace>
  ),
};

export default function AnimeChibi({ variant = "profile", className = "" }) {
  const content = variants[variant] ?? variants.profile;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      className={`w-10 h-10 flex-shrink-0 text-teal-600 sm:w-12 sm:h-12 ${className}`}
      aria-hidden
    >
      {content}
    </svg>
  );
}
