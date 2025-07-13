'use client';
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
  X,
  MapPin,
  ChevronDown
} from 'lucide-react';
import './productdetails.css';
import Headergreen from '../../components/Headergreen';
import NavBarg from '../../components/navbargreen';

const ProductPage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('500ml');
  const [showQR, setShowQR] = useState(false);
  
  const productImages = [
    'https://m.media-amazon.com/images/I/A1DIiMmYbLL._SL1500_.jpg',
    'https://m.media-amazon.com/images/I/91pOEWBx2sL._SL1500_.jpg',
    'https://m.media-amazon.com/images/I/91VfoBHG4VL._SL1500_.jpg',
    'https://m.media-amazon.com/images/I/A105032LKXL._SL1500_.jpg'
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
      name: "Subham Agarwal",
      rating: 5,
      date: "2 weeks ago",
      review: "Amazing quality! The copper bottle keeps my water cold for hours and I love the eco-friendly aspect. Highly recommend!",
      verified: true,
      helpful: 24,
      images: ['https://m.media-amazon.com/images/I/91VfoBHG4VL._SL1500_.jpg']
    },
    {
      name: "Mahi Singh",
      rating: 4,
      date: "1 month ago",
      review: "Great bottle, love the sustainable manufacturing process. Only wish it came in more colors.",
      verified: true,
      helpful: 18,
      images: []
    },
    {
      name: "Sneha Agarwal",
      rating: 5,
      date: "3 weeks ago",
      review: "Perfect for my daily workouts. The antimicrobial properties are a huge plus. Worth every penny!",
      verified: true,
      helpful: 31,
      images: ['https://m.media-amazon.com/images/I/A1DIiMmYbLL._SL1500_.jpg']
    }
  ];

  const recommendedProducts = [
    { name: 'Steel Water Bottle', price: '$24.99', image: 'https://m.media-amazon.com/images/I/61+fWYnjqcL._SX679_.jpg', rating: 4.2 },
    { name: 'Bamboo Travel Mug', price: '$19.99', image: 'https://m.media-amazon.com/images/I/51gO-y0DDBL._SX300_SY300_QL70_FMwebp_.jpg', rating: 4.5 },
    { name: 'Glass Water Bottle', price: '$29.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgosoYSNOurj6UWFmyKm7-GawJlM4P5knCA&s', rating: 4.3 },
    { name: 'Eco Thermos Flask', price: '$34.99', image: 'https://m.media-amazon.com/images/I/81RipLBQyyL._UF894,1000_QL80_.jpg', rating: 4.7 }
  ];

  return (
     <div className="min-h-screen bg-gray-50">
    {/* ✅ Header and Nav */}
    <Headergreen />
    <NavBarg />


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
                    className="qr-button"
                  >
                    <QrCode className="w-6 h-6" />
                    <span className="text-sm">QR Code</span>
                  </button>
                  {showQR && (
                    <div className="qr-popup">
                      <div className="qr-container-large">
                        <div className="qr-code-large">
                          <img 
  src="data:image/png;base64,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" 
  alt="QR Code" 
  className="w-48 h-48 rounded-lg border-4 border-green-500"
/>

                        </div>
                        <p className="qr-text">Scan for mobile view</p>
                        <button 
                          onClick={() => setShowQR(false)}
                          className="qr-close"
                        >
                          <X className="w-4 h-4" />
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

        {/* About This Item */}
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

        {/* Sustainable vs Non-Sustainable Comparison */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Sustainable?</h2>
          <div className="comparison-container">
            <div className="comparison-side sustainable">
              <div className="comparison-header">
                <Leaf className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-green-700">Sustainable Copper Bottle</h3>
              </div>
             <div className="comparison-image flex justify-center mb-4">
  <div className="h-[200px] w-[100px] overflow-hidden">
    <img
      src="https://m.media-amazon.com/images/I/21BCnhQBB9L._SX300_SY300_QL70_FMwebp_.jpg"
      alt="Copper Bottle"
      className="h-full w-full object-contain rounded-lg shadow"
    />
  </div>
</div>

              <ul className="comparison-points">
                <li><CheckCircle className="w-5 h-5 text-green-500" /> 25+ year lifespan</li>
                <li><CheckCircle className="w-5 h-5 text-green-500" /> Natural antimicrobial properties</li>
                <li><CheckCircle className="w-5 h-5 text-green-500" /> 100% recyclable material</li>
                <li><CheckCircle className="w-5 h-5 text-green-500" /> Zero plastic waste</li>
                <li><CheckCircle className="w-5 h-5 text-green-500" /> Improves water quality</li>
                <li><CheckCircle className="w-5 h-5 text-green-500" /> Carbon neutral production</li>
                <li><CheckCircle className="w-5 h-5 text-green-500" /> Supports artisan communities</li>
                <li><CheckCircle className="w-5 h-5 text-green-500" /> No harmful chemicals</li>
              </ul>
              <div className="environmental-impact">
                <div className="impact-metric">
                  <span className="impact-number">2.5kg</span>
                  <span className="impact-label">CO₂ Saved</span>
                </div>
                <div className="impact-metric">
                  <span className="impact-number">150L</span>
                  <span className="impact-label">Water Saved</span>
                </div>
              </div>
            </div>

            <div className="vs-divider">
              <div className="vs-circle">VS</div>
            </div>

            <div className="comparison-side non-sustainable">
              <div className="comparison-header">
                <X className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-bold text-red-700">Regular Plastic Bottle</h3>
              </div>
               <div className="h-[360px] w-[260px] overflow-hidden">
    <img
      src="https://www.bbassets.com/media/uploads/p/l/40176655_7-bb-home-octa-plastic-pet-water-bottle-light-blue-narrow-mouth.jpg"
      alt="Copper Bottle"
      className="h-full w-full object-contain rounded-lg shadow"
    />
  </div>
              <ul className="comparison-points">
                <li><X className="w-5 h-5 text-red-500" /> 1-2 year lifespan</li>
                <li><X className="w-5 h-5 text-red-500" /> Harbors bacteria growth</li>
                <li><X className="w-5 h-5 text-red-500" /> Limited recycling options</li>
                <li><X className="w-5 h-5 text-red-500" /> Creates microplastic pollution</li>
                <li><X className="w-5 h-5 text-red-500" /> May leach chemicals</li>
                <li><X className="w-5 h-5 text-red-500" /> High carbon footprint</li>
                <li><X className="w-5 h-5 text-red-500" /> Mass production impact</li>
                <li><X className="w-5 h-5 text-red-500" /> Contains BPA/phthalates</li>
              </ul>
              <div className="environmental-impact negative">
                <div className="impact-metric">
                  <span className="impact-number">+3.2kg</span>
                  <span className="impact-label">CO₂ Generated</span>
                </div>
                <div className="impact-metric">
                  <span className="impact-number">+200L</span>
                  <span className="impact-label">Water Wasted</span>
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
           {/* Factory Production */}
<div className="text-center space-y-4">
  <img
  src="https://www.pre-scient.com/wp-content/uploads/2023/10/green-manufacturing-with-digital-factories.webp" // or your image link
  alt="Sustainable Copper Bottle"
  className="w-75 h-180 object-contain mx-auto rounded"
/>

  <h3 className="text-xl font-bold text-green-700">Eco-Friendly Manufacturing</h3>
  <p className="text-gray-600">Our factory uses 100% renewable energy and sustainable copper sourcing practices.</p>
</div>

            {/* Packaging */}
<div className="text-center space-y-4">
  <div className="mx-auto w-full h-64">
    {/* YouTube Embed Video */}
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/s6zpGW__JmE?autoplay=1&loop=1&playlist=s6zpGW__JmE&mute=1"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="rounded-lg w-full h-full"
    ></iframe>
  </div>
  <h3 className="text-xl font-bold text-green-700">Biodegradable Packaging</h3>
  <p className="text-gray-600">
    All packaging materials are 100% biodegradable and made from recycled content.
  </p>
</div>

            {/* Transportation */}
            <div className="text-center space-y-4">
              <div className="mx-auto w-70 h-165 rounded-lg overflow-hidden">
  <img
    src="https://www.foodbusinessnews.net/ext/resources/2024/09/30/walmart-lead----MICHAELVI.jpg?height=667&t=1727699348&width=1080"  // ✅ change this to your correct image path
    alt="Carbon-Neutral Delivery"
    className="w-full h-full object-contain"
  />
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
                <iframe
  className="w-full h-full rounded-lg"
  src="https://www.youtube.com/embed/3PhTnoyfyiE?autoplay=1&loop=1&mute=1&playlist=3PhTnoyfyiE&controls=0&modestbranding=1&rel=0"
  title="Sustainability Process"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

                
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

//made changes here