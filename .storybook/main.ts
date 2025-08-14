import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-themes'],
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  docs: { docsMode: false },
  framework: {
    name: '@storybook/nextjs',
    options: { builder: { useSWC: true } },
  },
  typescript: { check: false, reactDocgen: false },
};
export default config;
