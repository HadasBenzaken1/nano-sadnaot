
function Hero() {
  const events = [
    'בת מצוות',
    'ימי הולדת',
    'אירועים פרטיים',
    'בתי ספר',
    'חברות וארגונים',
  ]

  return (
    <section
      id="hero"
      dir="rtl"
      className="relative w-full overflow-hidden bg-[#E9DDD3]"
    >
      <div
        className="
          mx-auto w-full max-w-[1250px]
          px-5 pb-14 pt-10
          sm:px-8 sm:pb-16 sm:pt-14
          lg:px-12 lg:pb-12 lg:pt-16
        "
      >
        {/* חלק עליון - פריסה מגזינית */}
        <div
          className="
            grid grid-cols-1 items-start gap-8
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-12
          "
        >
          {/* צד ימין - כותרת */}
          <div className="min-w-0 text-right">
            <h1
              className="
                font-black tracking-tight
                text-[clamp(2rem,3.5vw,3.15rem)]
                leading-[1.22] text-[#5A4337]
                lg:text-[clamp(3.2rem,4vw,4rem)]
                lg:leading-[1.2]
              "
            >
              יוצרים חוויה.
              <span className="mt-1 block text-[#921C24]">
                לוקחים אותה הביתה.
              </span>
            </h1>

            <div
              aria-hidden="true"
              className="
                mt-6 h-[3px] w-14
                rounded-full bg-[#921C24]
                lg:mt-7 lg:w-16
              "
            />
          </div>

          {/* צד שמאל - תיאור הסדנה */}
          <div
            className="
              min-w-0 text-right
              lg:border-r lg:border-[#BC8F73]/55
              lg:pr-8 lg:pt-3
            "
          >
            <p className="text-base font-bold text-[#5A4337] sm:text-lg">
              ברוכים הבאים לעולם של Nano!
            </p>

            <p
              className="
                mt-4 text-[15px] leading-7 text-[#7E6152]
                sm:text-base sm:leading-8
              "
            >
              סדנאות יצירה מלאות השראה, שבהן כל משתתף בוחר,
              משלב ומעצב מתוך עולם עשיר של אלמנטים,
              צבעים ומשפטים.
            </p>

            <p
              className="
                mt-4 text-[15px] leading-7 text-[#7E6152]
                sm:text-base sm:leading-8
              "
            >
              ואז מגיע רגע הקסם - העיצוב האישי הופך למוצר
              אמיתי ושימושי, שנשאר איתכם הרבה אחרי שהאירוע מסתיים.
            </p>
          </div>
        </div>

        {/* קו הפרדה */}
        <div
          aria-hidden="true"
          className="
            mt-12 h-px w-full bg-[#BC8F73]/45
            lg:mt-12
          "
        />

        {/* שורת סוגי האירועים */}
        <div
          className="
            mt-9 flex flex-col items-center gap-4
            text-center
            lg:mt-8 lg:gap-3
          "
        >
          <p
            className="
              text-xs font-semibold tracking-wide
              text-[#921C24] sm:text-sm
            "
          >
            חוויה שמתאימה לכל אירוע
          </p>

          <div
            className="
              flex max-w-full flex-wrap
              items-center justify-center
              gap-x-4 gap-y-3
              sm:gap-x-6
            "
          >
            {events.map((event, index) => (
              <div
                key={event}
                className="flex items-center gap-4 sm:gap-6"
              >
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="
                      h-1.5 w-1.5 shrink-0
                      rounded-full bg-[#921C24]/65
                    "
                  />
                )}

                <span
                  className="
                    whitespace-nowrap text-sm
                    font-semibold text-[#5A4337]
                    sm:text-base
                  "
                >
                  {event}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
