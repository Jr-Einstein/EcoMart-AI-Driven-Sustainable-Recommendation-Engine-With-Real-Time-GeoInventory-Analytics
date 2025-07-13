'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import { FaHeart, FaUser, FaShoppingCart } from 'react-icons/fa';
import { useStateValue } from '../lib/StateProvider';
import { useAuth } from '@/lib/authContext';

export default function Header() {
  const [{ basket }] = useStateValue();
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPopover, setShowPopover] = useState(true);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const closePopover = () => {
    setDontShowAgain(true);
    setShowPopover(false);
  };

  const handleLogout = () => {
    logout();
  };
  useEffect(() => {
    const handleScroll = () => {
      const item = document.getElementById('itemToTrack');
      if (!item) return;
      const itemRect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (itemRect.top < windowHeight && itemRect.bottom > 70) {
        setShowPopover(true);
      } else {
        setShowPopover(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-[#0071dc] text-white w-full shadow-md font-[EverydaySans,'Helvetica Neue','Helvetica',Arial,sans-serif] text-[17px]">
      <div className="max-w-[1440px] mx-auto flex items-center px-4 pr-6 h-[88px] gap-x-8">

        {/* Logo */}
        <Link href="/" className="pl-1">
          <div className="p-2 rounded-full hover:bg-[#002e6e] transition duration-200">
            <Image src="/walmart-spark.svg" alt="Walmart Logo" width={48} height={48} />
          </div>
        </Link>

        {/* Location */}
        <div
          className="relative flex items-center w-[265px] bg-[#004c91] hover:bg-[#002e6e] px-5 py-[10px] rounded-full cursor-pointer transition-colors"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <Image src="/pickup-icon.png" alt="Pickup" width={28} height={28} className="mr-2" />
          <div className="leading-tight">
            <p className="font-bold text-[15px]">Pickup or delivery?</p>
            <p className="text-sm text-white truncate w-[160px]">Sacramento, 95829 • Sacramento Supercenter</p>
          </div>
          <IoIosArrowDown className="ml-2 text-white text-base" />
          {showDropdown && (
            <div className="absolute z-50 top-[70px] left-0 w-[360px] bg-[#0071dc] rounded-2xl p-4 text-white shadow-xl">
              <div className="flex justify-between px-4 mb-4">
                {['shipping', 'pickup', 'delivery'].map((type) => (
                  <div key={type} className="flex flex-col items-center">
                    <Image src={`/${type}.png`} alt={type} width={50} height={50} />
                    <span className="text-sm font-semibold mt-2">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white text-black rounded-xl px-4 py-3 mb-3">
                <p className="text-xs font-semibold">Add an address for shipping and delivery</p>
                <p className="text-xs text-gray-600 mb-2">Sacramento, CA 95829</p>
                <button className="w-full text-sm bg-[#0071dc] text-white py-2 rounded-full">
                  Add address
                </button>
              </div>
              <div className="bg-white text-black rounded-xl px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold">Sacramento Supercenter</p>
                  <p className="text-xs text-gray-600">8915 GERBER ROAD, Sacramento, CA 95829</p>
                </div>
                <IoIosArrowDown className="text-xl text-[#0071dc]" />
              </div>
            </div>
          )}
        </div>

        {/* Search */}
        <div className="flex-grow max-w-[1875px] ml-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search everything at Walmart online and in store"
              className="w-full py-4 px-6 pr-12 rounded-full text-[16px] text-[#004c91] placeholder-[#004c91] outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#002e6e] p-3 rounded-full">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-4.35-4.35M18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="ml-20 flex items-center gap-6 relative">
          <Link href="/orders">
            <div className="flex items-center gap-2 hover:bg-[#002e6e] px-4 py-2 rounded-full transition cursor-pointer">
              <FaHeart className="text-white text-[18px]" />
              <div className="leading-tight text-sm">
                <p className="text-xs">Reorder</p>
                <p className="font-bold">My Items</p>
              </div>
            </div>
          </Link>
          {user ? (
            <div className="flex items-center gap-2 hover:bg-[#002e6e] px-4 py-2 rounded-full transition cursor-pointer relative group">
              <FaUser className="text-white text-[18px]" />
              <div className="leading-tight text-sm">
                <p className="text-xs">Hello, {user.firstName}</p>
                <p className="font-bold">Account</p>
              </div>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Dashboard
                  </Link>
                  <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Orders
                  </Link>
                  {user.role === 'admin' && (
                    <Link href="/admin/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Admin Panel
                    </Link>
                  )}
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link href="/auth/login">
            <div className="flex items-center gap-2 hover:bg-[#002e6e] px-4 py-2 rounded-full transition cursor-pointer">
              <FaUser className="text-white text-[18px]" />
              <div className="leading-tight text-sm">
                <p className="text-xs">Sign In</p>
                <p className="font-bold">Account</p>
              </div>
            </div>
          </Link>
          )}

          {/* Cart */}
          <Link href="/checkout">
            <div className="flex items-center gap-2 relative hover:bg-[#002e6e] px-4 py-2 rounded-full transition cursor-pointer">
              <FaShoppingCart className="text-white text-[20px]" />
              {basket?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-[#0071dc] text-xs font-bold rounded-full px-1">
                  {basket.length}
                </span>
              )}
              <span className="font-bold text-sm">${basket?.length || '0.00'}</span>
            </div>
          </Link>

          {/* EcoMart Button */}
          <div className="ml-3 relative">
            <Link href="/green">
              <button
                id="itemToTrack"
                className="relative bg-[#b8ec0b] border-2 border-[#4f6604] text-[#004c00] font-bold px-5 py-2 rounded-xl transition-all duration-300 ease-in-out hover:bg-[#4f6604] hover:text-white shadow-md"
              >
                EcoMart
              </button>
            </Link>

            {showPopover && !dontShowAgain && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded-xl shadow-xl p-3 z-50">
                <div className="absolute -top-2 right-4 w-4 h-4 bg-white rotate-45"></div>
                <p className="text-sm">
                  Introducing our brand new section<br />
                  <strong>EcoMart - Shop Sustainably</strong>
                </p>
                <button
                  onClick={closePopover}
                  className="mt-2 text-sm bg-[#0071dc] text-white px-4 py-1 rounded-full hover:bg-[#004c91]"
                >
                  Got It
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
