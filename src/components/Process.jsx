
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
      className="rounded-[2.5rem] border border-[#D9C4B5]/80 bg-[#F4EAE2] px-3 py-6 sm:px-5 sm:py-8 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* כותרת */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold text-[#BC8F73]">
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
        <div className="mt-12 grid gap-5 lg:grid-cols-3">

          {steps.map(({ number, title, text, icon: Icon }) => (
            <article
              key={number}
              className="group relative overflow-hidden rounded-[1.75rem] border border-[#D9C4B5] bg-[#EAD8CC] p-7 shadow-[0_12px_30px_rgba(90,67,55,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(90,67,55,0.10)]"
            >

              {/* אייקון */}
              <div className="mb-6 mr-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4EAE2] text-[#921C24]">
                <Icon
                  size={27}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

                   {/* מספר דקורטיבי */}
              <span
                aria-hidden="true"
                className="absolute right-5 top-2 text-7xl font-black text-[#BC8F73]/10"
              >
                {number}
              </span>

              {/* תוכן */}
              <h3 className="relative text-xl font-bold text-[#5A4337]">
                {title}
              </h3>

              <p className="relative mt-4 text-base leading-8 text-[#7E6152]">
                {text}
              </p>

            </article>
          ))}

        </div>

        {/* משפט מסכם */}
        <p className="mt-10 text-center text-lg font-semibold text-[#921C24]">
          אינסוף אפשרויות, אינסוף רעיונות —
          וכל יצירה היא עולם בפני עצמו.
        </p>

      </div>
    </section>
  )
}

export default Process
