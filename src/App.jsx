import React from 'react'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import SocialServices from './components/SocialServices'
import MarketingTools from './components/MarketingTools'
import GraphicDesign from './components/GraphicDesign'
import PrivacyPolicy from './components/PrivacyPolicy'
import Clients from './components/Clients'
import ContactSection from './components/ContactSection'
import Footer from './components/FooterComplete'

export default function App(){
  return (
    <div>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <ServicesSection />
      <SocialServices />
      <MarketingTools />
      <GraphicDesign />
      <PrivacyPolicy />
      <Clients />
      <ContactSection />
      <Footer />
    </div>
  )
}
