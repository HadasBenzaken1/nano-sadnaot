
import { useState } from 'react'
import { Mail, MessageCircle, Send } from 'lucide-react'

const whatsappLink =
  'https://wa.me/972553194305?text=' +
  encodeURIComponent('הגעתי מהאתר, אשמח לקבל פרטים נוספים על הסדנאות שלכם!')

const emailLink =
  'mailto:benzakenhadas@gmail.com?subject=' +
  encodeURIComponent('פנייה מהאתר - NANO')

const accessKey = '54b35431-31f5-426a-b889-6930133b278b'

const inputClass =
  'w-full min-w-0 rounded-xl border border-[#D9C4B5] bg-[#FBF5EF] px-4 py-3 text-base text-[#5A4337] outline-none transition placeholder:text-[#A18C80] focus:border-[#BC8F73] focus:ring-2 focus:ring-[#BC8F73]/20'

function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    formData.append('access_key', accessKey)

    setIsLoading(true)
    setStatus('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error('Submission failed')
      }

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

return (
  <section
    id="contact"
    dir="rtl"
    className="w-full bg-transparent px-4 py-3 sm:px-6 sm:py-4"
  >
    <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#D9C4B5]/80 bg-[#F4EAE2] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* כותרת */}
        <div className="mx-auto mb-9 max-w-2xl text-center">
          <p className="text-sm font-semibold text-[#BC8F73]">
            מתחילים ליצור חוויה
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#5A4337] sm:text-4xl">
            בואו ניצור יחד
          </h2>

          <p className="mt-4 text-base leading-8 text-[#7E6152]">
            מתכננים אירוע? ספרו לנו קצת על מה שחשבתם,
            ונשמח להתאים לכם סדנה יצירתית ומלאת השראה.
          </p>
        </div>

        {/* שתי עמודות */}
        <div className="grid items-start gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-8">

          {/* טופס */}
          <form
            onSubmit={handleSubmit}
            className="min-w-0 space-y-4 rounded-[1.75rem] bg-[#EAD8CC] p-5 sm:p-8"
          >
            <h3 className="mb-5 text-xl font-bold text-[#5A4337]">
              ספרו לנו על האירוע שלכם
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="min-w-0">
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-semibold text-[#5A4337]"
                >
                  שם מלא
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="איך קוראים לכם?"
                  autoComplete="name"
                  required
                  className={inputClass}
                />
              </div>

              <div className="min-w-0">
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-semibold text-[#5A4337]"
                >
                  מספר טלפון
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="05X-XXXXXXX"
                  autoComplete="tel"
                  dir="ltr"
                  required
                  pattern="[0-9+() -]{9,18}"
                  title="יש להזין מספר טלפון תקין"
                  className={inputClass}
                />
              </div>

              <div className="min-w-0">
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-semibold text-[#5A4337]"
                >
                  כתובת מייל
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  dir="ltr"
                  required
                  className={inputClass}
                />
              </div>

              <div className="min-w-0">
                <label
                  htmlFor="eventType"
                  className="mb-1.5 block text-sm font-semibold text-[#5A4337]"
                >
                  סוג האירוע
                </label>
                <input
                  id="eventType"
                  name="eventType"
                  type="text"
                  placeholder="בת מצווה, יום הולדת..."
                  className={inputClass}
                />
              </div>

            </div>

            <div>
              <label
                htmlFor="eventDate"
                className="mb-1.5 block text-sm font-semibold text-[#5A4337]"
              >
                תאריך האירוע (אם ידוע)
              </label>
              <input
                id="eventDate"
                name="eventDate"
                type="date"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-semibold text-[#5A4337]"
              >
                ספרו לנו קצת על האירוע
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="נשמח לשמוע מה אתם מתכננים..."
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#921C24] px-5 py-3.5 font-bold text-white transition hover:bg-[#76171D] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={18} aria-hidden="true" />
              {isLoading ? 'שולחים...' : 'שליחת פנייה'}
            </button>

            {status === 'success' && (
              <p
                role="status"
                className="text-center text-sm font-semibold text-green-700"
              >
                תודה! הפנייה נשלחה בהצלחה.
              </p>
            )}

            {status === 'error' && (
              <p
                role="alert"
                className="text-center text-sm font-medium text-red-700"
              >
                הפנייה לא נשלחה. נסו שוב או צרו איתנו קשר בוואטסאפ.
              </p>
            )}
          </form>

          {/* פרטי קשר */}
          <aside className="rounded-[1.75rem] bg-[#EAD8CC] p-6 sm:p-8">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBF5EF] text-[#921C24]">
              <MessageCircle size={25} strokeWidth={1.7} />
            </div>

            <h3 className="text-xl font-bold text-[#5A4337]">
              נשמח לשמוע מכם!
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#7E6152]">
              יש לכם שאלה או רעיון מיוחד?
              אפשר לפנות אלינו ישירות ונשמח לעזור.
            </p>

            <div className="mt-6 flex flex-col gap-3">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-[#FBF5EF] px-4 py-4 text-[#5A4337] transition hover:bg-[#F4EAE2]"
              >
                <MessageCircle
                  size={21}
                  className="shrink-0 text-[#921C24]"
                />
                <span className="text-sm font-semibold">
                  דברו איתנו בוואטסאפ
                </span>
              </a>

              <a
                href={emailLink}
                className="flex items-center gap-3 rounded-xl bg-[#FBF5EF] px-4 py-4 text-[#5A4337] transition hover:bg-[#F4EAE2]"
              >
                <Mail
                  size={21}
                  className="shrink-0 text-[#921C24]"
                />
                <span className="text-sm font-semibold">
                  שלחו לנו מייל
                </span>
              </a>

            </div>
          </aside>
        </div>
      </div>
    </div>

      {/* כפתור וואטסאפ צף */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="דברו איתנו בוואטסאפ"
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.3)] transition hover:scale-105"
      >
        <MessageCircle size={27} aria-hidden="true" />
      </a>

    </section>
  )
}

export default Contact
