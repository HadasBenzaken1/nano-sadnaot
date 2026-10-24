import Events from './Events'
import Gallery from './Gallery'
import Process from './Process'
import Products from './Products'
import WhyNano from './WhyNano'

function About() {
  return (
    <section id="about" className="mx-auto w-full px-3 py-4 sm:px-4 sm:py-5 lg:px-6">
      <div className="space-y-4 sm:space-y-5">
        <Products />
        <Process />
        <Events />
        <Gallery />
        <WhyNano />
      </div>
    </section>
  )
}

export default About