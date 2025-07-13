'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/lib/authContext';
import './register.css';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    role: 'customer',
  });

  const [agreeTnC, setAgreeTnC] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    if (!agreeTnC) {
      setError('You must agree to the terms and conditions');
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subscribeEmail,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(
          `🎉 ${formData.role === 'admin' ? 'Admin' : 'Customer'} account created successfully! Redirecting...`
        );
        login(data.token, data.user);
        setTimeout(() => {
          router.push(data.user.role === 'admin' ? '/admin/dashboard' : '/');
        }, 3000);
      } else {
        setError(data.error || 'User not created. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="register-container">
        <div className="walmart-logo-image">
          <Image src="/spark-icon.png" alt="Walmart Logo" width={80} height={80} priority />
        </div>

        <h2 className="title">Create your account</h2>

        {error && <div className="error-message">❌ {error}</div>}
        {success && <div className="success-message">✅ {success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="input-box"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="input-box"
            />
          </div>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="input-box"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="input-box"
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            disabled={isLoading}
            className="input-box"
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>

          <div className="form-row">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="input-box"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="input-box"
            />
          </div>

          <div className="checkboxes">
            <label>
              <input
                type="checkbox"
                checked={agreeTnC}
                onChange={() => setAgreeTnC(!agreeTnC)}
              />{' '}
              I agree to the <Link href="#">Terms and Conditions</Link>
            </label>
            <label>
              <input
                type="checkbox"
                checked={subscribeEmail}
                onChange={() => setSubscribeEmail(!subscribeEmail)}
              />{' '}
              I want to receive emails from Walmart X EcoMart
            </label>
          </div>

          <button className="continue-button" type="submit" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : `Create ${formData.role} account`}
          </button>
        </form>

        <p className="register-link">
          Already have an account?{' '}
          <Link href="/auth/login">
            <span className="register-btn">Sign in</span>
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
