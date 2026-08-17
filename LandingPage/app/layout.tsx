import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#09733e',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'FreshCart - Welcome to the Future of Grocery Shopping',
  description: 'The smartest way to manage your groceries is almost here. Stay tuned for a revolution in your daily tasks.',
  keywords: ['FreshCart', 'FreshKart', 'grocery shopping', 'farm fresh', 'coming soon'],
  openGraph: {
    title: 'FreshCart - Welcome to the Future of Grocery Shopping',
    description: 'The smartest way to manage your groceries is almost here.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="font-sans antialiased bg-[#f8faf8] text-[#191c1e] selection:bg-[#c9ebd1] selection:text-[#09733e] min-h-screen">
        {children}
      </body>
    </html>
  );
}
