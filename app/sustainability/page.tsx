'use client'

import Headergreen from '../components/Headergreen'
import NavBarg from '../components/navbargreen'
import SustainabilityReportsSection from '../components/Sustainability'
import Footer from '../components/Footer'

export default function SustainabilityPage() {
  return (
    <div className="app">
      <Headergreen />
      <NavBarg />
      <SustainabilityReportsSection />
      <Footer />
    </div>
  )
}