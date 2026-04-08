'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Zap,
  Calculator,
  PiggyBank,
  Leaf,
  Clock,
  BarChart3,
  CheckCircle2,
  ArrowDown,
  Lightbulb,
  Car,
  BatteryCharging,
  Eye,
  Shield,
  ChevronRight,
} from 'lucide-react'
import AnimateOnScroll from '../components/AnimateOnScroll'
import SectionLabel from '../components/SectionLabel'
import BackgroundImage from '../components/BackgroundImage'

const savingsData = [
  {
    icon: Car,
    title: 'Guidage Dynamique à la Place',
    subtitle: 'Réduction du trafic interne et optimisation du taux d\'occupation',
    savings: [
      { label: 'Réduction du temps de recherche', value: '-30%', type: 'down' as const },
      { label: 'Augmentation du taux de rotation', value: '+20%', type: 'up' as const },
      { label: 'Réduction des émissions CO₂ en parking', value: '-40%', type: 'down' as const },
      { label: 'Augmentation du chiffre d\'affaires (centres commerciaux)', value: '+12%', type: 'up' as const },
    ],
    description:
      'Un usager passe en moyenne 8 minutes à chercher une place dans un parking non équipé. Le guidage dynamique réduit ce temps à moins de 2 minutes, améliorant l\'expérience utilisateur et augmentant le taux de rotation des places.',
    roi: '12 à 18 mois',
  },
  {
    icon: Lightbulb,
    title: 'Éclairage Intelligent LED',
    subtitle: 'Détection de présence et gradation automatique',
    savings: [
      { label: 'Réduction de la consommation énergétique', value: '-70%', type: 'down' as const },
      { label: 'Réduction des coûts de maintenance éclairage', value: '-50%', type: 'down' as const },
      { label: 'Durée de vie des luminaires', value: 'x5', type: 'up' as const },
      { label: 'Amélioration du sentiment de sécurité', value: '+85%', type: 'up' as const },
    ],
    description:
      'L\'éclairage représente jusqu\'à 40% de la facture énergétique d\'un parking. Le passage à un éclairage LED intelligent avec détection de présence permet de réduire drastiquement cette dépense tout en améliorant la qualité lumineuse.',
    roi: '18 à 24 mois',
  },
  {
    icon: BatteryCharging,
    title: 'Bornes de Recharge Électrique',
    subtitle: 'Nouvelle source de revenus et attractivité',
    savings: [
      { label: 'Revenu additionnel par borne/mois', value: '200-500€', type: 'up' as const },
      { label: 'Augmentation de la durée de stationnement', value: '+45min', type: 'up' as const },
      { label: 'Attractivité pour véhicules électriques', value: '+60%', type: 'up' as const },
      { label: 'Valorisation du patrimoine immobilier', value: '+8%', type: 'up' as const },
    ],
    description:
      'Avec 1 million de véhicules électriques en France et une croissance de 25% par an, les bornes de recharge ne sont plus une option mais une nécessité. Elles génèrent des revenus directs et augmentent l\'attractivité de votre parking.',
    roi: '24 à 36 mois',
  },
  {
    icon: Eye,
    title: 'Supervision Centralisée',
    subtitle: 'Pilotage en temps réel et maintenance prédictive',
    savings: [
      { label: 'Réduction des temps d\'arrêt', value: '-60%', type: 'down' as const },
      { label: 'Réduction des interventions d\'urgence', value: '-45%', type: 'down' as const },
      { label: 'Économie sur les coûts de personnel de surveillance', value: '-35%', type: 'down' as const },
      { label: 'Amélioration du taux de disponibilité', value: '99.5%', type: 'up' as const },
    ],
    description:
      'La supervision centralisée permet de passer d\'une maintenance curative coûteuse à une maintenance prédictive. Les anomalies sont détectées avant qu\'elles ne deviennent des pannes, réduisant considérablement les coûts d\'intervention.',
    roi: '6 à 12 mois',
  },
  {
    icon: Shield,
    title: 'Maintenance Préventive',
    subtitle: 'Prolonger la durée de vie et éviter les pannes coûteuses',
    savings: [
      { label: 'Réduction des coûts de réparation', value: '-40%', type: 'down' as const },
      { label: 'Prolongation de la durée de vie des équipements', value: '+60%', type: 'up' as const },
      { label: 'Réduction des plaintes usagers', value: '-70%', type: 'down' as const },
      { label: 'Disponibilité des équipements', value: '98%+', type: 'up' as const },
    ],
    description:
      'Un équipement mal entretenu coûte en moyenne 3 fois plus cher qu\'un équipement sous contrat de maintenance préventive. L\'anticipation des pannes évite les fermetures non planifiées et les pertes de revenus associées.',
    roi: '3 à 6 mois',
  },
]

const caseStudies = [
  {
    type: 'Centre Commercial',
    places: 2500,
    investissement: '180 000 €',
    economiesAnnuelles: '95 000 €',
    roiMois: 23,
    solutions: ['Guidage dynamique', 'Éclairage LED', 'Supervision'],
    detail: 'Réduction de 70% de la facture énergétique, augmentation de 15% de la fréquentation grâce à un parking fluide et bien éclairé.',
  },
  {
    type: 'Hôpital',
    places: 800,
    investissement: '75 000 €',
    economiesAnnuelles: '52 000 €',
    roiMois: 17,
    solutions: ['Guidage dynamique', 'Maintenance préventive', 'Supervision'],
    detail: 'Temps de recherche réduit de 7 min à 1,5 min. Réduction de 60% des plaintes liées au stationnement.',
  },
  {
    type: 'Siège Social',
    places: 400,
    investissement: '120 000 €',
    economiesAnnuelles: '68 000 €',
    roiMois: 21,
    solutions: ['Bornes de recharge', 'Éclairage LED', 'Contrôle d\'accès'],
    detail: '20 bornes de recharge générant 4 000€/mois de revenus. Image RSE renforcée et attractivité employeur améliorée.',
  },
]

function SimulatorSection() {
  const [places, setPlaces] = useState(500)
  const [facture, setFacture] = useState(3000)
  const [interventions, setInterventions] = useState(12)

  const economieEclairage = Math.round(facture * 12 * 0.6)
  const economieMaintenance = Math.round(interventions * 350 * 0.45)
  const revenusGuidage = Math.round(places * 0.15 * 365 * 0.8)
  const totalEconomies = economieEclairage + economieMaintenance + revenusGuidage

  return (
    <div className="glass-card p-8 md:p-12">
      <div className="flex items-center gap-3 mb-2">
        <Calculator className="w-6 h-6 text-accent" />
        <h3 className="text-2xl font-bold text-white">Simulateur de ROI</h3>
      </div>
      <p className="text-white/40 text-sm mb-10">
        Estimez les économies potentielles pour votre parking en ajustant les paramètres ci-dessous.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <label className="flex justify-between text-sm mb-3">
              <span className="text-white/60">Nombre de places</span>
              <span className="text-white font-bold">{places}</span>
            </label>
            <input
              type="range"
              min={50}
              max={5000}
              step={50}
              value={places}
              onChange={(e) => setPlaces(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-dark-600 accent-accent"
            />
            <div className="flex justify-between text-xs text-white/30 mt-1">
              <span>50</span>
              <span>5 000</span>
            </div>
          </div>

          <div>
            <label className="flex justify-between text-sm mb-3">
              <span className="text-white/60">Facture énergétique mensuelle</span>
              <span className="text-white font-bold">{facture.toLocaleString('fr-FR')} €</span>
            </label>
            <input
              type="range"
              min={500}
              max={20000}
              step={250}
              value={facture}
              onChange={(e) => setFacture(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-dark-600 accent-accent"
            />
            <div className="flex justify-between text-xs text-white/30 mt-1">
              <span>500 €</span>
              <span>20 000 €</span>
            </div>
          </div>

          <div>
            <label className="flex justify-between text-sm mb-3">
              <span className="text-white/60">Interventions de maintenance / an</span>
              <span className="text-white font-bold">{interventions}</span>
            </label>
            <input
              type="range"
              min={0}
              max={50}
              step={1}
              value={interventions}
              onChange={(e) => setInterventions(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-dark-600 accent-accent"
            />
            <div className="flex justify-between text-xs text-white/30 mt-1">
              <span>0</span>
              <span>50</span>
            </div>
          </div>
        </div>

        <div>
          <div className="glass-card p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
            <div className="relative">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Économies annuelles estimées</p>
              <p className="text-5xl font-bold text-white mb-6">
                {totalEconomies.toLocaleString('fr-FR')} <span className="text-2xl text-accent">€</span>
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <Lightbulb className="w-4 h-4 text-accent/60" />
                    Économies éclairage
                  </div>
                  <span className="text-white font-medium">{economieEclairage.toLocaleString('fr-FR')} €</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <Shield className="w-4 h-4 text-accent/60" />
                    Économies maintenance
                  </div>
                  <span className="text-white font-medium">{economieMaintenance.toLocaleString('fr-FR')} €</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <Car className="w-4 h-4 text-accent/60" />
                    Revenus guidage additionnel
                  </div>
                  <span className="text-white font-medium">{revenusGuidage.toLocaleString('fr-FR')} €</span>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Obtenir une étude personnalisée
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ROI() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=1920&q=80"
          blur={1}
          overlayOpacity={0.55}
        />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 radial-fade" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <SectionLabel label="Retour sur Investissement" />
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[0.95]">
              Investir dans la<br />
              <span className="gradient-text">technologie, c&apos;est rentable.</span>
            </h1>
            <p className="mt-8 text-xl text-white/50 max-w-3xl leading-relaxed">
              Les solutions intelligentes de parking ne sont pas une dépense : c&apos;est
              un investissement mesurable qui réduit vos coûts d&apos;exploitation, génère
              de nouveaux revenus et améliore l&apos;expérience de vos usagers.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Key ROI headline stats */}
      <section className="relative pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '-70%', label: 'Facture énergétique', icon: Zap, color: 'text-green-400' },
              { value: '+20%', label: 'Taux de rotation', icon: TrendingUp, color: 'text-accent' },
              { value: '-40%', label: 'Coûts de maintenance', icon: PiggyBank, color: 'text-green-400' },
              { value: '<24 mois', label: 'Retour sur investissement', icon: Clock, color: 'text-accent' },
            ].map((stat, index) => (
              <AnimateOnScroll key={stat.label} delay={index * 80}>
                <div className="glass-card p-8 text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className={`text-4xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-white/40">{stat.label}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Savings by solution */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <BackgroundImage
          src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1920&q=80"
          blur={3}
          overlayOpacity={0.75}
        />
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <SectionLabel label="Analyse par Solution" />
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
              Chaque technologie<br />
              <span className="gradient-text-accent">génère de la valeur</span>
            </h2>
            <p className="mt-6 text-lg text-white/40 max-w-2xl">
              Découvrez l&apos;impact financier concret de chaque solution technologique
              sur l&apos;exploitation de votre parking.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 space-y-8">
            {savingsData.map((item, index) => (
              <AnimateOnScroll key={item.title} delay={0}>
                <div className="glass-card p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.04]">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          <p className="text-sm text-accent">{item.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-white/40 leading-relaxed mb-6">{item.description}</p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-sm">
                        <Clock className="w-4 h-4 text-accent" />
                        <span className="text-white/60">ROI estimé :</span>
                        <span className="text-white font-bold">{item.roi}</span>
                      </div>
                    </div>
                    <div className="lg:col-span-2 space-y-3">
                      {item.savings.map((saving) => (
                        <div
                          key={saving.label}
                          className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                        >
                          <span className="text-sm text-white/50 flex-1">{saving.label}</span>
                          <span className={`text-lg font-bold ml-4 ${
                            saving.type === 'down' ? 'text-green-400' : 'text-accent'
                          }`}>
                            {saving.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive simulator */}
      <section className="relative py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <SectionLabel label="Simulateur" />
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight mb-12">
              Estimez vos <span className="gradient-text-accent">économies</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <SimulatorSection />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Case studies */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <SectionLabel label="Études de Cas" />
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
              Des résultats <span className="gradient-text-accent">concrets</span>
            </h2>
            <p className="mt-6 text-lg text-white/40 max-w-2xl">
              Exemples réels d&apos;économies et de retour sur investissement réalisés
              par nos clients après la modernisation de leurs parkings.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <AnimateOnScroll key={study.type} delay={index * 100}>
                <div className="glass-card-hover p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-white">{study.type}</h3>
                    <span className="text-xs text-white/40 px-3 py-1 rounded-full bg-white/[0.04]">
                      {study.places} places
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-lg bg-white/[0.02]">
                      <p className="text-xs text-white/40 mb-1">Investissement</p>
                      <p className="text-lg font-bold text-white">{study.investissement}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-accent/[0.06]">
                      <p className="text-xs text-white/40 mb-1">Économies / an</p>
                      <p className="text-lg font-bold text-green-400">{study.economiesAnnuelles}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-6 px-4 py-3 rounded-lg bg-accent/10">
                    <BarChart3 className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm text-white/70">
                      ROI atteint en <span className="text-white font-bold">{study.roiMois} mois</span>
                    </span>
                  </div>

                  <p className="text-sm text-white/40 leading-relaxed mb-6 flex-1">{study.detail}</p>

                  <div className="space-y-2">
                    <p className="text-xs text-white/30 uppercase tracking-wider">Solutions déployées</p>
                    {study.solutions.map((sol) => (
                      <div key={sol} className="flex items-center gap-2 text-sm text-white/50">
                        <CheckCircle2 className="w-4 h-4 text-accent/60 shrink-0" />
                        {sol}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Total cost of inaction */}
      <section className="relative py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto section-padding">
          <AnimateOnScroll>
            <div className="glass-card p-10 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent" />
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <SectionLabel label="Le coût de l'inaction" />
                  <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Ne rien faire coûte<br />
                    <span className="text-red-400">plus cher que d&apos;investir.</span>
                  </h2>
                  <p className="mt-6 text-white/40 leading-relaxed">
                    Un parking non modernisé accumule des surcoûts invisibles : surconsommation
                    énergétique, pannes répétées, insatisfaction des usagers, perte de
                    compétitivité et dépréciation du patrimoine.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Surcoût énergétique annuel moyen', value: '25 000 — 80 000 €', icon: Zap },
                    { label: 'Coût des pannes non anticipées', value: '15 000 — 40 000 €', icon: Shield },
                    { label: 'Manque à gagner (rotation, recharge)', value: '30 000 — 100 000 €', icon: TrendingDown },
                    { label: 'Dépréciation immobilière', value: '5 — 10% de la valeur', icon: Leaf },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-red-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white/50">{item.label}</p>
                        <p className="text-lg font-bold text-red-400">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
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
        <div className="relative max-w-7xl mx-auto section-padding text-center">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
              <PiggyBank className="w-4 h-4" />
              Étude gratuite et sans engagement
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Découvrez combien vous pouvez<br />
              <span className="gradient-text-accent">économiser chaque année</span>
            </h2>
            <p className="mt-6 text-lg text-white/40 max-w-2xl mx-auto">
              Nos experts réalisent une étude ROI détaillée et gratuite pour votre
              parking. Chiffres concrets, solutions adaptées, retour mesurable.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Demander une étude ROI gratuite
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+33184801337" className="btn-outline text-base">
                01 84 80 13 37
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
