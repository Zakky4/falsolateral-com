import "./globals.css";

import type { Metadata } from 'next';
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://falsolateral.com'),
  title: {
    template: '%s | falsolateral',
    default: 'falsolateral',
  },
  description:
    'falsolateral 公式サイト',
  openGraph: {
    title: 'falsolateral 公式サイト',
    description:
      'falsolateral 公式サイト',
    images: ['/ogp.png'],
  },
  alternates: {
    canonical: 'https://falsolateral.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
