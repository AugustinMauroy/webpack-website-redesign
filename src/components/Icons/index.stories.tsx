import type { Meta as MetaObj, StoryObj } from '@storybook/react';
import { DiscordIcon } from './Discord.tsx';
import { GitHubIcon } from './GitHub.tsx';
import { Logo } from './Logo.tsx';
import { XIcon } from './X.tsx';

export const SocialLogos: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-6">
      <DiscordIcon className="size-10" />
      <GitHubIcon className="size-10" />
      <XIcon className="size-10" />
    </div>
  ),
};

export const Logos: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Logo height={100} />
    </div>
  ),
};

export default { title: 'Logos' } as MetaObj;
