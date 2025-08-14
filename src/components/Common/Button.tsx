import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import type { ButtonHTMLAttributes, FC } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export const Button: FC<ButtonProps> = ({
  className,
  children,
  asChild,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={classNames(
        'inline-flex items-center gap-1.5 justify-center px-4 py-2 font-semibold rounded-xl border-2 border-blue-500 text-blue-500 enabled:hover:bg-blue-500 enabled:hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed dark:border-blue-400 dark:text-blue-400 dark:enabled:hover:bg-blue-400 dark:enabled:hover:text-white',
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default Button;
