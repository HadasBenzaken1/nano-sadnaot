
import { useState, useEffect } from 'react'
import { Menu, X, ArrowLeft } from 'lucide-react'
import nanoLogo from '../assets/nano-logo.png'

const navLinks = [
  { label: 'הסדנאות שלנו', href: '#products' },
  { label: 'איך זה עובד?', href: '#process' },
  { label: 'סוגי אירועים', href: '#events' },
  { label: 'גלריה', href: '#video' },
  { label: 'למה Nano?', href: '#why-nano' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', handleEscape)

    return () => window.removeEventListener('keydown', handleEscape)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      dir="rtl"
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-[#D9C4B5]/70 bg-[#E9DDD3]/95 shadow-[0_6px_25px_rgba(90,67,55,0.07)] backdrop-blur-xl'
          : 'border-[#D9C4B5]/40 bg-[#E9DDD3]/95 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">

        {/* לוגו */}
        <a
          href="#hero"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
          aria-label="Nano סדנאות - חזרה לראש האתר"
        >
          <img
            src={nanoLogo}
            alt="Nano סדנאות"
            className="h-[75px] w-auto max-w-none object-contain sm:h-[70px]"
          />
        </a>

        {/* ניווט למחשב */}
        <nav
          aria-label="ניווט ראשי"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative whitespace-nowrap py-2 text-[13px] font-semibold text-[#5A4337] transition-colors duration-200 hover:text-[#921C24] after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#921C24] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* כפתור יצירת קשר - מחשב */}
        <a
          href="#contact"
          className="hidden min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#921C24] px-6 py-2.5 text-sm font-bold text-white shadow-[0_6px_18px_rgba(146,28,36,0.13)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#78171E] lg:inline-flex"
        >
          בואו נדבר
          <ArrowLeft size={16} aria-hidden="true" />
        </a>

        {/* כפתור תפריט - טלפון וטאבלט */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? 'סגירת תפריט' : 'פתיחת תפריט'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9C4B5] bg-[#F4EAE2] text-[#5A4337] transition hover:bg-[#EAD8CC] lg:hidden"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

      </div>

      {/* תפריט נפתח בטלפון */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="ניווט לטלפון"
          className="border-t border-[#D9C4B5]/60 bg-[#E9DDD3] px-5 pb-6 pt-3 shadow-[0_15px_25px_rgba(90,67,55,0.08)] sm:px-8 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-[#D9C4B5]/50 px-2 py-3.5 text-sm font-semibold text-[#5A4337] transition hover:text-[#921C24]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#921C24] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#78171E]"
            >
              בואו נדבר
              <ArrowLeft size={17} aria-hidden="true" />
            </a>

          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
