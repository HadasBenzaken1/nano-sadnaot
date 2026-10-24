
import Events from './Events'
import Gallery from './Gallery'
import Process from './Process'
import Products from './Products'
import WhyNano from './WhyNano'

const sectionWrapper =
  'mx-auto w-full max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#F4EAE2]'

function About() {
  return (
    <div
      id="about"
      className="space-y-4 px-4 py-4 sm:px-6"
    >
      <div className={sectionWrapper}>
        <Products />
      </div>

      <div className={sectionWrapper}>
        <Process />
      </div>

      <div className={sectionWrapper}>
        <Events />
      </div>

      <div className={sectionWrapper}>
        <Gallery />
      </div>

      <div className={sectionWrapper}>
        <WhyNano />
      </div>
    </div>
  )
}

export default About
