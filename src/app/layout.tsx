'use client';

import './globals.css';

import { MantineProvider } from '@mantine/core';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <MantineProvider withNormalizeCSS withGlobalStyles>
          {props.children}
        </MantineProvider>
      </body>
    </html>
  );
}
