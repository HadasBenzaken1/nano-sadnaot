
import { Scissors, Palette, Printer } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'נכנסים לעולם של השראה',
    text: 'שולחנות מלאים באלמנטים מעוצבים, משפטים, צבעים ואינספור אפשרויות שמזמינות כל אחד למצוא את הסגנון שלו.',
    icon: Scissors,
  },
  {
    number: '02',
    title: 'יוצרים משהו שהוא רק שלכם',
    text: 'בוחרים, גוזרים, משלבים ומעצבים בחופשיות. כל עיצוב מקבל אופי ייחודי ומשקף את הטעם והיצירתיות של מי שיצר אותו.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'הקסם הופך למציאות',
    text: 'אנחנו מדפיסים את העיצוב האישי במקום ומעבירים אותו למוצר באמצעות מכבשי חום. תוך זמן קצר היצירה הופכת למזכרת אמיתית ושימושית שלוקחים הביתה.',
    icon: Printer,
  },
]

function Process() {
  return (
    <section
      id="process"
      dir="rtl"
      className="relative bg-transparent py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* כותרת */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#921C24]">
            שלושה שלבים, אינסוף אפשרויות
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#5A4337] sm:text-4xl">
            איך הקסם קורה?
          </h2>

          <p className="mt-5 text-base leading-8 text-[#7E6152] sm:text-lg">
            מהשולחן המלא בהשראה ועד לרגע שבו
            היצירה האישית הופכת למוצר אמיתי —
            כל שלב בסדנה הוא חלק מהחוויה.
          </p>
        </div>

        {/* שלבי הסדנה */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">

          {steps.map(({ number, title, text, icon: Icon }) => (
            <article
              key={number}
              className="group relative min-w-0 overflow-hidden rounded-[1.75rem] border border-[#CFAF9D]/60 bg-[#DCC3B3] px-6 py-8 shadow-[0_10px_28px_rgba(90,67,55,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(90,67,55,0.12)] sm:px-8 sm:py-9"
            >

              {/* מספר דקורטיבי */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-5 top-4 text-7xl font-black leading-none text-[#921C24]/10"
              >
                {number}
              </span>

              {/* אייקון */}
              <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4EAE2] text-[#921C24] shadow-sm">
                <Icon
                  size={27}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              {/* כותרת הכרטיסייה */}
              <h3 className="relative text-xl font-bold leading-8 text-[#5A4337]">
                {title}
              </h3>

              {/* תיאור */}
              <p className="relative mt-4 text-base leading-8 text-[#5F4A40]">
                {text}
              </p>

            </article>
          ))}

        </div>

        {/* משפט מסכם */}
        <p className="mx-auto mt-11 max-w-3xl text-center text-lg font-semibold leading-8 text-[#921C24]">
          אינסוף אפשרויות, אינסוף רעיונות —
          וכל יצירה היא עולם בפני עצמו.
        </p>

      </div>
    </section>
  )
}

export default Process
