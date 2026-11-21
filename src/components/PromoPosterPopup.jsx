import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'

function PromoPosterPopup({
  imageSrc,
  alt = 'פרוספקט מבצע',
  dialogLabel = 'פרוספקט מידע',
  closeLabel = 'סגירת הפרוספקט',
  delayMs = 1500,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const closeButtonRef = useRef(null)
  const backdropRef = useRef(null)

  useEffect(() => {
    if (!imageSrc) return undefined

    let isCancelled = false
    let timerId
    const poster = new window.Image()

    poster.onload = () => {
      if (isCancelled) return

      timerId = window.setTimeout(() => {
        if (!isCancelled) {
          setIsOpen(true)
        }
      }, delayMs)
    }

    poster.onerror = () => {
      if (!isCancelled) {
        console.error(`Unable to load the poster image at ${imageSrc}.`)
      }
    }

    poster.src = imageSrc

    return () => {
      isCancelled = true
      window.clearTimeout(timerId)
      poster.onload = null
      poster.onerror = null
    }
  }, [imageSrc, delayMs])

  useEffect(() => {
    if (!isOpen) return undefined

    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    const closeButton = closeButtonRef.current

    document.body.style.overflow = 'hidden'
    closeButton?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      } else if (event.key === 'Tab') {
        event.preventDefault()
        closeButton?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)

      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus()
      }
    }
  }, [isOpen])

  const handleBackdropClick = (event) => {
    if (event.target === backdropRef.current) {
      setIsOpen(false)
    }
  }

  if (!isOpen || !imageSrc) return null

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      dir="rtl"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2B211D]/60 p-4 backdrop-blur-[2px] [animation:campaign-popup-fade_400ms_ease-out_both]"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={dialogLabel}
        className="relative max-h-[92vh] max-w-[92vw] [animation:campaign-popup-in_750ms_cubic-bezier(0.16,1,0.3,1)_both] sm:max-w-2xl"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label={closeLabel}
          className="absolute start-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#F4EAE2]/95 text-[#5A4337] shadow-md transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#921C24]"
        >
          <X size={22} aria-hidden="true" />
        </button>

        <img
          src={imageSrc}
          alt={alt}
          className="block max-h-[88vh] w-auto max-w-[88vw] object-contain"
        />
      </div>
    </div>
  )
}

export default PromoPosterPopup