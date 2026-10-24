import Events from './Events'
import Gallery from './Gallery'
import Process from './Process'
import Products from './Products'
import WhyNano from './WhyNano'

function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-16">
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