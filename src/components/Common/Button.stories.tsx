import { CogIcon } from '@heroicons/react/24/outline';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';
import { Button } from './Button.tsx';

type Story = StoryObj<typeof Button>;
type Meta = MetaObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Icon: Story = {
  args: {
    children: (
      <>
        <CogIcon className="size-6" />
        Button
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};

export default { component: Button } as Meta;
