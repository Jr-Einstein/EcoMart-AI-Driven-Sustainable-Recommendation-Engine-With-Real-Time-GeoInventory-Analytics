'use client'

import Header from '../components/Header'
import NavBarg from '../components/navbargreen'
import Dashboard from '../components/Dashboard'

export default function DashboardPage() {
  return (
    <div className="app">
      <Header />
      <NavBarg />
      <Dashboard />
    </div>
  )
}