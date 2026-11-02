
function Hero() {
  return (
    <section
      id="hero"
      dir="rtl"
      className="relative isolate w-full overflow-hidden bg-[#E9DDD3]"
    >
      <div
        className="
        relative mx-auto grid w-full max-w-[1600px]
        grid-cols-1 items-center gap-4
        px-5 pb-2 pt-8
        sm:px-8 sm:pb-4 sm:pt-10
        lg:min-h-[720px]
        lg:grid-cols-[0.95fr_1.05fr]
        lg:gap-0 lg:px-10 lg:py-0
      "
      >

        {/* טקסט בצד ימין */}
        <div className="relative z-10 order-1 min-w-0 text-right lg:pr-2 lg:-translate-y-14 lg:-translate-x-6">

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

          <p className="mt-6 max-w-xl text-base leading-8 text-[#7E6152] sm:text-lg">
            ברוכים הבאים לעולם של Nano!
            <br />
            סדנאות יצירה מלאות השראה, שבהן כל משתתפת בוחרת,
            משלבת ומעצבת מתוך עולם עשיר של אלמנטים,
            צבעים ומשפטים.
            <br />
            <br />
            ואז מגיע רגע הקסם — העיצוב האישי הופך למוצר
            אמיתי ושימושי, שנשאר איתכם הרבה אחרי שהאירוע מסתיים.
          </p>

          <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-[#5A4337] sm:text-base">
            סדנאות לבת מצוות, ימי הולדת, אירועים פרטיים,
            בתי ספר, חברות וארגונים.
          </p>
          {/* 
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#921C24] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#78171E]"
            >
              בואו ניצור יחד
            </a>

            <a
              href="#products"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#BC8F73]/45 bg-white/80 px-7 py-3 text-sm font-semibold text-[#5A4337] transition hover:border-[#921C24] hover:text-[#921C24]"
            >
              גלו את הסדנאות שלנו
            </a>
          </div> */}

        </div>



        {/* תמונת הסדנה - מותאמת למחשב ולטלפון */}
        <div
          className="
    relative order-2 min-w-0 w-full
    -mt-2
    lg:mt-0 lg:h-[720px] lg:self-stretch
  "
        >
          <div
            className="
      relative
      -mx-5 w-[calc(100%+2.5rem)]
      sm:-mx-8 sm:w-[calc(100%+4rem)]
      lg:mx-0 lg:h-full lg:w-[125%]
      lg:translate-x-[10%]
    "
          >
            <img
              src="/hero-1.png"
              alt="ילדים ובני נוער משתתפים בסדנת יצירה של Nano"
              className="
        block h-auto w-full
        lg:h-full lg:object-cover lg:object-center
      "
              loading="eager"
              fetchPriority="high"
              style={{
                WebkitMaskImage: `
          linear-gradient(to right,
            transparent 0%,
            black 5%,
            black 68%,
            transparent 100%
          ),
          linear-gradient(to bottom,
            black 0%,
            black 75%,
            transparent 100%
          )
        `,
                maskImage: `
          linear-gradient(to right,
            transparent 0%,
            black 5%,
            black 68%,
            transparent 100%
          ),
          linear-gradient(to bottom,
            black 0%,
            black 75%,
            transparent 100%
          )
        `,
                WebkitMaskComposite: 'source-in',
                maskComposite: 'intersect',
              }}
            />
          </div>
        </div>



      </div>
    </section>
  )
}

export default Hero
