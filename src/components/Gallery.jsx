
import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { src: '/gallery/gallery-1.jpeg', alt: 'רגעים מסדנת Nano - תמונה 1' },
  { src: '/gallery/gallery-2.jpeg', alt: 'רגעים מסדנת Nano - תמונה 2' },
  { src: '/gallery/gallery-3.jpeg', alt: 'רגעים מסדנת Nano - תמונה 3' },
  { src: '/gallery/gallery-4.jpeg', alt: 'רגעים מסדנת Nano - תמונה 4' },
  { src: '/gallery/gallery-5.jpeg', alt: 'רגעים מסדנת Nano - תמונה 5' },
  { src: '/gallery/gallery-6.jpeg', alt: 'רגעים מסדנת Nano - תמונה 6' },
]

function Gallery() {
  const [activeImage, setActiveImage] = useState(null)

  const closeImage = () => setActiveImage(null)

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % galleryImages.length)
  }

  const previousImage = () => {
    setActiveImage(
      (current) =>
        (current - 1 + galleryImages.length) % galleryImages.length
    )
  }

  useEffect(() => {
    if (activeImage === null) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeImage()
      if (event.key === 'ArrowLeft') nextImage()
      if (event.key === 'ArrowRight') previousImage()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeImage])

  return (
    <section
      id="video"
      dir="rtl"
      className="bg-[#F4EAE2] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* כותרת */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#BC8F73]">
            רגעים מהסדנה
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#5A4337] sm:text-4xl">
            יש חוויות שפשוט צריך לראות
          </h2>

          <p className="mt-5 text-base leading-8 text-[#7E6152] sm:text-lg">
            הצצה קטנה לרגעים, ליצירה ולקסם שקורה בסדנאות שלנו.
          </p>
        </div>

        {/* גלריה משולבת */}
        <div className="mt-10 grid items-start gap-5 lg:mt-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)] lg:gap-6">

          {/* סרטון אנכי */}
          <div className="mx-auto w-full max-w-[340px] lg:max-w-none">
            <div className="overflow-hidden rounded-[1.75rem] border border-[#D9C4B5] bg-[#EAD8CC] p-2 shadow-[0_12px_30px_rgba(90,67,55,0.08)]">
              <video
                controls
                playsInline
                preload="metadata"
                className="aspect-[9/16] w-full rounded-[1.35rem] bg-black object-contain"
              >
                <source
                  src="/gallery/nano-workshop.mp4"
                  type="video/mp4"
                />
                הדפדפן שלך אינו תומך בהצגת סרטון.
              </video>
            </div>
          </div>

          {/* שש תמונות */}
          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`הגדלת תמונה ${index + 1}`}
                className="group min-w-0 overflow-hidden rounded-[1.5rem] border border-[#D9C4B5] bg-[#EAD8CC] p-1.5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(90,67,55,0.12)] sm:p-2"
              >
                <div className="overflow-hidden rounded-[1.1rem]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* תצוגת תמונה מוגדלת */}
      {activeImage !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="תצוגת תמונה מוגדלת"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={closeImage}
        >
          <button
            type="button"
            onClick={closeImage}
            aria-label="סגירה"
            className="absolute right-5 top-5 z-10 rounded-full bg-white/15 p-3 text-white transition hover:bg-white/25"
          >
            <X size={24} />
          </button>

          <img
            src={galleryImages[activeImage].src}
            alt={galleryImages[activeImage].alt}
            className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              previousImage()
            }}
            aria-label="תמונה קודמת"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition hover:bg-white/35 sm:right-6 sm:p-3"
          >
            <ChevronRight size={26} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              nextImage()
            }}
            aria-label="תמונה הבאה"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition hover:bg-white/35 sm:left-6 sm:p-3"
          >
            <ChevronLeft size={26} />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-4 py-2 text-sm text-white">
            {activeImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
