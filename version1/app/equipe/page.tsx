import Link from 'next/link'
import {
  ArrowRight,
  Users,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Shield,
  Wrench,
  Monitor,
  HeadphonesIcon,
  MapPin,
  Zap,
  CheckCircle2,
} from 'lucide-react'
import type { Metadata } from 'next'
import AnimateOnScroll from '../components/AnimateOnScroll'
import SectionLabel from '../components/SectionLabel'
import BackgroundImage from '../components/BackgroundImage'

export const metadata: Metadata = {
  title: 'Équipe | Support Park',
  description:
    'Découvrez l\'équipe Support Park : des experts passionnés par la technologie au service du stationnement. Techniciens, ingénieurs et conseillers à votre service.',
}

const leadership = [
  {
    name: 'Direction Générale',
    role: 'Stratégie & Vision',
    description:
      'Pilote la stratégie de développement de Support Park et veille à l\'alignement de nos services avec les besoins du marché.',
    icon: Briefcase,
  },
  {
    name: 'Direction Technique',
    role: 'Innovation & R&D',
    description:
      'Supervise l\'ensemble des opérations techniques, de la R&D à la mise en œuvre terrain, en garantissant l\'excellence de nos prestations.',
    icon: Wrench,
  },
  {
    name: 'Direction Commerciale',
    role: 'Relation Client',
    description:
      'Développe et maintient des relations de confiance durables avec nos clients, en proposant des solutions adaptées à chaque besoin.',
    icon: Users,
  },
  {
    name: 'Direction des Opérations',
    role: 'Logistique & Terrain',
    description:
      'Coordonne les interventions sur tout le territoire, optimise la logistique et garantit le respect des délais et engagements.',
    icon: MapPin,
  },
]

const departments = [
  {
    name: 'Équipe Technique Terrain',
    count: '30+',
    icon: Wrench,
    description:
      'Nos techniciens sont le cœur de Support Park. Répartis sur tout le territoire, ils interviennent quotidiennement pour installer, maintenir et réparer vos équipements.',
    skills: [
      'Certifiés multi-technologies',
      'Formation continue trimestrielle',
      'Équipés d\'outils de diagnostic avancés',
      'Habilitations électriques (BR, B2V)',
    ],
  },
  {
    name: 'Équipe Supervision & Support',
    count: '10+',
    icon: Monitor,
    description:
      'Depuis notre centre de supervision, ils surveillent en temps réel l\'ensemble des installations de nos clients et coordonnent les interventions.',
    skills: [
      'Monitoring 24/7',
      'Diagnostic à distance',
      'Coordination des interventions',
      'Analyse prédictive',
    ],
  },
  {
    name: 'Équipe Ingénierie & Projets',
    count: '8+',
    icon: GraduationCap,
    description:
      'Nos ingénieurs conçoivent les solutions techniques, gèrent les projets d\'envergure et accompagnent l\'évolution technologique de nos clients.',
    skills: [
      'Conception de solutions sur mesure',
      'Gestion de projets complexes',
      'Veille technologique permanente',
      'Intégration systèmes',
    ],
  },
  {
    name: 'Équipe Service Client',
    count: '5+',
    icon: HeadphonesIcon,
    description:
      'Premier point de contact de nos clients, ils assurent un suivi personnalisé et une réactivité exemplaire pour toutes vos demandes.',
    skills: [
      'Réponse en moins de 2h',
      'Suivi personnalisé',
      'Gestion des contrats',
      'Reporting client',
    ],
  },
]

const certifications = [
  'Habilitations électriques BR, B2V, HC',
  'Certification CACES (nacelles, engins)',
  'Formation sécurité incendie',
  'Certifications constructeurs (Indect, Skidata, Scheidt & Bachmann)',
  'Formation continue en technologies IoT',
  'Habilitation travail en hauteur',
]

export default function Equipe() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1621929747188-0b4dc28498d6?w=1920&q=80"
          blur={1}
          overlayOpacity={0.55}
        />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 radial-fade" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <SectionLabel label="Notre Équipe" />
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[0.95]">
              Des experts passionnés<br />
              <span className="gradient-text">à votre service</span>
            </h1>
            <p className="mt-8 text-xl text-white/50 max-w-3xl leading-relaxed">
              Plus de 50 professionnels qualifiés, répartis sur tout le territoire
              français, unis par la même passion : l&apos;excellence technologique
              au service du stationnement.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative py-32 overflow-hidden">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1545179605-1f4bccb8e31b?w=1920&q=80"
          blur={3}
          overlayOpacity={0.7}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/95 to-dark-950" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <SectionLabel label="Direction" />
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
              Une équipe de direction<br />
              <span className="gradient-text-accent">expérimentée</span>
            </h2>
            <p className="mt-6 text-lg text-white/40 max-w-2xl">
              Notre comité de direction réunit des profils complémentaires, alliant expertise
              technique, vision stratégique et sens du service client.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <AnimateOnScroll key={leader.name} delay={index * 100}>
                <div className="glass-card-hover p-8 text-center h-full flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <leader.icon className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{leader.name}</h3>
                  <p className="text-sm text-accent mb-4">{leader.role}</p>
                  <p className="text-sm text-white/40 leading-relaxed">{leader.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <SectionLabel label="Nos Pôles" />
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
              Une organisation<br />
              <span className="gradient-text-accent">orientée performance</span>
            </h2>
          </AnimateOnScroll>

          <div className="mt-16 space-y-6">
            {departments.map((dept, index) => (
              <AnimateOnScroll key={dept.name} delay={index * 80}>
                <div className="glass-card p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.04]">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                          <dept.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{dept.name}</h3>
                          <span className="text-sm text-accent">{dept.count} collaborateurs</span>
                        </div>
                      </div>
                      <p className="text-white/40 leading-relaxed">{dept.description}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">
                        Compétences clés
                      </h4>
                      <div className="space-y-2">
                        {dept.skills.map((skill) => (
                          <div key={skill} className="flex items-center gap-2 text-sm text-white/50">
                            <CheckCircle2 className="w-4 h-4 text-accent/60 shrink-0" />
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <SectionLabel label="Certifications & Formations" />
              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
                Une expertise<br />
                <span className="gradient-text-accent">certifiée</span>
              </h2>
              <p className="mt-6 text-lg text-white/40 leading-relaxed">
                Chaque membre de nos équipes techniques dispose des certifications et
                habilitations nécessaires pour intervenir en toute sécurité et avec la
                plus grande expertise sur vos installations.
              </p>
              <p className="mt-4 text-lg text-white/40 leading-relaxed">
                Nous investissons continuellement dans la formation de nos équipes pour
                rester à la pointe des technologies de parking.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={cert}
                    className="glass-card p-5 flex items-center gap-4 transition-all duration-300 hover:bg-white/[0.06]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-white/60 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Recruitment CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 radial-fade" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
                  <Zap className="w-4 h-4" />
                  Nous recrutons
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  Rejoignez une équipe<br />
                  <span className="gradient-text-accent">qui fait la différence</span>
                </h2>
                <p className="mt-6 text-lg text-white/40 max-w-2xl mx-auto">
                  Vous êtes technicien, ingénieur ou passionné de technologie ?
                  Nous cherchons des talents pour renforcer nos équipes sur
                  tout le territoire.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="btn-primary text-base">
                    Postuler
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/contact" className="btn-outline text-base">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
