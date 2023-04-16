'use client';

import './globals.css';

import useScrollSnap from '@/hooks/useScrollTop';
import { MantineProvider } from '@mantine/core';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useScrollSnap();

  return (
    <html lang='en'>
      <body>
        <MantineProvider withNormalizeCSS>{children}</MantineProvider>
      </body>
    </html>
  );
}
