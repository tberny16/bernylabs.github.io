import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react'
import { useEffect, useState, type ReactNode } from 'react'
import {
  education,
  experiences,
  focusAreas,
  navigation,
  profile,
  projects,
} from './data/portfolio'

type Theme = 'light' | 'dark'

type ProfileLinkProps = {
  href: string
  children: ReactNode
  className?: string
  download?: boolean
  external?: boolean
  titleWhenEmpty: string
}

function ProfileLink({
  href,
  children,
  className = '',
  download = false,
  external = false,
  titleWhenEmpty,
}: ProfileLinkProps) {
  if (!href) {
    return (
      <span className={`${className} is-disabled`} aria-disabled="true" title={titleWhenEmpty}>
        {children}
      </span>
    )
  }

  return (
    <a
      className={className}
      href={href}
      download={download || undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  )
}

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    return saved ?? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'light' ? '#f5f7fa' : '#0b0e14',
    )
  }, [theme])

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('main section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-28% 0px -58%', threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenu">Aller au contenu</a>

      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Revenir à l'accueil" onClick={closeMenu}>
          T<span>.</span>
        </a>

        <nav className="desktop-nav" aria-label="Navigation principale">
          {navigation.map((item) => (
            <a
              key={item.href}
              className={activeSection === item.href.slice(1) ? 'is-active' : ''}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="round-button"
            type="button"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label={theme === 'light' ? 'Activer le thème sombre' : 'Activer le thème clair'}
          >
            {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button
            className="round-button menu-button"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} id="mobile-menu">
        {navigation.map((item, index) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            <span>0{index + 1}</span>{item.label}
          </a>
        ))}
      </div>

      <main id="contenu">
        <section className="hero" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Portfolio · 2026</p>
            <h1>
              {profile.name}
              <span>{profile.title}</span>
            </h1>
            <p className="hero-intro">
              Je m'intéresse à la conception de solutions techniques, au logiciel,
              aux infrastructures et aux nouvelles technologies.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projets">
                Voir mes projets <ArrowDownRight size={17} />
              </a>
              <ProfileLink
                href={profile.cv}
                className="button button-secondary"
                download
                titleWhenEmpty="Ajoutez le chemin du CV dans src/data/portfolio.ts"
              >
                CV <Download size={16} />
              </ProfileLink>
              <ProfileLink href={profile.github} className="text-link" external titleWhenEmpty="Ajoutez l'URL GitHub dans src/data/portfolio.ts">
                GitHub <ArrowUpRight size={14} />
              </ProfileLink>
              <ProfileLink href={profile.linkedin} className="text-link" external titleWhenEmpty="Ajoutez l'URL LinkedIn dans src/data/portfolio.ts">
                LinkedIn <ArrowUpRight size={14} />
              </ProfileLink>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="signal signal-a" />
            <div className="signal signal-b" />
            <div className="signal signal-c" />
            <div className="visual-label label-top">01 - Profil</div>
            <div className="visual-core"><span>T</span></div>
            <div className="visual-label label-bottom">Concevoir · Structurer · Évoluer</div>
          </div>

          <a className="scroll-cue" href="#a-propos">Défiler <span /></a>
        </section>

        <section className="section about reveal" id="a-propos">
          <div className="section-index">01</div>
          <div className="section-heading">
            <p className="kicker">À propos</p>
            <h2>Comprendre, construire,<br />faire évoluer.</h2>
          </div>
          <div className="about-copy">
            <p>
              Ingénieur informatique, j'aime aborder les problématiques techniques
              avec méthode et transformer des besoins concrets en solutions lisibles.
            </p>
            <p>
              Curieux et attentif à la façon dont les systèmes sont conçus, je cherche
              à progresser en continu et à contribuer à des projets qui ont un usage réel.
            </p>
          </div>
        </section>

        <section className="section reveal" id="experiences">
          <div className="section-index">02</div>
          <div className="section-heading section-heading-wide">
            <p className="kicker">Expériences</p>
            <h2>Un parcours ancré<br />dans le concret.</h2>
          </div>
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <article className="experience-row" key={`${experience.company}-${experience.role}`}>
                <div className="experience-number">0{index + 1}</div>
                <div>
                  <h3>{experience.company}</h3>
                  <p className="experience-role">{experience.role || 'Intitulé du poste à préciser'}</p>
                </div>
                <div className="experience-detail">
                  {experience.description && <p>{experience.description}</p>}
                  {experience.technologies.length > 0 && (
                    <ul className="tag-list">
                      {experience.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                  )}
                </div>
                <div className="experience-meta">
                  {experience.period && <span>{experience.period}</span>}
                  {experience.location && <span>{experience.location}</span>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section reveal" id="projets">
          <div className="section-index">03</div>
          <div className="section-heading section-heading-wide">
            <p className="kicker">Projets</p>
            <h2>Des idées traduites<br />en solutions.</h2>
          </div>

          {projects.length > 0 ? (
            <div className="project-list">
              {projects.map((project, index) => (
                <article className="project-row" key={project.title}>
                  <span>0{index + 1}</span>
                  <div><h3>{project.title}</h3><p>{project.description}</p></div>
                  <ul className="tag-list">
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                  {(project.website || project.repository) && (
                    <a href={project.website || project.repository} target="_blank" rel="noreferrer" aria-label={`Voir ${project.title}`}>
                      <ArrowUpRight size={19} />
                    </a>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-projects">
              <span className="empty-projects-mark">03</span>
              <div>
                <h3>Projets en cours de sélection.</h3>
                <p>Cette section accueillera une sélection de réalisations et leurs choix techniques.</p>
              </div>
            </div>
          )}
        </section>

        <section className="section skills-section reveal" id="competences">
          <div className="section-index">04</div>
          <div className="section-heading">
            <p className="kicker">Compétences</p>
            <h2>Des sujets qui<br />m'intéressent.</h2>
          </div>
          <div className="focus-list">
            {focusAreas.map((area) => (
              <article key={area.index}>
                <span>{area.index}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section reveal" id="formation">
          <div className="section-index">05</div>
          <div className="section-heading">
            <p className="kicker">Formation</p>
            <h2>Apprendre avec<br />exigence.</h2>
          </div>
          <div className="education-card">
            <p className="education-label">Parcours</p>
            <div className="education-list">
              {education.map((course) => (
                <article className="education-entry" key={`${course.title}-${course.school}`}>
                  <h3>{course.title}</h3>
                  <div className="education-meta">
                    <span>{course.school}</span>
                    <span>{course.period}</span>
                  </div>
                  {course.description && <p className="education-description">{course.description}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section reveal" id="contact">
          <p className="kicker">Contact · 06</p>
          <div className="contact-title">
            <h2>Échangeons<span>.</span></h2>
            <p>Pour parler d'un projet, d'une opportunité ou simplement d'un sujet technique.</p>
          </div>
          <ProfileLink
            href={profile.email ? `mailto:${profile.email}` : ''}
            className="contact-button"
            titleWhenEmpty="Ajoutez l'adresse e-mail dans src/data/portfolio.ts"
          >
            <Mail size={18} /> Me contacter <ArrowUpRight size={17} />
          </ProfileLink>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Ingénierie · Logiciel · Infrastructure</p>
        <a href="#accueil">Retour en haut ↑</a>
      </footer>
    </div>
  )
}

export default App
