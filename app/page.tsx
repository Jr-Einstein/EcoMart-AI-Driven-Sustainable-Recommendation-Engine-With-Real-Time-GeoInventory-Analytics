'use client';

import Header from './components/Header';
import NavBar from './components/navbar';
import ProductPage from './components/ProductPage';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <ProductPage />
      <Footer />
    </div>
  );
}
