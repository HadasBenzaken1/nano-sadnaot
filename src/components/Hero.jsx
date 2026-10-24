import { ArrowLeft } from 'lucide-react'

function Hero() {
  return (
    <section
      id="hero"
      dir="rtl"
     // className="relative isolate overflow-hidden rounded-[2.5rem] border border-[#D9C4B5]/80 bg-[#F4EAE2]"
    >
      {/* רקע עדין */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#BC8F73]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#921C24]/5 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-10 lg:py-16">

        {/* טקסט - צד ימין */}
        <div className="order-1 max-w-xl text-right">

          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#BC8F73]/30 bg-white/80 px-4 py-2 text-xs font-semibold text-[#7E6152] sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#921C24]" />
            סדנאות יצירה ועיצוב בהתאמה אישית
          </p>

          <h1 className="text-[2.5rem] font-black leading-[1.17] tracking-tight text-[#5A4337] sm:text-5xl lg:text-[3.4rem]">
            יוצרים חוויה.
            <span className="mt-2 block text-[#921C24]">
              לוקחים אותה הביתה.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-[#7E6152] sm:text-lg">
            ברוכים הבאים לעולם של Nano!
            <br />
            סדנאות יצירה מלאות השראה, שבהן כל משתתפת בוחרת, משלבת ומעצבת מתוך עולם עשיר של אלמנטים, צבעים ומשפטים.

            ואז מגיע רגע הקסם — העיצוב האישי הופך למוצר אמיתי ושימושי, שנשאר איתכם הרבה אחרי שהאירוע מסתיים.
          </p>

          <p className="mt-5 max-w-lg text-sm font-semibold leading-7 text-[#5A4337] sm:text-base">
            סדנאות לבת מצוות, ימי הולדת, אירועים פרטיים, בתי ספר, חברות וארגונים.
          </p>

          {/* כפתורי פעולה */}
          <div className="mt-8 flex flex-wrap gap-3">

            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#921C24] px-7 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(146,28,36,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#78171E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#921C24]"
            >
              בואו ניצור יחד
              <ArrowLeft size={17} aria-hidden="true" />
            </a>

            <a
              href="#products"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#BC8F73]/45 bg-white px-7 py-3 text-sm font-semibold text-[#5A4337] transition duration-300 hover:border-[#921C24] hover:text-[#921C24]"
            >
              גלו את הסדנאות שלנו
            </a>

          </div>

        </div>

        {/* תמונה - צד שמאל */}
        <div className="order-2 relative w-full">

          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-[#BC8F73]/20 blur-2xl"
          />

          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#EDE5DE] shadow-[0_22px_55px_rgba(90,67,55,0.12)]">

            <img
              src="/nano-workshop-hero.png"
              alt="סדנת יצירה של Nano עם שולחן אלמנטים ומוצרים בעיצוב אישי"
              className="block aspect-[4/3] w-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />

          </div>

        </div>

      </div>
    </section>


  )
}

export default Hero