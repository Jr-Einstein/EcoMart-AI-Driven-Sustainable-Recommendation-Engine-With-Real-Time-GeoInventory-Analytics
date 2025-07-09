'use client'

import Headergreen from '../components/Headergreen'
import NavBarg from '../components/navbargreen'
import Homegreen from '../components/Homegreen'
import Footer from '../components/Footer'

export default function EcoMartPage() {
  return (
    <div className="app">
      <Headergreen />
      <NavBarg />
      <Homegreen />
      <Footer />
    </div>
  )
}