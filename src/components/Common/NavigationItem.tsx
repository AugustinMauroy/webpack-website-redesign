import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import type { FC, PropsWithChildren } from 'react';
import { ActiveLink } from './ActiveLink.tsx';

type NavigationItemProps = PropsWithChildren<{
  asChild?: boolean;
  href?: string;
  className?: string;
  onClick?: () => void;
}>;

export const NavigationItem: FC<NavigationItemProps> = ({
  children,
  asChild,
  className,
  href,
  ...props
}) => {
  const Component = asChild ? Slot : href ? ActiveLink : 'button';

  return (
    <Component
      {...props}
      href={href as string}
      className={classNames(
        'text-gray-900 dark:text-gray-100 px-4 py-2 rounded hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors duration-200 flex items-center justify-center w-fit',
        className,
      )}
      activeClassName="!bg-blue-500 text-white"
      type={href ? undefined : 'button'}
    >
      {children}
    </Component>
  );
};
