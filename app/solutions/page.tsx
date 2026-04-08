import Link from 'next/link'
import {
  ArrowRight,
  ShoppingBag,
  Stethoscope,
  Plane,
  Building2,
  GraduationCap,
  Hotel,
  Factory,
  Landmark,
  CheckCircle2,
  Zap,
  ChevronRight,
} from 'lucide-react'
import type { Metadata } from 'next'
import AnimateOnScroll from '../components/AnimateOnScroll'
import SectionLabel from '../components/SectionLabel'
import BackgroundImage from '../components/BackgroundImage'

export const metadata: Metadata = {
  title: 'Solutions | Support Park',
  description:
    'Solutions de parking adaptées à chaque secteur : centres commerciaux, hôpitaux, aéroports, bureaux, universités, hôtels et plus encore.',
}

const solutions = [
  {
    id: 'centres-commerciaux',
    icon: ShoppingBag,
    title: 'Centres Commerciaux',
    subtitle: 'Fluidité et expérience client',
    description:
      'Transformez votre parking en un atout commercial. Le guidage dynamique réduit le temps de recherche d\'une place de 30%, améliorant la satisfaction client et augmentant la fréquentation de vos enseignes.',
    challenges: [
      'Forte affluence aux heures de pointe',
      'Expérience client dès l\'arrivée',
      'Gestion multi-niveaux complexe',
      'Sécurité et éclairage',
    ],
    solutions: [
      'Guidage dynamique avec comptage temps réel',
      'Affichage LED par zone et par niveau',
      'Éclairage adaptatif à détection de présence',
      'Supervision centralisée multi-sites',
    ],
  },
  {
    id: 'hopitaux',
    icon: Stethoscope,
    title: 'Hôpitaux & Cliniques',
    subtitle: 'Accessibilité et sérénité',
    description:
      'Dans un environnement où chaque minute compte, un parking bien géré contribue à réduire le stress des patients et visiteurs. Nos solutions facilitent l\'accès et fluidifient la circulation.',
    challenges: [
      'Urgences et accès prioritaires',
      'Flux de visiteurs continus',
      'Places réservées (PMR, ambulances)',
      'Fonctionnement 24h/24',
    ],
    solutions: [
      'Gestion différenciée des zones d\'accès',
      'Guidage vers places PMR et réservées',
      'Maintenance 24/7 sans interruption',
      'Bornes de recharge pour flotte médicale',
    ],
  },
  {
    id: 'aeroports',
    icon: Plane,
    title: 'Aéroports & Gares',
    subtitle: 'Volume et performance',
    description:
      'Gérez des milliers de places avec une précision optimale. Nos systèmes sont conçus pour les environnements à très fort trafic, avec une fiabilité et une disponibilité maximales.',
    challenges: [
      'Capacités très importantes (5000+ places)',
      'Flux internationaux et multilingues',
      'Exigences de sécurité renforcées',
      'Intégration avec systèmes de transport',
    ],
    solutions: [
      'Guidage haute capacité avec compteurs P0-P6',
      'Signalétique multilingue dynamique',
      'Systèmes de reconnaissance de plaques',
      'API d\'intégration avec vos systèmes existants',
    ],
  },
  {
    id: 'bureaux',
    icon: Building2,
    title: 'Bureaux & Sièges Sociaux',
    subtitle: 'Optimisation et image',
    description:
      'Un parking professionnel bien géré reflète l\'image de votre entreprise. Optimisez l\'utilisation de vos places, facilitez l\'accès de vos collaborateurs et visiteurs.',
    challenges: [
      'Places attribuées vs. mutualisées',
      'Gestion des visiteurs VIP',
      'Recharge de véhicules électriques',
      'Optimisation du taux d\'occupation',
    ],
    solutions: [
      'Système de réservation de places',
      'Bornes de recharge avec gestion intelligente',
      'Contrôle d\'accès par badge et reconnaissance',
      'Tableaux de bord d\'occupation en temps réel',
    ],
  },
  {
    id: 'universites',
    icon: GraduationCap,
    title: 'Universités & Campus',
    subtitle: 'Gestion de flux',
    description:
      'Gérez efficacement les parkings de campus avec des milliers d\'usagers quotidiens. Solutions adaptées aux horaires variables et aux pics de fréquentation liés aux cours et événements.',
    challenges: [
      'Pics de fréquentation aux changements de cours',
      'Mix d\'usagers (étudiants, personnel, visiteurs)',
      'Budget contraint du secteur public',
      'Grands espaces extérieurs',
    ],
    solutions: [
      'Comptage et guidage par zone',
      'Tarification différenciée par profil',
      'Solutions robustes et durables',
      'Maintenance préventive planifiée',
    ],
  },
  {
    id: 'hotellerie',
    icon: Hotel,
    title: 'Hôtellerie & Tourisme',
    subtitle: 'Service premium',
    description:
      'Offrez une première impression irréprochable à vos clients dès leur arrivée. Un parking bien éclairé, signalé et connecté fait partie intégrante de l\'expérience hôtelière.',
    challenges: [
      'Première impression client',
      'Gestion des voituriers',
      'Éclairage d\'ambiance et sécurité',
      'Services premium attendus',
    ],
    solutions: [
      'Éclairage LED design et sécuritaire',
      'Contrôle d\'accès par clé de chambre',
      'Bornes de recharge haute puissance',
      'Supervision discrète et efficace',
    ],
  },
  {
    id: 'industrie',
    icon: Factory,
    title: 'Sites Industriels',
    subtitle: 'Sécurité et contrôle',
    description:
      'Sécurisez l\'accès à vos sites industriels et gérez les flux de véhicules lourds et légers. Solutions robustes adaptées aux environnements exigeants.',
    challenges: [
      'Zones de sécurité différenciées',
      'Véhicules légers et lourds',
      'Conditions environnementales difficiles',
      'Traçabilité des accès',
    ],
    solutions: [
      'Barrières haute résistance',
      'Reconnaissance de plaques et badges',
      'Équipements IP67 pour extérieur',
      'Journal d\'accès et audit complet',
    ],
  },
  {
    id: 'collectivites',
    icon: Landmark,
    title: 'Collectivités & Public',
    subtitle: 'Service citoyen',
    description:
      'Améliorez le stationnement public pour les citoyens. Nos solutions respectent les contraintes des marchés publics et s\'intègrent dans les politiques de mobilité urbaine.',
    challenges: [
      'Marchés publics et conformité',
      'Accessibilité PMR réglementaire',
      'Intégration politique de mobilité',
      'Budget et durabilité',
    ],
    solutions: [
      'Solutions conformes aux normes publiques',
      'Guidage PMR et signalétique accessible',
      'Connexion avec systèmes de mobilité urbaine',
      'Contrats de maintenance longue durée',
    ],
  },
]

export default function Solutions() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1545179605-1f4bccb8e31b?w=1920&q=80"
          blur={1}
          overlayOpacity={0.55}
        />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 radial-fade" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <SectionLabel label="Nos Solutions" />
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[0.95]">
              Des solutions expertes<br />
              <span className="gradient-text">pour chaque secteur</span>
            </h1>
            <p className="mt-8 text-xl text-white/50 max-w-3xl leading-relaxed">
              Chaque environnement a ses propres exigences. Nous concevons et déployons
              des solutions sur mesure, adaptées aux spécificités de votre activité et
              de vos usagers.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <AnimateOnScroll key={solution.id} delay={0}>
                <div
                  id={solution.id}
                  className="glass-card p-8 md:p-12 scroll-mt-24 transition-all duration-500 hover:bg-white/[0.04]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                          <solution.icon className="w-7 h-7 text-accent" />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-white">
                            {solution.title}
                          </h2>
                          <p className="text-sm text-accent">{solution.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-white/40 leading-relaxed">{solution.description}</p>
                      <div className="mt-8">
                        <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
                          Défis du secteur
                        </h4>
                        <div className="space-y-2">
                          {solution.challenges.map((challenge) => (
                            <div key={challenge} className="flex items-start gap-2 text-sm text-white/50">
                              <span className="w-1 h-1 rounded-full bg-white/30 mt-2 shrink-0" />
                              {challenge}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
                        Nos réponses
                      </h4>
                      <div className="space-y-3">
                        {solution.solutions.map((sol) => (
                          <div
                            key={sol}
                            className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                          >
                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-sm text-white/60">{sol}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors font-medium"
                        >
                          Discuter de ce projet
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=1920&q=80"
          blur={2}
          overlayOpacity={0.65}
        />
        <div className="absolute inset-0 radial-fade" />
        <div className="relative max-w-7xl mx-auto section-padding text-center">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Solution personnalisée
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Votre secteur n&apos;est pas listé ?<br />
              <span className="gradient-text-accent">Contactez-nous.</span>
            </h2>
            <p className="mt-6 text-lg text-white/40 max-w-2xl mx-auto">
              Nous intervenons sur tous types d&apos;infrastructures de parking.
              Parlez-nous de votre projet, nous concevrons la solution adaptée.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary text-base">
                Nous contacter
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
