import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import PromoPosterPopup from './components/PromoPosterPopup'

function App() {
  return (
    <div dir="rtl" lang="he" className="min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
      <PromoPosterPopup
        imageSrc="/road-safety-workshop.JPG"
        alt="פרוספקט סדנת זהירות בדרכים"
        dialogLabel="פרוספקט סדנת זהירות בדרכים"
      />
    </div>
  )
}

export default App
