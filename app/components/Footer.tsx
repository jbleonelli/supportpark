import Link from 'next/link'
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Installation', href: '/services#installation' },
    { name: 'Maintenance', href: '/services#maintenance' },
    { name: 'Supervision', href: '/services#supervision' },
  ],
  solutions: [
    { name: 'Centres Commerciaux', href: '/solutions#centres-commerciaux' },
    { name: 'Hôpitaux & Cliniques', href: '/solutions#hopitaux' },
    { name: 'Aéroports & Gares', href: '/solutions#aeroports' },
    { name: 'Bureaux & Sièges', href: '/solutions#bureaux' },
  ],
  entreprise: [
    { name: 'À propos', href: '/a-propos' },
    { name: 'Notre Équipe', href: '/equipe' },
    { name: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto section-padding py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center font-bold text-white text-lg">
                SP
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-tight leading-none">
                  SUPPORT PARK
                </span>
                <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase">
                  Technologies Parking
                </span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-8">
              Spécialiste national de l&apos;installation, la maintenance et la supervision
              des technologies de parking. Présents sur tout le territoire français.
            </p>
            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=4+Avenue+de+l'Europe+78140+Vélizy-Villacoublay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                4, Avenue de l&apos;Europe, Immeuble COBALT, 78140 Vélizy-Villacoublay
              </a>
              <a
                href="tel:+33184801337"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 text-accent" />
                01 84 80 13 37
              </a>
              <a
                href="mailto:contact@support-park.fr"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-accent" />
                contact@support-park.fr
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
              Entreprise
            </h4>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-light transition-colors"
              >
                Demander un devis
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Support Park. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-white/30 hover:text-white/50 transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="text-xs text-white/30 hover:text-white/50 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
