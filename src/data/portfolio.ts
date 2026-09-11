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
  github: '',
  linkedin: '',
  email: '',
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

// Complétez uniquement les champs dont vous connaissez les informations exactes.
export const experiences: Experience[] = [
  {
    company: 'Infomil',
    role: '',
    period: '',
    location: '',
    description: '',
    technologies: [],
  },
  {
    company: 'Région Limoges',
    role: '',
    period: '',
    location: '',
    description: '',
    technologies: [],
  },
]

// Ajoutez ici les projets que vous souhaitez présenter.
export const projects: Project[] = []

// Ces axes reprennent uniquement les centres d'intérêt fournis dans le brief.
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
  school: '',
  period: '',
  description: '',
} as const
