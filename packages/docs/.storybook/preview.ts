import { CustomTheme } from '../Theme/CustomTheme';

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
