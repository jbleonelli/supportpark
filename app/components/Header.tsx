'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronRight } from 'lucide-react'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Équipe', href: '/equipe' },
  { name: 'Nous contacter', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const isActive = (href: string) => pathname === href

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center font-bold text-white text-lg transition-transform duration-300 group-hover:scale-110">
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

            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm transition-colors duration-300 rounded-lg ${
                    isActive(item.href)
                      ? 'text-white bg-white/[0.08] font-medium'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+33184801337"
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                01 84 80 13 37
              </a>
              <Link href="/contact" className="btn-primary !py-2.5 !px-6 text-sm">
                Devis gratuit
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-dark-950/98 backdrop-blur-2xl lg:hidden">
          <div className="pt-24 px-8">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-4 rounded-xl text-xl transition-colors ${
                    isActive(item.href)
                      ? 'text-white bg-white/[0.08] font-medium'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-10 px-6 flex flex-col gap-4">
              <a href="tel:+33184801337" className="text-white/50 text-lg">
                01 84 80 13 37
              </a>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary justify-center"
              >
                Devis gratuit
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
