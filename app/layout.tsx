import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'hi.xyz | Your AI Companion',
  description: 'Experience meaningful conversations with AI friends designed to understand and connect with you.',
  keywords: 'AI companion, AI friend, conversation, virtual assistant, AI personality',
  openGraph: {
    title: 'hi.xyz | Your AI Companion',
    description: 'Experience meaningful conversations with AI friends designed to understand and connect with you.',
    url: 'https://hi.xyz',
    siteName: 'hi.xyz',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'hi.xyz AI Companion',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hi.xyz | Your AI Companion',
    description: 'Experience meaningful conversations with AI friends designed to understand and connect with you.',
    images: ['https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, "font-sans antialiased")}>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}