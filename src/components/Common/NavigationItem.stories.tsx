import { CogIcon } from '@heroicons/react/24/outline';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';
import { NavigationItem } from './NavigationItem.tsx';

type Story = StoryObj<typeof NavigationItem>;
type Meta = MetaObj<typeof NavigationItem>;

export const Default: Story = {
  args: {
    children: 'Documentation',
    href: '/docs',
  },
};

export const ButtonWithIcon: Story = {
  args: {
    onClick() {
      alert('Language Selector clicked');
    },
    children: <CogIcon className="size-6" aria-label="Language Selector" />,
  },
};

export const ActiveLink: Story = {
  args: {
    href: '/docs',
    children: 'Documentation',
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/docs',
      },
    },
  },
};

export default { component: NavigationItem } as Meta;
