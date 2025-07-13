'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/lib/authContext';
import './login.css';

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [role, setRole] = useState<'consumer' | 'admin'>('consumer');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, role }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Successfully logged in! Redirecting...');
        login(data.token, data.user);
        setTimeout(() => {
          router.push(data.user.role === 'admin' ? '/admin/dashboard' : '/');
        }, 2000);
      } else {
        setError(data.error || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="walmart-login-container">
        <div className="walmart-logo-image">
          <Image src="/spark-icon.png" alt="Walmart Logo" width={80} height={80} priority />
        </div>

        <h2 className="title">Sign in or create your account</h2>
        <p className="subtitle">
          Not sure if you have an account? Enter your phone number or email and we’ll check for you.
        </p>

        <div className="role-toggle">
          <button
            className={role === 'consumer' ? 'active' : ''}
            onClick={() => setRole('consumer')}
          >
            Customer Login
          </button>
          <button
            className={role === 'admin' ? 'active' : ''}
            onClick={() => setRole('admin')}
          >
            Admin Login
          </button>
        </div>

        {error && <div className="error-message">❌ {error}</div>}
        {success && <div className="success-message">✅ {success}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Phone number or email"
            className="input-box"
            value={formData.username}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-box"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={isLoading}
          />

          <button className="continue-button" type="submit" disabled={isLoading}>
            {isLoading ? 'Signing In...' : 'Continue'}
          </button>
        </form>

        <p className="privacy-note">
          Securing your personal information is our priority.{' '}
          <Link href="#">See our privacy measures.</Link>
        </p>

        <p className="register-link">
          Don’t have an account?{' '}
          <Link href="/auth/register">
            <span className="register-btn">Create your account</span>
          </Link>
        </p>
      </div>

      {/* Footer */}
      <footer className="walmart-footer">
        <p>© 2025 Walmart x EcoMart. All Rights Reserved.</p>
        <div className="footer-links">
          <Link href="#">Give feedback</Link>
          <Link href="#">CA Privacy Rights</Link>
          <Link href="#">Your Privacy Choices</Link>
          <Link href="#">Notice at Collection</Link>
          <Link href="#">Request My Personal Information</Link>
          <Link href="#">Delete Account</Link>
          <Link href="#">California Supply Chains Act</Link>
        </div>
      </footer>
    </>
  );
}
