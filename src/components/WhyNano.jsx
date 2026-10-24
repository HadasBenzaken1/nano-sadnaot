
import {
  WandSparkles,
  Sparkles,
  Gift,
  HeartHandshake,
} from 'lucide-react'

const benefits = [
  {
    title: 'עולם של השראה',
    text: 'מבחר עשיר של אלמנטים ועיצובים.',
    icon: WandSparkles,
  },
  {
    title: 'יצירה אישית',
    text: 'כל עיצוב הוא יחיד ומיוחד.',
    icon: Sparkles,
  },
  {
    title: 'מזכרת שימושית',
    text: 'יוצרים, מדפיסים ולוקחים הביתה.',
    icon: Gift,
  },
  {
    title: 'בדיוק בשבילכם',
    text: 'התאמה לאירוע, לקהל ולתקציב.',
    icon: HeartHandshake,
  },
]

function WhyNano() {
  return (
    <section
      id="why-nano"
      dir="rtl"
      className="relative bg-transparent py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* כותרת */}
        <div className="text-center">
          <p className="text-sm font-semibold text-[#921C24]">
            הייחוד שלנו
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#5A4337] sm:text-4xl">
            למה דווקא Nano?
          </h2>
        </div>

        {/* יתרונות */}
        <div className="mt-9 grid grid-cols-2 gap-4 sm:mt-11 sm:gap-6">

          {benefits.map(({ title, text, icon: Icon }) => (
            <article
              key={title}
             className="flex min-w-0 flex-col items-center rounded-[1.75rem] bg-[#DCC3B3] px-4 py-7 text-center shadow-[0_8px_25px_rgba(90,67,55,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(90,67,55,0.10)] sm:px-7 sm:py-9"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4EAE2] text-[#921C24]">
                <Icon
                  size={25}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <h3 className="text-base font-bold text-[#5A4337] sm:text-xl">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#7E6152] sm:text-base sm:leading-7">
                {text}
              </p>
            </article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default WhyNano
