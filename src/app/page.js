export default function CVPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 md:py-16">
      {/* Header */}
      <header className="border-b border-[var(--muted)]/30 pb-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)]">
          Francisco Castello
        </h1>
        <p className="text-lg text-[var(--muted)] mt-1">
          Industrial Engineer
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-sm text-[var(--muted)]">
          <a href="mailto:franciscojcastello@gmail.com" className="hover:text-[var(--foreground)] transition-colors">
            franciscojcastello@gmail.com
          </a>
          <a href="tel:+54-342-4215966" className="hover:text-[var(--foreground)] transition-colors">
            +54-342-4215966
          </a>
          <span>Tucumán 3148, Santa Fe 3000, Argentina</span>
          <a href="https://www.linkedin.com/in/franciscojaviercastello" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors">
            LinkedIn
          </a>
        </div>
      </header>

      {/* Profile */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">
          Profile
        </h2>
        <p className="text-[var(--foreground)] leading-relaxed">
          I am an Industrial Engineer. My experience includes general IT project management and, more recently, a focus on blockchain and web3 technology. I prioritize efficiency from project inception to successful delivery. I am a sociable individual who is always eager to learn and grow. I enjoy sports and outdoor activities, and I am passionate about entrepreneurship.
        </p>
      </section>

      {/* Work Experience */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">
          Work Experience
        </h2>
        <ul className="space-y-8">
          <li>
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="font-semibold text-[var(--foreground)]">
                Engineering Project Manager
              </h3>
              <span className="text-sm text-[var(--muted)]">2024 – Now</span>
            </div>
            <p className="text-sm text-[var(--muted)] mt-0.5">Avature</p>
            <ul className="mt-3 space-y-1 text-[var(--foreground)] leading-relaxed list-disc list-inside text-sm">
              <li>Maintain an over-arching view of the interactions between multiple teams to guarantee fluent communication and collaboration.</li>
              <li>Optimize efficiency through the creation, tuning, and formalization of cross-team processes.</li>
              <li>Ensure quality standards and identify opportunities for improvement across our Engineering area.</li>
              <li>Review the tasks engineering teams are in charge of to ensure they fulfill company standards.</li>
              <li>Set and reassess standards and policies.</li>
              <li>Design and automate processes for Engineering.</li>
              <li>Escalate issues and coordinate solutions.</li>
              <li>Receive and reroute queries from various teams.</li>
            </ul>
          </li>
          <li>
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="font-semibold text-[var(--foreground)]">
                Project &amp; Product Manager
              </h3>
              <span className="text-sm text-[var(--muted)]">2021 – 2023</span>
            </div>
            <p className="text-sm text-[var(--muted)] mt-0.5">Shone Live (Guru Labs)</p>
            <p className="mt-2 text-[var(--foreground)] leading-relaxed text-sm">
              As a Project &amp; Product Manager at Guru Labs, a part of the web3 ecosystem within Shone Live, I led three pioneering projects in the realm of blockchain technology and decentralization. These projects encompassed a platform for NFT sales during live streams and trivia games, a decentralized exchange for warranty-backed NFT auctions, and a white-label platform aimed at enhancing user acquisition and retention for web3 projects.
            </p>
            <ul className="mt-3 space-y-1 text-[var(--foreground)] leading-relaxed list-disc list-inside text-sm">
              <li>Implementing SCRUM methodology, including organizing and moderating all associated meetings.</li>
              <li>Gathering functional requirements, managing backlogs and sprints.</li>
              <li>Creating, prioritizing, and refining epics, user stories, and development tasks.</li>
              <li>Research and documentation related to product development.</li>
              <li>Creating and maintaining user-oriented product documentation.</li>
              <li>Platform testing, identifying issues, and suggesting improvements in user interfaces and experience.</li>
              <li>Competitive analysis, product research, and features map design.</li>
              <li>Supporting marketing and sales activities, including social media management, content calendar design, research, and AI-driven content creation.</li>
              <li>Reviewing and assessing user interfaces proposed by the design team.</li>
              <li>Contributing to the creation of pitch decks for fundraising.</li>
            </ul>
          </li>
          <li>
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="font-semibold text-[var(--foreground)]">
                Management
              </h3>
              <span className="text-sm text-[var(--muted)]">2014 – 2021</span>
            </div>
            <p className="text-sm text-[var(--muted)] mt-0.5">Agrybal S.A.</p>
            <ul className="mt-2 space-y-1 text-[var(--foreground)] leading-relaxed list-disc list-inside text-sm">
              <li>Agricultural cycle management.</li>
              <li>Livestock cycle management.</li>
              <li>Supply chain management.</li>
              <li>Investments and acquisitions.</li>
            </ul>
          </li>
          <li>
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="font-semibold text-[var(--foreground)]">
                Management
              </h3>
              <span className="text-sm text-[var(--muted)]">2012 – 2021</span>
            </div>
            <p className="text-sm text-[var(--muted)] mt-0.5">Medytec S.R.L.</p>
            <ul className="mt-2 space-y-1 text-[var(--foreground)] leading-relaxed list-disc list-inside text-sm">
              <li>International Commerce.</li>
              <li>Financial and Business Management.</li>
              <li>Suppliers Management.</li>
              <li>Logistics Coordination.</li>
              <li>Projects Management.</li>
              <li>Quality Assurance.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">
          Education
        </h2>
        <ul className="space-y-5">
          <li>
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="font-semibold text-[var(--foreground)]">
                Industrial Engineer
              </h3>
              <span className="text-sm text-[var(--muted)]">2009 – 2017</span>
            </div>
            <p className="text-sm text-[var(--muted)]">Facultad de Ingeniería Química (UNL)</p>
            <p className="text-xs text-[var(--muted)] mt-1">
              <a href="https://fiq.unl.edu.ar/vivilafiq/ingenieria-industrial/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)]">fiq.unl.edu.ar</a> — Project Management, Information Systems for Manufacturing, Programming (Pascal).
            </p>
          </li>
          <li>
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="font-semibold text-[var(--foreground)]">
                Master in Business Administration
              </h3>
              <span className="text-sm text-[var(--muted)]">2019 – Present</span>
            </div>
            <p className="text-sm text-[var(--muted)]">Facultad de Ciencias Económicas (UNL)</p>
            <p className="text-xs text-[var(--muted)] mt-1">
              Production and Technological Innovation, Marketing Direction, Information Systems for Decision Making.
            </p>
          </li>
          <li>
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="font-semibold text-[var(--foreground)]">
                Diploma in Project Management
              </h3>
              <span className="text-sm text-[var(--muted)]">2022 – 2023</span>
            </div>
            <p className="text-sm text-[var(--muted)]">Academy by Numen</p>
          </li>
          <li>
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="font-semibold text-[var(--foreground)]">
                Diploma in Web Development
              </h3>
              <span className="text-sm text-[var(--muted)]">2023 – Present</span>
            </div>
            <p className="text-sm text-[var(--muted)]">Academy by Numen</p>
          </li>
          <li>
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="font-semibold text-[var(--foreground)]">
                English Upper Intermediate Level
              </h3>
            </div>
            <p className="text-sm text-[var(--muted)]">Asociación Argentina de Cultura Inglesa</p>
          </li>
        </ul>
      </section>

      {/* Technical Skills */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">
          Technical Skills
        </h2>
        <ul className="flex flex-wrap gap-2">
          {[
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
          ].map((skill) => (
            <li
              key={skill}
              className="px-3 py-1.5 rounded-md bg-[var(--muted)]/15 text-sm text-[var(--foreground)]"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Soft Skills */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">
          Soft Skills
        </h2>
        <ul className="flex flex-wrap gap-2">
          {[
            "Problem solving",
            "Teamwork",
            "Logical thinking",
            "Leadership",
            "Communication",
            "Negotiation",
            "Technical skills",
          ].map((skill) => (
            <li
              key={skill}
              className="px-3 py-1.5 rounded-md bg-[var(--muted)]/15 text-sm text-[var(--foreground)]"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Languages */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">
          Languages
        </h2>
        <ul className="space-y-1 text-[var(--foreground)]">
          <li><strong>Spanish</strong> — Native</li>
          <li><strong>English</strong> — Upper Intermediate (Cambridge FIRST Certificate, Level B2)</li>
        </ul>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-lg font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">
          Certifications
        </h2>
        <ul className="space-y-1 text-[var(--foreground)] text-sm">
          <li>Cambridge FIRST Certificate — Level B2</li>
          <li>Project Management Fundamentals — LinkedIn Learning</li>
          <li>SCRUM: Roles — LinkedIn Learning</li>
          <li>Javascript Essentials — LinkedIn Learning</li>
          <li>Course in Project Management</li>
        </ul>
      </section>
    </main>
  );
}
