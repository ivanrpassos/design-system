import { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Buttons',
  component: Button,

  args: {
    children: 'Label',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Big: StoryObj<ButtonProps> = {
  args: {
    variant: 'big',
  },
}
