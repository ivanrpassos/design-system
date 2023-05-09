import { create } from '@storybook/theming/create';

export const CustomTheme = create({
  base: 'dark',

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',

  // UI
  appBg: '#1c1c1c',
  appContentBg: '#1c1c1c',
  appBorderColor: '#1c1c1c',
});
