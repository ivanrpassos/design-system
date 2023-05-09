import { CustomTheme } from '../Theme/customTheme';

import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    docs: {
      components: {
        code: CustomTheme,
      },
    },
  },
};

export default preview;
