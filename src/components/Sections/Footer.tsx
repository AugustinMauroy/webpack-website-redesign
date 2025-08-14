import type { FC } from 'react';
import navigation from '~/../data/navigation.json' with { type: 'json' };
import { NavigationItem } from '~/components/Common/NavigationItem.tsx';
import { DiscordIcon } from '~/components/Icons/Discord.tsx';
import { GitHubIcon } from '~/components/Icons/GitHub.tsx';
import { XIcon } from '~/components/Icons/X.tsx';

const ICON_MAP: Record<string, FC> = {
  Discord: DiscordIcon,
  GitHub: GitHubIcon,
  X: XIcon,
};

export const Footer: FC = () => (
  <footer className="bg-slate-100 dark:bg-slate-900 border-t-2 border-slate-200 dark:border-slate-800 py-6 mt-12">
    <nav className="flex flex-col md:flex-row items-center justify-center px-2">
      <ul className="flex flex-wrap items-center justify-center md:justify-start space-x-6 mb-2 md:mb-0">
        {navigation.footer.links.map((link) => (
          <li key={link.href}>
            <NavigationItem
              href={link.href}
              className="flex items-center gap-2"
            >
              {link.icon ? (
                (() => {
                  const Icon = ICON_MAP[link.icon as string];
                  return Icon ? <Icon /> : <span>{link.label}</span>;
                })()
              ) : (
                <span>{link.label}</span>
              )}
            </NavigationItem>
          </li>
        ))}
      </ul>
    </nav>
  </footer>
);
