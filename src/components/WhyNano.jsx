
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
      className="bg-[#F8F4F0] px-4 pb-10 pt-3 sm:px-6 sm:pb-14 sm:pt-5"
    >
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#F6F1EC] px-5 py-8 sm:px-8 sm:py-10">

        {/* כותרת */}
        <div className="text-center">

          <p className="text-sm font-semibold text-[#BC8F73]">
            הייחוד שלנו
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#5A4337] sm:text-4xl">
            למה דווקא Nano?
          </h2>

        </div>

        {/* יתרונות */}
        <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4">

          {benefits.map(({ title, text, icon: Icon }) => (
            <article
              key={title}
              className="flex min-w-0 flex-col items-center rounded-[1.75rem] bg-white px-3 py-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(90,67,55,0.07)] sm:px-6 sm:py-6"
            >

              {/* אייקון */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F4F0] text-[#921C24] sm:h-14 sm:w-14">
                <Icon
                  size={24}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              {/* כותרת הכרטיסייה */}
              <h3 className="text-base font-bold text-[#5A4337] sm:text-xl">
                {title}
              </h3>

              {/* תיאור */}
              <p className="mt-2 text-sm leading-6 text-[#7E6152] sm:text-base sm:leading-7">
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
