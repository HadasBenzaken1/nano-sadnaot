import { Mail, MessageCircle } from 'lucide-react'

const whatsappLink =
  'https://wa.me/972506800954?text=%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%94%D7%A1%D7%93%D7%A0%D7%90%D7%95%D7%AA%20%D7%A9%D7%9C%D7%9B%D7%9D%21'
const emailLink =
  'mailto:nanosadnaot@gmail.com?subject=%D7%A4%D7%A0%D7%99%D7%99%D7%94%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%20-%20NANO'

function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[rgba(255,250,246,0.8)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 text-center text-sm text-[var(--color-text-muted)] sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href={emailLink} className="inline-flex items-center gap-2 transition hover:text-[var(--color-primary)] hover:underline">
            <Mail size={16} />
            <span>nanosadnaot@gmail.com</span>
          </a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[var(--color-primary)] hover:underline">
            <MessageCircle size={16} />
            <span dir="ltr">050-6800954</span>
          </a>
        </div>

        <p>© {new Date().getFullYear()} Nano. כל הזכויות שמורות.</p>
      </div>
    </footer>
  )
}

export default Footer