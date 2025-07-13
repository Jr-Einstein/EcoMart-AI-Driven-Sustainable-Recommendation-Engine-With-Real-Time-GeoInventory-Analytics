import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './ClientLayout';
import { AuthProvider } from '@/lib/authContext';

export const metadata: Metadata = {
  title: 'Walmart Clone - EcoMart',
  description: 'Shop sustainably with EcoMart at Walmart',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
