import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div dir="rtl" lang="he" className="min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* <Header /> */}
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
