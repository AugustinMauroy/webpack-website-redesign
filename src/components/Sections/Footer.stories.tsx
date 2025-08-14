import type { Meta as MetaObj, StoryObj } from '@storybook/react';
import { Footer } from './Footer.tsx';

type Story = StoryObj<typeof Footer>;
type Meta = MetaObj<typeof Footer>;

export const Default: Story = {};

export default { component: Footer } as Meta;
