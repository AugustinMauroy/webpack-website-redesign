import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps, FC } from 'react';

type ActiveLinkProps = {
  activeClassName?: string;
  href: string;
} & ComponentProps<typeof Link>;

export const ActiveLink: FC<ActiveLinkProps> = ({
  children,
  activeClassName,
  className,
  ...props
}) => {
  const pathname = usePathname();
  // only check the first segment
  const isActive =
    !props.href.startsWith('http') &&
    pathname.split('/')[1] === props.href.split('/')[1];

  return (
    <Link
      {...props}
      className={classNames({ [activeClassName || '']: isActive }, className)}
    >
      {children}
    </Link>
  );
};
