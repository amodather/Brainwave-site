import './App.css'
import Button from './components/Button'
import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Calloboration from './components/Calloboration'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Calloboration />
      <Services />
      <Pricing />
      <Roadmap />
      <Footer />
    </div>
    <ButtonGradient />
    </>
  )
}

export default App
