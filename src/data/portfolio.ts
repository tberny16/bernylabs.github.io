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

export type Education = {
  title: string
  school: string
  period: string
  description: string
}

export const profile = {
  name: 'Théo',
  title: 'Ingénieur informatique',
  github: 'https://github.com/tberny16',
  linkedin: 'https://www.linkedin.com/in/theoberny',
  email: 'theo.berny@outlook.com',
  cv: './Theo-Berny-CV.pdf',
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
    role: 'Ingénieur systèmes et réseaux',
    period: 'Depuis septembre 2026',
    location: 'Toulouse',
    description: '',
    technologies: ['OpenShift', 'Harbor', 'Réseaux', 'Linux', 'Windows Server'],
  },
  {
    company: 'Infomil',
    role: 'Alternant ingénieur systèmes et réseaux',
    period: 'Septembre 2024 - septembre 2026',
    location: 'Toulouse',
    description: "Déploiement de plusieurs clusters OpenShift, d'une application et de pods. Pilotage d'un POC visant à qualifier une nouvelle architecture réseau pour des plateformes hyperconvergées (HCI).",
    technologies: ['OpenShift', 'Harbor', 'Réseaux', 'Linux', 'Windows Server', 'HCI'],
  },
  {
    company: 'DSI Limoges',
    role: 'Stagiaire en cycle préparatoire',
    period: '',
    location: 'Limoges',
    description: "Travail autour de Docker et Kubernetes, avec le maquettage de Tanzu, Rancher et Portainer, ainsi que d'interfaces de pilotage d'Ansible avec Rundeck et Semaphore.",
    technologies: ['Docker', 'Kubernetes', 'Tanzu', 'Rancher', 'Portainer', 'Ansible', 'Rundeck', 'Semaphore'],
  },
]

export const projects: Project[] = []

export const focusAreas = [
  {
    index: '01',
    title: 'Systèmes et réseaux',
    description: 'Linux, Windows Server, virtualisation, réseaux et infrastructures hyperconvergées.',
  },
  {
    index: '02',
    title: 'Conteneurs et orchestration',
    description: 'Docker, Kubernetes, OpenShift, Tanzu, Rancher, Portainer et Harbor.',
  },
  {
    index: '03',
    title: 'Développement et automatisation',
    description: 'C, Java, Python, PowerShell, développement web, Ansible, Rundeck et Semaphore.',
  },
  {
    index: '04',
    title: 'Données et outils',
    description: 'PostgreSQL, MATLAB, XML et Bootstrap.',
  },
  {
    index: '05',
    title: 'Langues',
    description: 'Français : langue maternelle. Anglais : niveau B2, TOEIC 825/990. Espagnol : niveau B1.',
  },
] as const

export const education: Education[] = [
  {
    title: 'DESS en science des données et intelligence artificielle',
    school: 'Université du Québec en Outaouais (UQO) - Gatineau, Canada',
    period: '2025 - 2026',
    description: "Double diplôme réalisé dans le cadre de la troisième année du cycle d'ingénieur.",
  },
  {
    title: "Diplôme d'ingénieur en informatique",
    school: '3iL Ingénieurs - Limoges, France',
    period: '2021 - 2026',
    description: "Cycle préparatoire, double cursus en licence 3 informatique, puis cycle d'ingénieur avec des enseignements en robotique, intelligence artificielle et IoT.",
  },
  {
    title: 'Licence 3 informatique',
    school: 'Université de Limoges - Limoges, France',
    period: '2023 - 2024',
    description: "Double cursus suivi en parallèle de la première année du cycle d'ingénieur.",
  },
  {
    title: 'Baccalauréat général - mention Bien',
    school: 'Lycée Guez-de-Balzac - Angoulême, France',
    period: '2019 - 2021',
    description: 'Spécialités mathématiques et physique-chimie, option mathématiques expertes.',
  },
]
