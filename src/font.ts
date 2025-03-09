import { Open_Sans, Bodoni_Moda } from 'next/font/google';

// Keep your existing Bodoni Moda configuration
export const bodoniModa = Bodoni_Moda({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bodoni-moda',
});

// Add Open Sans configuration
export const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});