import Link from 'next/link'
import {
  Wrench,
  Shield,
  Monitor,
  ArrowRight,
  CheckCircle2,
  Zap,
  Clock,
  Settings,
  Wifi,
  BatteryCharging,
  Lightbulb,
  Gauge,
  AlertTriangle,
  BarChart3,
  Smartphone,
  Bell,
  FileText,
  Eye,
  Cog,
  HeartPulse,
  Plug,
  Car,
} from 'lucide-react'
import type { Metadata } from 'next'
import AnimateOnScroll from '../components/AnimateOnScroll'
import SectionLabel from '../components/SectionLabel'
import BackgroundImage from '../components/BackgroundImage'

export const metadata: Metadata = {
  title: 'Services | Support Park',
  description:
    'Installation, maintenance et supervision de vos technologies de parking. Guidage dynamique, bornes de recharge, barrières, éclairage intelligent.',
}

const installationServices = [
  {
    icon: Car,
    title: 'Guidage Dynamique à la Place',
    description:
      'Systèmes de capteurs et panneaux LED pour guider les usagers vers les places disponibles. Réduction du temps de recherche, fluidification du trafic et amélioration de l\'expérience utilisateur.',
  },
  {
    icon: BatteryCharging,
    title: 'Bornes de Recharge Électrique',
    description:
      'Installation de bornes de recharge pour véhicules électriques et hybrides. Solutions compatibles avec tous les standards (Type 2, CCS, CHAdeMO) et gestion intelligente de la charge.',
  },
  {
    icon: Settings,
    title: 'Barrières & Contrôle d\'Accès',
    description:
      'Mise en place de systèmes de barrières automatiques, lecteurs de badges, reconnaissance de plaques et caisses automatiques pour sécuriser et fluidifier l\'accès à vos parkings.',
  },
  {
    icon: Lightbulb,
    title: 'Éclairage Intelligent',
    description:
      'Solutions d\'éclairage LED adaptatif avec détection de présence. Réduction de la consommation énergétique jusqu\'à 70% tout en améliorant la sécurité et le confort des usagers.',
  },
  {
    icon: Wifi,
    title: 'Infrastructure Réseau',
    description:
      'Déploiement de l\'infrastructure réseau nécessaire au fonctionnement de vos équipements connectés : câblage, switches, points d\'accès Wi-Fi et connectivité IoT.',
  },
  {
    icon: Gauge,
    title: 'Signalétique & Affichage',
    description:
      'Panneaux d\'affichage dynamique LED, totems directionnels et signalétique numérique pour informer en temps réel les usagers sur la disponibilité des places.',
  },
]

const maintenanceTypes = [
  {
    icon: HeartPulse,
    title: 'Maintenance Préventive',
    description:
      'Inspections régulières planifiées pour anticiper les dysfonctionnements. Nettoyage, calibrage, mise à jour logicielle et remplacement préventif des composants usés.',
    features: [
      'Planification sur mesure',
      'Rapports d\'intervention détaillés',
      'Suivi de l\'état des équipements',
      'Optimisation de la durée de vie',
    ],
  },
  {
    icon: Wrench,
    title: 'Maintenance Corrective',
    description:
      'Intervention rapide en cas de panne ou de dysfonctionnement. Notre équipe technique est disponible 24h/24 et 7j/7 pour rétablir le service dans les meilleurs délais.',
    features: [
      'Intervention en moins de 4h',
      'Stock de pièces détachées',
      'Techniciens certifiés',
      'Diagnostic à distance',
    ],
  },
  {
    icon: Cog,
    title: 'Maintenance Évolutive',
    description:
      'Mise à niveau de vos installations existantes avec les dernières technologies. Migration, rétrofit et modernisation de vos équipements pour répondre aux nouveaux usages.',
    features: [
      'Audit technologique',
      'Plan de modernisation',
      'Migration progressive',
      'Formation des équipes',
    ],
  },
]

const supervisionFeatures = [
  {
    icon: Eye,
    title: 'Monitoring Temps Réel',
    description:
      'Visualisez l\'état de l\'ensemble de vos équipements en temps réel depuis un tableau de bord centralisé et intuitif.',
  },
  {
    icon: Bell,
    title: 'Alertes Intelligentes',
    description:
      'Recevez des notifications automatiques en cas d\'anomalie, de panne ou de seuil d\'alerte atteint sur vos équipements.',
  },
  {
    icon: Smartphone,
    title: 'Accès Mobile',
    description:
      'Consultez vos données et gérez vos installations depuis votre smartphone ou tablette, où que vous soyez.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Rapports',
    description:
      'Analyses détaillées de l\'occupation, du trafic, de la consommation énergétique et des performances de vos installations.',
  },
  {
    icon: AlertTriangle,
    title: 'Détection Prédictive',
    description:
      'Algorithmes de détection prédictive pour anticiper les pannes et planifier les interventions de maintenance.',
  },
  {
    icon: FileText,
    title: 'Rapports Automatisés',
    description:
      'Génération automatique de rapports d\'activité, de performance et de conformité à la fréquence de votre choix.',
  },
]

export default function Services() {
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
            <SectionLabel label="Nos Services" />
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[0.95]">
              Des services complets<br />
              <span className="gradient-text">pour vos parkings</span>
            </h1>
            <p className="mt-8 text-xl text-white/50 max-w-3xl leading-relaxed">
              De l&apos;installation initiale à la supervision quotidienne, nous proposons
              un accompagnement global pour l&apos;ensemble de vos équipements technologiques
              de stationnement.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Installation */}
      <section id="installation" className="relative py-32 overflow-hidden scroll-mt-24">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1920&q=80"
          blur={3}
          overlayOpacity={0.7}
          position="center bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/95 to-dark-950" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <Wrench className="w-7 h-7 text-accent" />
              </div>
              <div>
                <SectionLabel label="Service 01" />
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-2">
                  Installation
                </h2>
              </div>
            </div>
            <p className="text-lg text-white/40 max-w-3xl leading-relaxed mt-4">
              Optez pour une installation professionnelle et durable de vos équipements de parking.
              Nos équipes techniques et technologiques déploient des solutions clé en main, de la
              conception à la mise en service, sur tout le territoire français.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {installationServices.map((service, index) => (
              <AnimateOnScroll key={service.title} delay={index * 80}>
                <div className="glass-card-hover p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section id="maintenance" className="relative py-32 overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <Shield className="w-7 h-7 text-accent" />
              </div>
              <div>
                <SectionLabel label="Service 02" />
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-2">
                  Maintenance
                </h2>
              </div>
            </div>
            <p className="text-lg text-white/40 max-w-3xl leading-relaxed mt-4">
              Spécialisés dans la maintenance des équipements technologiques de parking, nous
              nous engageons à maintenir la continuité de vos services et la durabilité de vos
              installations, même sur vos infrastructures les plus anciennes.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {maintenanceTypes.map((type, index) => (
              <AnimateOnScroll key={type.title} delay={index * 100}>
                <div className="glass-card-hover p-8 lg:p-10 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <type.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-white/40 leading-relaxed mb-8 flex-1">{type.description}</p>
                  <div className="space-y-3">
                    {type.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-white/50">
                        <CheckCircle2 className="w-4 h-4 text-accent/60 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={300}>
            <div className="mt-16 glass-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Disponibilité 24h/24, 7j/7
                </h3>
                <p className="text-white/40">
                  Notre équipe d&apos;astreinte est mobilisable à tout moment pour intervenir en urgence
                  sur vos installations. Temps d&apos;intervention garanti en moins de 4 heures sur l&apos;Île-de-France.
                </p>
              </div>
              <Link href="/contact" className="btn-primary shrink-0">
                Souscrire un contrat
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Supervision */}
      <section id="supervision" className="relative py-32 overflow-hidden scroll-mt-24">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1920&q=80"
          blur={3}
          overlayOpacity={0.7}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/95 to-dark-950" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <Monitor className="w-7 h-7 text-accent" />
              </div>
              <div>
                <SectionLabel label="Service 03" />
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-2">
                  Supervision
                </h2>
              </div>
            </div>
            <p className="text-lg text-white/40 max-w-3xl leading-relaxed mt-4">
              Simplifiez la surveillance en temps réel de toutes vos infrastructures grâce à un
              tableau de bord centralisé et automatisé. Bénéficiez d&apos;une supervision
              volontairement simplifiée et d&apos;un accès depuis vos appareils mobiles.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supervisionFeatures.map((feature, index) => (
              <AnimateOnScroll key={feature.title} delay={index * 80}>
                <div className="glass-card-hover p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={400}>
            <div className="mt-16 glass-card p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                  <Plug className="w-4 h-4" />
                  Interface unifiée
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Un tableau de bord,<br />toutes vos données.
                </h3>
                <p className="text-white/40 max-w-xl mx-auto mb-8">
                  Que vous gériez un parking ou un réseau national, notre plateforme centralise
                  toutes les informations dont vous avez besoin dans une interface intuitive.
                </p>
                <Link href="/contact" className="btn-primary">
                  Demander une démo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto section-padding text-center">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Réponse en 24h
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Besoin d&apos;un service<br />
              <span className="gradient-text-accent">sur mesure ?</span>
            </h2>
            <p className="mt-6 text-lg text-white/40 max-w-2xl mx-auto">
              Décrivez-nous votre projet et recevez un devis personnalisé
              sous 24 heures ouvrées.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+33184801337" className="btn-outline text-base">
                Appeler maintenant
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
