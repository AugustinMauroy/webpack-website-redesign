import type { FC } from 'react';
import navigation from '~/../data/navigation.json' with { type: 'json' };
import { NavigationItem } from '~/components/Common/NavigationItem.tsx';

export const Footer: FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t-2 border-slate-200 dark:border-slate-800 py-6 mt-12">
      <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <ul className="flex flex-wrap items-center justify-center md:justify-start space-x-6 mb-4 md:mb-0">
          {navigation.footer.links.map((link) => (
            <li key={link.label}>
              <NavigationItem href={link.href}>{link.label}</NavigationItem>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
