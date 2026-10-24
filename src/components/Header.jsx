import logo from '../assets/logo.svg'

const navItems = [
  { label: 'אודות', href: '#hero' },
  { label: 'הסדנאות שלנו', href: '#about' },
  { label: 'יצירת קשר', href: '#contact' },
]

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(248,244,240,0.92)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center transition hover:opacity-90" aria-label="חזרה לראש הדף">
          <img src={logo} alt="הלוגו של NANO" className="h-12 w-auto object-contain sm:h-16" />
        </a>

        <nav className="hidden items-center gap-5 text-sm font-medium text-[var(--color-brown-deep)] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--color-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  )
}

export default Header