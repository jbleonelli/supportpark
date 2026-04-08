import Link from 'next/link'
import {
  ArrowRight,
  Wrench,
  Shield,
  Monitor,
  ChevronRight,
  Zap,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  Building2,
  Plane,
  ShoppingBag,
  Stethoscope,
} from 'lucide-react'
import AnimateOnScroll from './components/AnimateOnScroll'
import SectionLabel from './components/SectionLabel'
import BackgroundImage from './components/BackgroundImage'

const services = [
  {
    icon: Wrench,
    title: 'Installation',
    description:
      'Déploiement professionnel de guidage dynamique, bornes de recharge, barrières et éclairage intelligent. Nos équipes techniques interviennent sur tout type d\'infrastructure.',
    href: '/services#installation',
    features: ['Guidage à la place', 'Bornes de recharge', 'Barrières automatiques', 'Éclairage LED'],
  },
  {
    icon: Shield,
    title: 'Maintenance',
    description:
      'Maintenance préventive et corrective de l\'ensemble de vos équipements technologiques. Nous assurons la continuité de service et la durabilité de vos installations.',
    href: '/services#maintenance',
    features: ['Maintenance préventive', 'Intervention 24/7', 'Pièces de rechange', 'Multi-technologies'],
  },
  {
    icon: Monitor,
    title: 'Supervision',
    description:
      'Tableau de bord centralisé pour la surveillance en temps réel de toutes vos infrastructures. Accédez à vos données depuis n\'importe quel appareil, partout.',
    href: '/services#supervision',
    features: ['Temps réel', 'Alertes automatiques', 'Accès mobile', 'Rapports détaillés'],
  },
]

const stats = [
  { value: '500+', label: 'Parkings équipés', icon: Building2 },
  { value: '24/7', label: 'Disponibilité', icon: Clock },
  { value: '100%', label: 'Territoire français', icon: MapPin },
  { value: '15+', label: 'Années d\'expertise', icon: Users },
]

const industries = [
  { name: 'Centres Commerciaux', icon: ShoppingBag },
  { name: 'Hôpitaux & Cliniques', icon: Stethoscope },
  { name: 'Aéroports & Gares', icon: Plane },
  { name: 'Bureaux & Sièges Sociaux', icon: Building2 },
]

const advantages = [
  'Spécialiste multi-technologies du parking',
  'Intervention sur tout le territoire national',
  'Équipes techniques certifiées et formées',
  'Support réactif et maintenance proactive',
  'Solutions personnalisées selon vos besoins',
  'Partenaire de confiance depuis plus de 15 ans',
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=1920&q=80"
          blur={1}
          overlayOpacity={0.55}
        />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 radial-fade" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.03] blur-3xl" />

        <div className="relative max-w-7xl mx-auto section-padding pt-32 pb-20">
          <div className="max-w-4xl">
            <AnimateOnScroll>
              <SectionLabel label="Technologies de Parking" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95]">
                <span className="text-white">L&apos;excellence</span>
                <br />
                <span className="text-white">technologique</span>
                <br />
                <span className="gradient-text">au service de vos</span>
                <br />
                <span className="gradient-text">parkings.</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed">
                Installation, maintenance et supervision de vos équipements de parking.
                Guidage dynamique, bornes de recharge, barrières — nous assurons la
                performance de vos infrastructures sur tout le territoire français.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary text-base">
                  Demander un devis
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/services" className="btn-outline text-base">
                  Découvrir nos services
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <div className="mt-16 flex flex-wrap gap-8 md:gap-12">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-white/40">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
      </section>

      {/* Services */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <SectionLabel label="Nos Services" />
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Trois piliers pour la<br />
              <span className="gradient-text-accent">performance de vos parkings</span>
            </h2>
            <p className="mt-6 text-lg text-white/40 max-w-2xl">
              De l&apos;installation à la supervision, nous couvrons l&apos;ensemble du cycle
              de vie de vos équipements technologiques de stationnement.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimateOnScroll key={service.title} delay={index * 100}>
                <Link
                  href={service.href}
                  className="group glass-card-hover p-8 lg:p-10 flex flex-col h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 transition-colors duration-500 group-hover:bg-accent/20">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/40 leading-relaxed mb-8 flex-1">{service.description}</p>
                  <div className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-white/50">
                        <CheckCircle2 className="w-4 h-4 text-accent/60" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-accent text-sm font-medium transition-all duration-300 group-hover:gap-3">
                    En savoir plus
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us - Full width feature */}
      <section className="relative py-32 overflow-hidden">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1920&q=80"
          blur={3}
          overlayOpacity={0.7}
          position="center top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/95 to-dark-950" />
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="relative max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimateOnScroll>
              <SectionLabel label="Pourquoi Support Park" />
              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
                Le partenaire de confiance<br />
                <span className="gradient-text-accent">de vos infrastructures</span>
              </h2>
              <p className="mt-6 text-lg text-white/40 leading-relaxed">
                Chez Support Park, nous sommes pionniers dans l&apos;innovation technologique
                appliquée au stationnement. Notre mission est claire : assurer le fonctionnement
                optimal de vos installations, qu&apos;elles aient été réalisées par notre
                équipe ou non.
              </p>
              <p className="mt-4 text-lg text-white/40 leading-relaxed">
                Avec une présence nationale et des équipes techniques hautement qualifiées,
                nous intervenons rapidement pour garantir la continuité de vos services.
              </p>
              <div className="mt-10">
                <Link href="/a-propos" className="btn-primary">
                  En savoir plus sur nous
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="grid grid-cols-1 gap-3">
                {advantages.map((advantage, index) => (
                  <div
                    key={advantage}
                    className="glass-card p-5 flex items-center gap-4 transition-all duration-300 hover:bg-white/[0.06]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <span className="text-accent text-sm font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-white/70 text-sm">{advantage}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <div className="text-center">
              <SectionLabel label="Nos Secteurs" className="justify-center" />
              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
                Des solutions adaptées<br />
                <span className="gradient-text-accent">à chaque secteur</span>
              </h2>
              <p className="mt-6 text-lg text-white/40 max-w-2xl mx-auto">
                Chaque infrastructure a ses propres exigences. Nous adaptons nos services
                et technologies aux spécificités de votre secteur d&apos;activité.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <AnimateOnScroll key={industry.name} delay={index * 100}>
                <Link
                  href="/solutions"
                  className="group glass-card-hover p-8 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-accent/20 group-hover:scale-110">
                    <industry.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <span className="text-sm text-accent flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Découvrir <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={400}>
            <div className="mt-12 text-center">
              <Link href="/solutions" className="btn-outline">
                Voir toutes nos solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <SectionLabel label="Notre Approche" />
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
              Un processus <span className="gradient-text-accent">éprouvé</span>
            </h2>
          </AnimateOnScroll>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Audit',
                description:
                  'Analyse complète de votre infrastructure existante et identification de vos besoins spécifiques.',
              },
              {
                step: '02',
                title: 'Conception',
                description:
                  'Élaboration d\'une solution sur mesure adaptée à vos contraintes techniques et budgétaires.',
              },
              {
                step: '03',
                title: 'Déploiement',
                description:
                  'Installation professionnelle par nos équipes techniques certifiées, dans le respect des délais.',
              },
              {
                step: '04',
                title: 'Suivi',
                description:
                  'Maintenance continue, supervision en temps réel et support réactif pour garantir la performance.',
              },
            ].map((item, index) => (
              <AnimateOnScroll key={item.step} delay={index * 100}>
                <div className="relative">
                  <div className="text-6xl font-bold text-accent/10 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 right-0 translate-x-1/2">
                      <ArrowRight className="w-5 h-5 text-accent/20" />
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1920&q=80"
          blur={2}
          overlayOpacity={0.65}
        />
        <div className="absolute inset-0 radial-fade" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
                  <Zap className="w-4 h-4" />
                  Devis gratuit en 24h
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                  Prêt à optimiser vos<br />
                  <span className="gradient-text-accent">infrastructures de parking ?</span>
                </h2>
                <p className="mt-6 text-lg text-white/40 max-w-2xl mx-auto">
                  Contactez-nous dès aujourd&apos;hui pour un diagnostic gratuit de vos installations.
                  Notre équipe vous proposera une solution adaptée à vos besoins.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="btn-primary text-base">
                    Nous contacter
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a href="tel:+33184801337" className="btn-outline text-base">
                    01 84 80 13 37
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
