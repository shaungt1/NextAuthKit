import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';
import NavigationBar from '@/components/navbar/NavigationBar';
import '@/app/index.css';
import SessionProviderWrapper from '@/providers/SessionProviderWrapper';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html suppressHydrationWarning lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <ThemeProvider attribute='class'>
          <SessionProviderWrapper>
            <NavigationBar />
            {children}
          </SessionProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
