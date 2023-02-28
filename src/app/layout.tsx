import '@/style/global.css';

import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Next x Tailwind Sterter',
    template: '%s | Next x Tailwind Sterter',
  },
  description: 'Next.js13 x TailwindCSS テンプレート',
  icons: {
    icon: '/favicon.ico',
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: NextPage<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='ja'>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
