'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
  Building2,
  MessageSquare,
} from 'lucide-react'
import AnimateOnScroll from '../components/AnimateOnScroll'
import SectionLabel from '../components/SectionLabel'
import BackgroundImage from '../components/BackgroundImage'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresse',
    lines: [
      '4, Avenue de l\'Europe',
      'Immeuble COBALT',
      '78140 Vélizy-Villacoublay',
    ],
    href: 'https://maps.google.com/?q=4+Avenue+de+l\'Europe+78140+Vélizy-Villacoublay',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    lines: ['01 84 80 13 37'],
    href: 'tel:+33184801337',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['contact@support-park.fr'],
    href: 'mailto:contact@support-park.fr',
  },
  {
    icon: Clock,
    title: 'Horaires',
    lines: [
      'Lun - Ven : 8h30 - 18h00',
      'Astreinte 24h/24, 7j/7',
    ],
    href: undefined,
  },
]

const subjects = [
  'Demande de devis',
  'Installation',
  'Maintenance',
  'Supervision',
  'Partenariat',
  'Recrutement',
  'Autre',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    sujet: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
            <SectionLabel label="Contact" />
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[0.95]">
              Parlons de votre<br />
              <span className="gradient-text">projet</span>
            </h1>
            <p className="mt-8 text-xl text-white/50 max-w-3xl leading-relaxed">
              Besoin d&apos;un devis, d&apos;une information technique ou d&apos;un
              conseil personnalisé ? Notre équipe vous répond sous 24 heures.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <AnimateOnScroll key={info.title} delay={index * 80}>
                <div className="glass-card-hover p-6 h-full">
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                        <info.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                      {info.lines.map((line) => (
                        <p key={line} className="text-sm text-white/40">{line}</p>
                      ))}
                    </a>
                  ) : (
                    <>
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                        <info.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                      {info.lines.map((line) => (
                        <p key={line} className="text-sm text-white/40">{line}</p>
                      ))}
                    </>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimateOnScroll>
                <div className="glass-card p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-2">
                    <MessageSquare className="w-5 h-5 text-accent" />
                    <h2 className="text-2xl font-bold text-white">Envoyez-nous un message</h2>
                  </div>
                  <p className="text-white/40 text-sm mb-8">
                    Remplissez le formulaire ci-dessous et nous reviendrons vers vous
                    dans les 24 heures ouvrées.
                  </p>

                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Message envoyé !
                      </h3>
                      <p className="text-white/40 max-w-md mx-auto">
                        Merci pour votre message. Notre équipe vous contactera
                        dans les plus brefs délais.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="nom" className="block text-sm font-medium text-white/60 mb-2">
                            Nom *
                          </label>
                          <input
                            type="text"
                            id="nom"
                            name="nom"
                            required
                            value={formData.nom}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
                            placeholder="Votre nom"
                          />
                        </div>
                        <div>
                          <label htmlFor="prenom" className="block text-sm font-medium text-white/60 mb-2">
                            Prénom *
                          </label>
                          <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            required
                            value={formData.prenom}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
                            placeholder="Votre prénom"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
                            placeholder="votre@email.fr"
                          />
                        </div>
                        <div>
                          <label htmlFor="telephone" className="block text-sm font-medium text-white/60 mb-2">
                            Téléphone
                          </label>
                          <input
                            type="tel"
                            id="telephone"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
                            placeholder="01 23 45 67 89"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="entreprise" className="block text-sm font-medium text-white/60 mb-2">
                          Entreprise
                        </label>
                        <input
                          type="text"
                          id="entreprise"
                          name="entreprise"
                          value={formData.entreprise}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>

                      <div>
                        <label htmlFor="sujet" className="block text-sm font-medium text-white/60 mb-2">
                          Sujet *
                        </label>
                        <select
                          id="sujet"
                          name="sujet"
                          required
                          value={formData.sujet}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors appearance-none"
                        >
                          <option value="" className="bg-dark-900">
                            Sélectionnez un sujet
                          </option>
                          {subjects.map((subject) => (
                            <option key={subject} value={subject} className="bg-dark-900">
                              {subject}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors resize-none"
                          placeholder="Décrivez votre projet ou votre besoin..."
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full justify-center">
                        <Send className="w-5 h-5" />
                        Envoyer le message
                      </button>

                      <p className="text-xs text-white/30 text-center">
                        En soumettant ce formulaire, vous acceptez que vos données soient
                        traitées conformément à notre politique de confidentialité.
                      </p>
                    </form>
                  )}
                </div>
              </AnimateOnScroll>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <AnimateOnScroll delay={100}>
                <div className="glass-card p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Building2 className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Siège Social</h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-6">
                      Situé à Vélizy-Villacoublay, au cœur du pôle technologique
                      d&apos;Île-de-France, notre siège coordonne l&apos;ensemble de nos
                      opérations nationales.
                    </p>
                    <div className="aspect-video rounded-lg bg-dark-700 overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.5!2d2.19!3d48.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDQ2JzQ4LjAiTiAywrAxMScyNC4wIkU!5e0!3m2!1sfr!2sfr!4v1"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Support Park - Siège social"
                      />
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="glass-card p-8">
                  <h3 className="text-lg font-bold text-white mb-4">Devis express</h3>
                  <p className="text-white/40 text-sm mb-6">
                    Pour une réponse encore plus rapide, appelez-nous directement.
                    Notre équipe commerciale est à votre disposition.
                  </p>
                  <a
                    href="tel:+33184801337"
                    className="btn-primary w-full justify-center"
                  >
                    <Phone className="w-5 h-5" />
                    01 84 80 13 37
                  </a>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={300}>
                <div className="glass-card p-8">
                  <h3 className="text-lg font-bold text-white mb-4">Zone d&apos;intervention</h3>
                  <p className="text-white/40 text-sm mb-4">
                    Nous intervenons sur l&apos;ensemble du territoire français métropolitain.
                  </p>
                  <div className="space-y-2">
                    {[
                      'Île-de-France',
                      'Auvergne-Rhône-Alpes',
                      'Provence-Alpes-Côte d\'Azur',
                      'Nouvelle-Aquitaine',
                      'Occitanie',
                      'Toutes régions',
                    ].map((region) => (
                      <div key={region} className="flex items-center gap-2 text-sm text-white/50">
                        <CheckCircle2 className="w-4 h-4 text-accent/60 shrink-0" />
                        {region}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
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
        <div className="relative max-w-7xl mx-auto section-padding text-center">
          <AnimateOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Commencez par un<br />
              <span className="gradient-text-accent">diagnostic gratuit</span>
            </h2>
            <p className="mt-6 text-lg text-white/40 max-w-2xl mx-auto">
              Nous réalisons un audit complet et gratuit de vos installations existantes
              avant de vous proposer la solution la plus adaptée.
            </p>
            <div className="mt-10">
              <a href="tel:+33184801337" className="btn-primary text-base">
                Appeler maintenant
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
