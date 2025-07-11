'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import { FaHeart, FaUser, FaShoppingCart } from 'react-icons/fa';
import { useStateValue } from '../lib/StateProvider';

export default function Headergreen() {
  const [{ basket }] = useStateValue();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPopover, setShowPopover] = useState(true);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const closePopover = () => {
    setDontShowAgain(true);
    setShowPopover(false);
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
    <header className="bg-[#4CBB17] text-white w-full shadow-md font-[EverydaySans,'Helvetica Neue','Helvetica',Arial,sans-serif] text-[17px]">
      <div className="max-w-[1440px] mx-auto flex items-center px-4 pr-6 h-[88px] gap-x-8">
        <Link href="/" className="pl-1">
          <div className="p-2 rounded-full hover:bg-[#006400] transition duration-200">
            <Image src="/walmart-spark.svg" alt="Eco Logo" width={48} height={48} />
          </div>
        </Link>

        <div
          className="relative flex items-center w-[265px] bg-[#3CA10F] hover:bg-[#006400] px-5 py-[10px] rounded-full cursor-pointer transition-colors"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <Image src="/pickup-icon.png" alt="Pickup" width={28} height={28} className="mr-2" />
          <div className="leading-tight">
            <p className="font-bold text-[15px]">Pickup or delivery?</p>
            <p className="text-sm text-white truncate w-[160px]">Green Eco Zone • Earth Center</p>
          </div>
          <IoIosArrowDown className="ml-2 text-white text-base" />
          {showDropdown && (
            <div className="absolute z-50 top-[70px] left-0 w-[360px] bg-[#4CBB17] rounded-2xl p-4 text-white shadow-xl">
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
                <p className="text-xs text-gray-600 mb-2">Earth Center, EC 10001</p>
                <button className="w-full text-sm bg-[#4CBB17] text-white py-2 rounded-full">
                  Add address
                </button>
              </div>
              <div className="bg-white text-black rounded-xl px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold">Earth Supercenter</p>
                  <p className="text-xs text-gray-600">123 Green Ave, EC 10001</p>
                </div>
                <IoIosArrowDown className="text-xl text-[#4CBB17]" />
              </div>
            </div>
          )}
        </div>

        <div className="flex-grow max-w-[1875px] ml-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search sustainable products..."
              className="w-full py-4 px-6 pr-12 rounded-full text-[16px] text-[#006400] placeholder-[#006400] outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#006400] p-3 rounded-full">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 21l-4.35-4.35M18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="ml-20 flex items-center gap-6 relative">
          <Link href="/orders">
            <div className="flex items-center gap-2 hover:bg-[#006400] px-4 py-2 rounded-full transition cursor-pointer">
              <FaHeart className="text-white text-[18px]" />
              <div className="leading-tight text-sm">
                <p className="text-xs">Reorder</p>
                <p className="font-bold">My Items</p>
              </div>
            </div>
          </Link>
          <Link href="/login">
            <div className="flex items-center gap-2 hover:bg-[#006400] px-4 py-2 rounded-full transition cursor-pointer">
              <FaUser className="text-white text-[18px]" />
              <div className="leading-tight text-sm">
                <p className="text-xs">Sign In</p>
                <p className="font-bold">Account</p>
              </div>
            </div>
          </Link>

          <Link href="/checkout">
            <div className="flex items-center gap-2 relative hover:bg-[#006400] px-4 py-2 rounded-full transition cursor-pointer">
              <FaShoppingCart className="text-white text-[20px]" />
              {basket?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-[#4CBB17] text-xs font-bold rounded-full px-1">
                  {basket.length}
                </span>
              )}
              <span className="font-bold text-sm">${basket?.length || '0.00'}</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
