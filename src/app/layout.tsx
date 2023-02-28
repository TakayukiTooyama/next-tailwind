import '@/style/global.css';

import type { NextPage } from 'next';

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
