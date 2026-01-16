// lib/fonts.ts
import { Inter, JetBrains_Mono } from 'next/font/google';

// Initialize Inter
export const inter = Inter({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
  variable: '--font-inter', // This allows us to use it in Tailwind
});

// Initialize JetBrains Mono
export const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});