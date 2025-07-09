'use client'

import Headergreen from '../components/Headergreen'
import NavBarg from '../components/navbargreen'
import SellerSection from '../components/SellerSection'
import Footer from '../components/Footer'

export default function SellerPage() {
  return (
    <div className="app">
      <Headergreen />
      <NavBarg />
      <SellerSection />
      <Footer />
    </div>
  )
}