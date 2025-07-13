'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/authContext';
import { useRouter } from 'next/navigation';

export default function AdminHeader() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/auth/login');
  };

  return (
    <header className="admin-header">
      <div className="admin-header-content">
        <div className="admin-header-left">
          <Link href="/admin/dashboard">
            <div className="admin-logo">
              <span className="walmart-logo">Walmart X EcoMart</span>
              <span className="admin-badge">Admin</span>
            </div>
          </Link>
        </div>

        <div className="admin-header-right">
          <div className="admin-user-info">
            <span className="admin-welcome">Welcome, {user?.firstName}</span>
            <span className="admin-role">Administrator</span>
          </div>
          
          <div className="admin-actions">
            <Link href="/" className="view-site-btn">
              View Site
            </Link>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}