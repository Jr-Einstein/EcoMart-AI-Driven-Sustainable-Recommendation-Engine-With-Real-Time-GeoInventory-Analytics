'use client'
import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  Truck, 
  Shield, 
  Award, 
  Factory, 
  Package, 
  Leaf,
  ChevronLeft,
  ChevronRight,
  Play,
  User,
  Search,
  ShoppingBag,
  QrCode,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  ThumbsUp,
  MessageCircle,
  Camera,
  CheckCircle,
  X
} from 'lucide-react';
import './productdetails.css';

import Headergreen from '../../components/Headergreen';
import NavBarg from '../../components/navbargreen';
import Footer from '../../components/Footer';


const ProductPage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('500ml');
  const [showQR, setShowQR] = useState(false);
  
  const productImages = [
    'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=500',
    'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=500',
    'https://images.pexels.com/photos/6832388/pexels-photo-6832388.jpeg?auto=compress&cs=tinysrgb&w=500',
    'https://images.pexels.com/photos/7195299/pexels-photo-7195299.jpeg?auto=compress&cs=tinysrgb&w=500'
  ];

  const sizes = ['350ml', '500ml', '750ml', '1L'];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const customerReviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      review: "Amazing quality! The copper bottle keeps my water cold for hours and I love the eco-friendly aspect. Highly recommend!",
      verified: true,
      helpful: 24,
      images: ['https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=150']
    },
    {
      name: "Mike Chen",
      rating: 4,
      date: "1 month ago",
      review: "Great bottle, love the sustainable manufacturing process. Only wish it came in more colors.",
      verified: true,
      helpful: 18,
      images: []
    },
    {
      name: "Emma Davis",
      rating: 5,
      date: "3 weeks ago",
      review: "Perfect for my daily workouts. The antimicrobial properties are a huge plus. Worth every penny!",
      verified: true,
      helpful: 31,
      images: ['https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=150', 'https://images.pexels.com/photos/6832388/pexels-photo-6832388.jpeg?auto=compress&cs=tinysrgb&w=150']
    }
  ];

  const recommendedProducts = [
    { name: 'Steel Water Bottle', price: '$24.99', image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=300', rating: 4.2 },
    { name: 'Bamboo Travel Mug', price: '$19.99', image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=300', rating: 4.5 },
    { name: 'Glass Water Bottle', price: '$29.99', image: 'https://images.pexels.com/photos/6832388/pexels-photo-6832388.jpeg?auto=compress&cs=tinysrgb&w=300', rating: 4.3 },
    { name: 'Eco Thermos Flask', price: '$34.99', image: 'https://images.pexels.com/photos/7195299/pexels-photo-7195299.jpeg?auto=compress&cs=tinysrgb&w=300', rating: 4.7 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold">★</div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium">Pickup or delivery?</div>
                  <div className="text-xs opacity-90">Green Eco Zone • Earth...</div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search sustainable products..." 
                  className="w-full py-3 px-4 rounded-full text-gray-800 pr-12"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 p-2 rounded-full">
                  <Search className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Heart className="w-5 h-5" />
                <div>
                  <div className="text-sm">Reorder</div>
                  <div className="text-xs">My Items</div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-5 h-5" />
                <div>
                  <div className="text-sm">Sign In</div>
                  <div className="text-xs">Account</div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <ShoppingBag className="w-5 h-5" />
                <div className="text-sm font-bold">$0.00</div>
              </div>
            </div>
          </div>
        </div>

        <nav className="bg-green-600 py-3">
          <div className="container mx-auto px-4">
            <div className="flex space-x-8">
              {['EcoMart Home', 'Sustainable Products', 'Eco-Friendly Home', 'Green Living', 'Organic Food', 'Renewable Energy', 'Zero Waste', 'Eco Seller', 'Learn More', 'Impact Reports'].map((item) => (
                <a key={item} href="#" className="text-sm hover:text-green-200 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={productImages[currentImage]} 
                  alt="Copper Bottle" 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex space-x-2">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      currentImage === index ? 'border-green-500' : 'border-gray-200'
                    }`}
                  >
                    <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Premium Copper Water Bottle - Eco-Friendly & Sustainable
                </h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                    <Star className="w-5 h-5" />
                  </div>
                  <span className="text-gray-600">(124 reviews)</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Eco Choice</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-green-600">$34.99</div>
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setShowQR(!showQR)}
                    className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <QrCode className="w-5 h-5" />
                    <span className="text-sm">QR Code</span>
                  </button>
                  {showQR && (
                    <div className="relative">
                      <div className="absolute right-0 top-12 bg-white p-4 rounded-lg shadow-lg border z-10">
                        <div className="w-32 h-32 bg-gray-900 rounded-lg flex items-center justify-center">
                          <div className="qr-code"></div>
                        </div>
                        <p className="text-xs text-gray-600 mt-2 text-center">Scan for mobile view</p>
                        <button 
                          onClick={() => setShowQR(false)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size:</label>
                  <div className="flex space-x-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg border ${
                          selectedSize === size
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                  <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <Truck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Free Shipping</div>
                  <div className="text-xs text-gray-600">Orders over $25</div>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">2 Year Warranty</div>
                  <div className="text-xs text-gray-600">Quality guarantee</div>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Eco Certified</div>
                  <div className="text-xs text-gray-600">100% sustainable</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">About this item</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Pure copper construction with antimicrobial properties</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Leak-proof design with ergonomic grip</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Temperature retention: Keeps cold for 24hrs, hot for 12hrs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>BPA-free and food-grade safe materials</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Handcrafted by skilled artisans using traditional methods</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Naturally develops beautiful patina over time</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Specifications</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Material</span>
                  <span className="font-semibold">99.9% Pure Copper</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Capacity</span>
                  <span className="font-semibold">500ml</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Weight</span>
                  <span className="font-semibold">280g</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Dimensions</span>
                  <span className="font-semibold">25cm x 7cm</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Care Instructions</span>
                  <span className="font-semibold">Hand wash only</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Origin</span>
                  <span className="font-semibold">Handmade in India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="hero-banner bg-gradient-to-r from-green-600 to-green-800 rounded-lg overflow-hidden mb-8">
          <div className="relative h-64 flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-4">Sustainable Living Starts Here</h2>
              <p className="text-xl">Join the eco-revolution with our premium copper bottles</p>
            </div>
          </div>
        </div>

        {/* Sustainability Process */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Sustainable Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Factory Production */}
            <div className="text-center space-y-4">
              <div className="relative mx-auto w-48 h-48 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg overflow-hidden factory-scene">
                <div className="absolute bottom-0 w-full h-16 bg-gray-600"></div>
                <div className="factory-worker worker-1"></div>
                <div className="factory-worker worker-2"></div>
                <div className="factory-worker worker-3"></div>
                <Factory className="w-12 h-12 text-gray-700 absolute top-4 left-4" />
                <div className="factory-smoke"></div>
              </div>
              <h3 className="text-xl font-bold text-green-700">Eco-Friendly Manufacturing</h3>
              <p className="text-gray-600">Our factory uses 100% renewable energy and sustainable copper sourcing practices.</p>
            </div>

            {/* Packaging */}
            <div className="text-center space-y-4">
              <div className="relative mx-auto w-48 h-48 bg-gradient-to-b from-green-100 to-green-200 rounded-lg overflow-hidden packaging-scene">
                <div className="package-box box-1"></div>
                <div className="package-box box-2"></div>
                <div className="package-box box-3"></div>
                <Package className="w-12 h-12 text-green-600 absolute top-4 right-4" />
                <Leaf className="w-8 h-8 text-green-500 absolute bottom-4 left-4 floating-leaf" />
              </div>
              <h3 className="text-xl font-bold text-green-700">Biodegradable Packaging</h3>
              <p className="text-gray-600">All packaging materials are 100% biodegradable and made from recycled content.</p>
            </div>

            {/* Transportation */}
            <div className="text-center space-y-4">
              <div className="relative mx-auto w-48 h-48 bg-gradient-to-b from-blue-100 to-blue-200 rounded-lg overflow-hidden transport-scene">
                <div className="road"></div>
                <div className="delivery-truck"></div>
                <div className="exhaust-cloud cloud-1"></div>
                <div className="exhaust-cloud cloud-2"></div>
                <Truck className="w-8 h-8 text-blue-600 absolute top-4 left-4" />
              </div>
              <h3 className="text-xl font-bold text-green-700">Carbon-Neutral Delivery</h3>
              <p className="text-gray-600">Electric delivery vehicles and optimized routes minimize our carbon footprint.</p>
            </div>
          </div>
        </div>

        {/* Enhanced Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Environmental Impact Charts */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold">Environmental Impact Metrics</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Carbon Footprint Reduction</span>
                  <span className="text-sm text-green-600 font-bold">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-1000 chart-bar" style={{width: '87%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Water Usage Reduction</span>
                  <span className="text-sm text-blue-600 font-bold">72%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-4 rounded-full transition-all duration-1000 chart-bar" style={{width: '72%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Waste Elimination</span>
                  <span className="text-sm text-purple-600 font-bold">94%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-4 rounded-full transition-all duration-1000 chart-bar" style={{width: '94%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Renewable Energy Use</span>
                  <span className="text-sm text-yellow-600 font-bold">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-4 rounded-full transition-all duration-1000 chart-bar" style={{width: '100%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Sustainability Metrics */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-2 mb-6">
              <BarChart3 className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold">Sustainability Metrics</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">2.5kg</div>
                <div className="text-sm text-gray-600">CO₂ Saved per bottle</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">150L</div>
                <div className="text-sm text-gray-600">Water saved in production</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">95%</div>
                <div className="text-sm text-gray-600">Recyclable materials</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">25+</div>
                <div className="text-sm text-gray-600">Years lifespan</div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Monthly Impact Trend</h4>
              <div className="flex items-end space-x-2 h-20">
                {[65, 72, 78, 85, 87, 89].map((value, index) => (
                  <div key={index} className="flex-1 bg-green-200 rounded-t" style={{height: `${value}%`}}>
                    <div className="w-full bg-green-500 rounded-t transition-all duration-1000" style={{height: '100%'}}></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">See Our Impact in Action</h2>
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Sustainability Video" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="bg-white/90 p-4 rounded-full hover:bg-white transition-colors">
                    <Play className="w-8 h-8 text-gray-800" />
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Analytics */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Activity className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold">Real-time Impact</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Plastic bottles replaced</span>
                    <span className="text-lg font-bold text-green-600">12,847</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">This month</div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Trees planted</span>
                    <span className="text-lg font-bold text-blue-600">1,247</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Through our partnership</div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Ocean cleanup (kg)</span>
                    <span className="text-lg font-bold text-purple-600">2,156</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Plastic removed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Customer Reviews</h2>
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <Star className="w-5 h-5" />
              </div>
              <span className="text-gray-600">4.2 out of 5 (124 reviews)</span>
            </div>
          </div>

          {/* Rating Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Rating Breakdown</h3>
              <div className="space-y-2">
                {[
                  { stars: 5, percentage: 65, count: 81 },
                  { stars: 4, percentage: 20, count: 25 },
                  { stars: 3, percentage: 10, count: 12 },
                  { stars: 2, percentage: 3, count: 4 },
                  { stars: 1, percentage: 2, count: 2 }
                ].map((rating) => (
                  <div key={rating.stars} className="flex items-center space-x-3">
                    <span className="text-sm w-8">{rating.stars}★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full transition-all duration-1000"
                        style={{width: `${rating.percentage}%`}}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12">{rating.count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">What customers love</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Quality & Durability (89%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Eco-friendly design (94%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Temperature retention (87%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Value for money (82%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            {customerReviews.map((review, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold">{review.name}</span>
                      {review.verified && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Verified Purchase</span>
                      )}
                      <span className="text-gray-500 text-sm">{review.date}</span>
                    </div>
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                      {[...Array(5 - review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-3">{review.review}</p>
                    {review.images.length > 0 && (
                      <div className="flex space-x-2 mb-3">
                        {review.images.map((img, imgIndex) => (
                          <img 
                            key={imgIndex} 
                            src={img} 
                            alt="Customer photo" 
                            className="w-16 h-16 object-cover rounded-lg border"
                          />
                        ))}
                      </div>
                    )}
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <button className="flex items-center space-x-1 hover:text-green-600">
                        <ThumbsUp className="w-4 h-4" />
                        <span>Helpful ({review.helpful})</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-green-600">
                        <MessageCircle className="w-4 h-4" />
                        <span>Reply</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Write a Review
            </button>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Recommended for you</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="font-medium mb-2">{product.name}</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(Math.floor(product.rating))].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.rating})</span>
                </div>
                <div className="text-lg font-bold text-green-600">{product.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-green-600" />
              </div>
              <div className="font-medium">ISO 14001</div>
              <div className="text-sm text-gray-600">Environmental Management</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <div className="font-medium">FDA Approved</div>
              <div className="text-sm text-gray-600">Food Safety</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-green-600" />
              </div>
              <div className="font-medium">Carbon Neutral</div>
              <div className="text-sm text-gray-600">Zero Emissions</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-purple-600" />
              </div>
              <div className="font-medium">B-Corp Certified</div>
              <div className="text-sm text-gray-600">Social Impact</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
