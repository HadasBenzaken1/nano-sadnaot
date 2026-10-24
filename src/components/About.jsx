
import Events from './Events'
import Gallery from './Gallery'
import Process from './Process'
import Products from './Products'
import WhyNano from './WhyNano'

const framedSection =
  'mx-auto w-full max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#F4EAE2] px-5 sm:px-8 lg:px-12'

const openSection =
  'mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12'

function About() {
  return (
    <div
      id="about"
      className="space-y-4 px-4 py-4 sm:px-6"
    >
      <div className={framedSection}>
        <Products />
      </div>

      <div className={openSection}>
        <Process />
      </div>

      <div className={framedSection}>
        <Events />
      </div>

      <div className={framedSection}>
        <Gallery />
      </div>

      <div className={openSection}>
        <WhyNano />
      </div>
    </div>
  )
}

export default About
