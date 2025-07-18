import ChatBubble from '@/components/common/ChatBubble';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import OnekoCat from '@/components/common/OnekoCat';
import { Quote } from '@/components/common/Quote';
import { generateMetadata as getMetadata } from '@/config/Meta';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';
import UmamiAnalytics from '@/components/analytics/UmamiAnalytics';
import './globals.css';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`font-hanken-grotesk antialiased`}>
          <ReactLenis root>
            <Navbar />
            {children}
            <OnekoCat />
            <Quote />
            <Footer />
            <ChatBubble />
            <UmamiAnalytics />
          </ReactLenis>
        </body>
      </html>
    </ViewTransitions>
  );
}
