'use client'

import Header from './components/Header'
import NavBar from './components/navbar'
import Home from './components/Home'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Home />
      <Footer />
    </div>
  )
}