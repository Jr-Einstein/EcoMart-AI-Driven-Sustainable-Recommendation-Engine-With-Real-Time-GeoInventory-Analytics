'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AdminSidebar() {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', href: '/admin/dashboard' },
    { id: 'products', label: 'Products', icon: '📦', href: '/admin/products' },
    { id: 'inventory', label: 'Inventory', icon: '📋', href: '/admin/inventory' },
    { id: 'orders', label: 'Orders', icon: '🛒', href: '/admin/orders' },
    { id: 'users', label: 'Users', icon: '👥', href: '/admin/users' },
    { id: 'analytics', label: 'Analytics', icon: '📈', href: '/admin/analytics' },
    { id: 'eco-reports', label: 'Eco Reports', icon: '🌱', href: '/admin/eco-reports' },
    { id: 'settings', label: 'Settings', icon: '⚙️', href: '/admin/settings' }
  ];

  return (
    <aside className="admin-sidebar">
      <nav className="admin-nav">
        <ul className="admin-nav-list">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`admin-nav-item ${activeItem === item.id ? 'active' : ''}`}
                onClick={() => setActiveItem(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}