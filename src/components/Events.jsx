
import {
  Building2,
  Cake,
  Gift,
  PartyPopper,
  Sparkles,
  Users,
  Lightbulb,
  ArrowLeft,
} from 'lucide-react'

const eventTypes = [
  { title: 'בת מצווה', icon: Gift },
  { title: 'ימי הולדת', icon: Cake },
  { title: 'ערבי נשים וגיבוש', icon: Users },
  { title: 'מסיבות ואירועים משפחתיים', icon: PartyPopper },
  { title: 'בתי ספר וימי שיא', icon: Sparkles },
  { title: 'חברות וארגונים', icon: Building2 },
]

function Events() {
  return (
    <section
      id="events"
      dir="rtl"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* כותרת */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold text-[#BC8F73]">
            חוויה שמתאימה בדיוק לאירוע שלכם
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#5A4337] sm:text-4xl">
            לכל אירוע יש את ה־Nano שלו
          </h2>

          <p className="mt-5 text-base leading-8 text-[#7E6152] sm:text-lg">
            כל אירוע הוא עולם בפני עצמו, ואנחנו כאן כדי להפוך
            אותו לחוויה יצירתית, אישית ובלתי נשכחת.
            הסדנאות שלנו מתאימות למגוון גילאים, קהלים ואירועים.
          </p>

        </div>

        {/* סוגי אירועים */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {eventTypes.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="group flex min-w-0 items-center gap-4 rounded-[1.5rem] border border-[#EADFD8] bg-[#F8F4F0]/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#BC8F73] hover:bg-white hover:shadow-[0_12px_30px_rgba(90,67,55,0.08)]"
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#921C24] shadow-sm">
                <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
              </div>

              <h3 className="min-w-0 text-base font-bold text-[#5A4337] sm:text-lg">
                {title}
              </h3>

            </div>
          ))}

        </div>

        {/* התאמה אישית */}
        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-[#EADFD8] bg-[#F8F4F0] p-7 sm:p-10">

          {/* עיטור רקע */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[#BC8F73]/10 blur-2xl"
          />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-3xl">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#921C24] shadow-sm">
                <Lightbulb size={27} strokeWidth={1.7} aria-hidden="true" />
              </div>

              <h3 className="text-2xl font-black text-[#5A4337] sm:text-3xl">
                ויש גם מקום לרעיון שלכם!
              </h3>

              <p className="mt-4 text-base leading-8 text-[#7E6152]">
                יש לכם נושא, מסר או רעיון שתרצו להעביר בדרך
                קצת אחרת? אנחנו מתאימים את האלמנטים,
                המשפטים והעיצובים לאופי האירוע ולתוכן
                שתרצו להעניק לו.
              </p>

              <p className="mt-3 text-base leading-8 text-[#7E6152]">
                החל מסדנאות בנושאי ערכים, חגים וזהירות בדרכים,
                ועד לימי שיא, אירועים מיוחדים ותוכניות
                בהתאמה אישית.
              </p>

              <p className="mt-5 text-lg font-bold text-[#921C24]">
                אתם מביאים את הרעיון, אנחנו מביאים את היצירתיות!
              </p>

            </div>

            {/* אלמנט דקורטיבי */}
            <div
              aria-hidden="true"
              className="hidden shrink-0 items-center justify-center lg:flex"
            >
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#BC8F73]/30 bg-white/70">
                <Sparkles
                  size={48}
                  strokeWidth={1.2}
                  className="text-[#BC8F73]"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Events
