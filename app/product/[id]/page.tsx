'use client';

import './ProductDetail.css';
import React from 'react';
import { useParams } from 'next/navigation';
import Headergreen from '../../components/Headergreen';
import NavBarg from '../../components/navbargreen';
import Footer from '../../components/Footer';

const allProducts = [
  {
    id: '1002',
    title: 'Copper Water Bottle | 1000ml | Ayurvedic Benefits | Sustainable & Durable',
    image: '/products/copperbottle.png',
    price: 18.75,
    rating: 5,
    carbon_red: 70,
    badge_id: 2,
  },
  {
    id: '1003',
    title: 'Steel Water Bottle | 750ml | BPA-Free | Insulated & Durable',
    image: '/products/bottle2.png',
    price: 15.49,
    rating: 4,
    carbon_red: 60,
    badge_id: 3,
  },
  {
    id: '1004',
    title: 'Bamboo Water Bottle | 500ml | Travelling Hiking | Eco Glass Series',
    image: '/products/bamboo.png',
    price: 13.99,
    rating: 4,
    carbon_red: 55,
    badge_id: 1,
  },
  {
    id: '1005',
    title: 'PARAS Copper Bottle 100% Pure Copper |BPA Free Water Bottle | Copper Infused Water | Leak Proof | Office Bottle',
    image: '/products/copperbot.png',
    price: 13.99,
    rating: 4,
    carbon_red: 55,
    badge_id: 1,
  },
  { id: '1006',
    title: 'Glass Water Bottle | 500ml | Leak-Proof | Eco Glass Series',
    image: '/products/bottle3.png',
    price: 13.99,
    rating: 4,
    carbon_red: 55,
    badge_id: 1,
  },
  {
    id: '1007',
    title: 'Wooden Water Bottle | 500ml | Leak-Proof | Eco Glass Series',
    image: '/products/bottle1.png',
    price: 13.99,
    rating: 4,
    carbon_red: 55,
    badge_id: 1,
  },
    {
    id: '1008',
    title: ' Water Bottle | 500ml | Leak-Proof | Eco Glass Series',
    image: '/products/bottle4.png',
    price: 13.99,
    rating: 4,
    carbon_red: 55,
    badge_id: 1,
  },
      {
    id: '100(8)',
    title: ' Water Bottle | 500ml | Leak-Proof | Eco Glass Series',
    image: '/products/bottle5.png',
    price: 13.99,
    rating: 4,
    carbon_red: 55,
    badge_id: 1,
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params?.id?.toString();
  const product = allProducts.find((p) => p.id === productId);

  return (
    <>
      <Headergreen />
      <NavBarg />

      <div className="p-6 px-10 bg-gray-50">
        <div className="flex justify-between items-center flex-wrap gap-3 mb-6">
          <div className="flex flex-wrap gap-3">
            {[
              { icon: '🏬', label: 'In-store' },
              { icon: '💲', label: 'Price' },
              { icon: '🏷️', label: 'Brand' },
              { icon: '⏱️', label: 'Fulfillment Speed' },
              { icon: '🔄', label: 'Subscription' },
            ].map(({ icon, label }) => (
              <button
                key={label}
                className="filter-button px-4 py-2 rounded-full bg-gray-100 text-sm hover:bg-gray-200 transition flex items-center gap-2"
              >
                <span>{icon}</span> {label}
              </button>
            ))}
          </div>
          <div className="font-semibold text-sm flex items-center gap-1">
            Sort by <span className="text-blue-600">Best Match</span> ⌄
          </div>
        </div>

        <div className="bg-blue-100 p-4 flex justify-between items-center rounded-xl mb-6 hover:shadow-md transition">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Deals</div>
            <div>
              <p className="font-bold">This way for Deals</p>
              <p className="text-sm text-gray-600">These prices are so, so low</p>
            </div>
          </div>
          <button className="border border-black px-4 py-1 rounded-full font-semibold text-sm hover:bg-black hover:text-white transition">Shop Deals</button>
        </div>

        <div className="text-xl font-semibold mb-4">Results for "water bottle"</div>

        <div className="flex gap-8">
          {/* Left Sidebar */}
          <aside className="w-[240px] space-y-4 text-sm">
            {[
              'Price',
              'Brand',
              'Fulfillment Speed',
              'Subscription',
              'Walmart Cash Offers',
              'Product Category',
              'Lifestage',
            ].map((section) => (
              <details key={section} className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
                <summary className="cursor-pointer font-medium">{section}</summary>
                <div className="text-gray-600 mt-2">Options...</div>
              </details>
            ))}
          </aside>

          {/* Products Grid */}
          <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allProducts.map((p) => (
              <a
                key={p.id}
                href={p.id === '1005' ? '/product/1005' : `/product/${p.id}`}
                className="bg-white rounded-xl shadow hover:shadow-xl p-4 transition relative group"
>

                {/* Rollback Tag */}
                {(p.id === '1004' || p.id === '1005') && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">Rollback</div>
                )}

                {/* Favorite Icon */}
                <div className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-lg cursor-pointer">♡</div>

                <img src={p.image} alt={p.title} className="w-full h-[200px] object-contain mb-3" />
                <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full mb-2 hover:bg-blue-700 transition">Options</button>

                <h3 className="font-semibold text-sm">{p.title}</h3>
                <p className="text-green-700 font-bold mt-1">${p.price.toFixed(2)}</p>
                <p className="text-sm text-yellow-500">{"⭐".repeat(p.rating)}</p>
                <p className="text-xs text-gray-500 mt-1">Carbon Reduction: {p.carbon_red}%</p>
              </a>
            ))}
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
