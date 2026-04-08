import Link from 'next/link'
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Shield,
  Users,
  Award,
  Clock,
  MapPin,
  Building2,
  Wrench,
  TrendingUp,
  Handshake,
} from 'lucide-react'
import type { Metadata } from 'next'
import AnimateOnScroll from '../components/AnimateOnScroll'
import SectionLabel from '../components/SectionLabel'
import BackgroundImage from '../components/BackgroundImage'

export const metadata: Metadata = {
  title: 'À propos | Support Park',
  description:
    'Découvrez Support Park : pionniers de l\'innovation technologique dans le domaine du stationnement. Notre mission, nos valeurs, notre histoire.',
}

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Nous anticipons les évolutions technologiques pour proposer des solutions toujours plus performantes et adaptées aux nouveaux usages du stationnement.',
  },
  {
    icon: Shield,
    title: 'Fiabilité',
    description:
      'Nos engagements de service sont contractuels. Nous mesurons notre performance et la transparence est au cœur de notre relation client.',
  },
  {
    icon: Handshake,
    title: 'Proximité',
    description:
      'Présents sur tout le territoire, nous cultivons une relation de proximité avec chacun de nos clients. Un interlocuteur dédié vous accompagne au quotidien.',
  },
  {
    icon: TrendingUp,
    title: 'Excellence',
    description:
      'Nos équipes sont formées en continu aux dernières technologies. Nous visons l\'excellence dans chaque intervention, chaque installation, chaque interaction.',
  },
]

const milestones = [
  {
    year: '2008',
    title: 'Création',
    description: 'Fondation de Support Park avec la conviction que les parkings méritent un partenaire technologique dédié.',
  },
  {
    year: '2012',
    title: 'Expansion nationale',
    description: 'Déploiement de notre réseau de techniciens sur l\'ensemble du territoire français.',
  },
  {
    year: '2016',
    title: 'Innovation supervision',
    description: 'Lancement de notre plateforme de supervision centralisée pour le suivi en temps réel.',
  },
  {
    year: '2019',
    title: 'Électromobilité',
    description: 'Intégration des bornes de recharge électrique dans notre offre de services complète.',
  },
  {
    year: '2022',
    title: 'Intelligence prédictive',
    description: 'Déploiement d\'algorithmes prédictifs pour anticiper les pannes et optimiser la maintenance.',
  },
  {
    year: '2025',
    title: 'Leader national',
    description: 'Plus de 500 parkings gérés, confirmant notre position de référence sur le marché français.',
  },
]

const keyFigures = [
  { value: '500+', label: 'Parkings gérés', icon: Building2 },
  { value: '50+', label: 'Techniciens terrain', icon: Wrench },
  { value: '15+', label: 'Années d\'expérience', icon: Clock },
  { value: '98%', label: 'Satisfaction client', icon: Award },
  { value: '24/7', label: 'Disponibilité', icon: Clock },
  { value: '100%', label: 'Couverture France', icon: MapPin },
]

export default function APropos() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1920&q=80"
          blur={1}
          overlayOpacity={0.55}
        />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 radial-fade" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <SectionLabel label="À propos" />
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[0.95]">
              Pionniers de la<br />
              <span className="gradient-text">technologie parking</span>
            </h1>
            <p className="mt-8 text-xl text-white/50 max-w-3xl leading-relaxed">
              Depuis plus de 15 ans, Support Park transforme la gestion des parkings en
              France grâce à l&apos;innovation technologique, l&apos;expertise terrain et
              un engagement sans faille envers ses clients.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimateOnScroll>
              <div className="glass-card p-10 md:p-12 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">Notre Mission</h2>
                <p className="text-white/50 leading-relaxed text-lg">
                  Assurer le fonctionnement optimal de vos installations de parking, qu&apos;elles
                  aient été réalisées par notre équipe ou non. Nous sommes le partenaire unique
                  qui installe, maintient et supervise l&apos;ensemble de vos équipements
                  technologiques de stationnement.
                </p>
                <p className="mt-4 text-white/50 leading-relaxed text-lg">
                  Notre ambition : que chaque parking en France bénéficie d&apos;un niveau de
                  service et de technologie qui améliore l&apos;expérience de chaque usager.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="glass-card p-10 md:p-12 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">Notre Vision</h2>
                <p className="text-white/50 leading-relaxed text-lg">
                  Devenir la référence incontournable en France pour la gestion technologique
                  des parkings. Nous imaginons un avenir où chaque espace de stationnement est
                  intelligent, connecté et au service de la mobilité durable.
                </p>
                <p className="mt-4 text-white/50 leading-relaxed text-lg">
                  L&apos;électromobilité, la data et l&apos;intelligence artificielle transforment
                  nos parkings. Nous sommes au cœur de cette révolution.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Key Figures */}
      <section className="relative py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <div className="text-center">
              <SectionLabel label="Chiffres Clés" className="justify-center" />
              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
                Support Park <span className="gradient-text-accent">en chiffres</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {keyFigures.map((figure, index) => (
              <AnimateOnScroll key={figure.label} delay={index * 80}>
                <div className="glass-card p-6 text-center">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <figure.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{figure.value}</div>
                  <div className="text-xs text-white/40">{figure.label}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-32 overflow-hidden">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1920&q=80"
          blur={3}
          overlayOpacity={0.7}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/95 to-dark-950" />
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <SectionLabel label="Nos Valeurs" />
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
              Ce qui nous <span className="gradient-text-accent">anime</span>
            </h2>
            <p className="mt-6 text-lg text-white/40 max-w-2xl">
              Nos valeurs guident chacune de nos actions, de la conception d&apos;une solution
              à l&apos;intervention sur le terrain.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <AnimateOnScroll key={value.title} delay={index * 100}>
                <div className="glass-card-hover p-8 md:p-10 flex gap-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-white/40 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <SectionLabel label="Notre Parcours" />
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
              Plus de 15 ans<br />
              <span className="gradient-text-accent">d&apos;innovation</span>
            </h2>
          </AnimateOnScroll>

          <div className="mt-16 relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/[0.08]" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimateOnScroll key={milestone.year} delay={index * 80}>
                  <div
                    className={`relative flex flex-col md:flex-row items-start gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-20 md:pl-0`}>
                      <div className="text-4xl font-bold text-accent/30 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-2 w-5 h-5 rounded-full border-2 border-accent bg-dark-950" />
                    <div className="md:w-1/2" />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 radial-fade" />
        <div className="relative max-w-7xl mx-auto section-padding text-center">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
              <Heart className="w-4 h-4" />
              Rejoignez-nous
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Envie de collaborer<br />
              <span className="gradient-text-accent">avec Support Park ?</span>
            </h2>
            <p className="mt-6 text-lg text-white/40 max-w-2xl mx-auto">
              Que vous soyez un futur client, partenaire ou collaborateur,
              nous serions ravis d&apos;échanger avec vous.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Nous contacter
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/equipe" className="btn-outline text-base">
                Découvrir l&apos;équipe
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
