
import { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import nanoLogo from '../assets/nano-logo.png'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      dir="rtl"
      className={`
        sticky top-0 z-50 w-full
        border-b transition-all duration-300
        ${
          scrolled
            ? 'border-[#D9C4B5]/70 bg-[#E9DDD3] shadow-[0_6px_25px_rgba(90,67,55,0.07)]'
            : 'border-[#D9C4B5]/40 bg-[#E9DDD3]'
        }
      `}
    >
      <div
        className="
          mx-auto flex h-[76px] w-full max-w-7xl
          items-center justify-between gap-4
          px-5 sm:px-8 lg:px-10
        "
      >
        {/* לוגו */}
        <a
          href="#hero"
          className="flex shrink-0 items-center"
          aria-label="Nano סדנאות - חזרה לראש האתר"
        >
          <img
            src={nanoLogo}
            alt="Nano סדנאות"
            className="
              h-[75px] w-auto max-w-none
              object-contain sm:h-[70px]
            "
          />
        </a>

        {/* ניווט מינימליסטי */}
        <div className="flex items-center">

          {/* כפתור יצירת קשר - בכל המסכים */}
          <a
            href="#contact"
            className="
              group inline-flex min-h-11
              shrink-0 items-center justify-center
              gap-2 rounded-full bg-[#921C24]
              px-4 py-2.5
              text-xs font-bold text-white
              shadow-[0_6px_18px_rgba(146,28,36,0.13)]
              transition duration-300
              hover:-translate-y-0.5
              hover:bg-[#78171E]
              sm:px-6 sm:text-sm
            "
          >
            בואו נדבר

            <ArrowLeft
              size={16}
              aria-hidden="true"
              className="
                hidden transition-transform
                group-hover:-translate-x-1
                sm:block
              "
            />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
