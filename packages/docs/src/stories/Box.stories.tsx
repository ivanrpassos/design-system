import { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@ivanrpassos-ds/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text>Testando Elemento</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: 'null',
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
