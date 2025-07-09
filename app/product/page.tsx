'use client'

import Headergreen from '../components/Headergreen'
import NavBarg from '../components/navbargreen'
import ProductDetails from '../components/ProductDetails'
import Footer from '../components/Footer'

export default function ProductPage() {
  return (
    <div className="app">
      <Headergreen />
      <NavBarg />
      <ProductDetails />
      <Footer />
    </div>
  )
}