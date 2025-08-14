'use client';
import { LanguageIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import type { FC } from 'react';
import navigation from '~/../data/navigation.json' with { type: 'json' };
import { NavigationItem } from '~/components/Common/NavigationItem.tsx';
import { Logo } from '~/components/Icons/Logo.tsx';

export const Header: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md border-b-2 border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/">
              <Logo height={60} />
            </Link>
          </li>
          {navigation.header.links.map((link) => (
            <li key={link.label}>
              <NavigationItem href={link.href}>{link.label}</NavigationItem>
            </li>
          ))}
        </ul>
        <ul className="flex items-center space-x-4">
          <li>
            <NavigationItem
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="cursor-pointer flex items-center"
            >
              <MoonIcon className="size-6 dark:hidden" />
              <SunIcon className="size-6 hidden dark:block" />
            </NavigationItem>
          </li>
          <li>
            <NavigationItem
              onClick={() =>
                alert('Language change feature is not implemented yet.')
              }
            >
              <LanguageIcon className="size-6" />
            </NavigationItem>
          </li>
        </ul>
      </nav>
    </header>
  );
};
