import CallToAction from './components/CallToAction'
import EssentialReading from './components/EssentialReading'
import Faq from './components/Faq'
import Footer from './components/Footer'
import FooterMix from './components/FooterMix'
import Header from './components/Header'
import Help from './components/Help'
import HeroCarousel from './components/HeroCarousel'
import HowItWorks from './components/HowItWorks'
import Review from './components/Review'
import Testimonial from './components/Testimonial'

function App() {

  return (
    <div>
      <Header />
      <main className="flex flex-col gap-20">
        <HeroCarousel />
        <CallToAction />
        <Review />
        <HowItWorks />
        <Testimonial />
        <Help />
        <EssentialReading />
        <Faq />
      </main>
      <Footer />
      <FooterMix />
    </div>
  )
}

export default App
