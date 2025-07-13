// app/admin/components/Header.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import { Bell, User, Search } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/spark-icon.png"
              alt="Walmart Spark Logo"
              width={60}
              height={60}
              className="mr-3"
            />
            <span className="text-2xl font-bold">Walmart</span>
            <span className="ml-2 text-sm bg-blue-500 px-2 py-1 rounded">
              Inventory Management
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, stores, or analytics..."
                className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-700 transition-colors">
              <User className="w-5 h-5" />
              <span className="text-sm">Admin</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
