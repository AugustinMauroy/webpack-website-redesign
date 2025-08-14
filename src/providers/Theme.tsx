'use client';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { FC, PropsWithChildren } from 'react';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
    {children}
  </NextThemeProvider>
);

export default ThemeProvider;
