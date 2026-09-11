export type Experience = {
  company: string
  role: string
  period: string
  location: string
  description: string
  technologies: string[]
}

export type Project = {
  title: string
  description: string
  year: string
  technologies: string[]
  repository: string
  website: string
}

export const profile = {
  name: 'Théo',
  title: 'Ingénieur informatique',
  github: 'https://github.com/tberny16',
  linkedin: 'https://www.linkedin.com/in/theoberny',
  email: 'theo.berny@outlook.com',
  cv: '',
} as const

export const navigation = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Expériences', href: '#experiences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Formation', href: '#formation' },
  { label: 'Contact', href: '#contact' },
] as const

export const experiences: Experience[] = [
    {
    company: 'Infomil',
    role: 'Ingénieurs Système & Réseau',
    period: 'Septembre 2026',
    location: 'Toulouse',
    description: '',
    technologies: [Openshift, Harbord, Switch, Réseau, Système, Linux, Windows],
  },
  {
    company: 'Infomil',
    role: 'Alternant Ingénieurs Système & Réseau',
    period: 'Septembre 2024 - Septembre 2026',
    location: 'Toulouse',
    description: "Travail autour d'Openshift, j'ai déployé plusieurs clusters, une application et des pods. J'ai également piloté un POC de qualification d'une nouvelle architecture réseau pour nos plateformes hyperconvergées (HCI)",
    technologies: [Openshift, Harbord, Switch, Réseau, Système, Linux, Windows],
  },
  {
    company: 'Région Limoges',
    role: '',
    period: '',
    location: 'Limoges',
    description: "Travail autour de Docker et Kubernetes (maquettage Tanzu, Rancher et Portainer) et maquettage d'interface de pilotage d'Ansible (Rundeck et Sémaphore)",
    technologies: [Docker, Portainer, Rundeck, Sémaphore, Rancher],
  },
]

export const projects: Project[] = []

export const focusAreas = [
  {
    index: '01',
    title: 'Conception logicielle',
    description: 'Imaginer des solutions claires, robustes et adaptées à des usages concrets.',
  },
  {
    index: '02',
    title: 'Infrastructures',
    description: 'Comprendre les systèmes qui permettent aux applications de fonctionner durablement.',
  },
  {
    index: '03',
    title: 'Nouvelles technologies',
    description: 'Explorer de nouveaux outils avec curiosité, recul et sens pratique.',
  },
] as const

export const education = {
  title: "Formation d'ingénieur informatique",
  school: '3IL Ingénieur Limoges',
  period: '2021-2026',
  description: 'Aveec option robotique, IA, IoT',
} as const
