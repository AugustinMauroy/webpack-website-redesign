import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import '~/app/globals.css';

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },

  decorators: [
    withThemeByClassName({
      defaultTheme: 'light',
      themes: {
        light: 'light',
        dark: 'dark',
      },
    }),
  ],
};

export default preview;
