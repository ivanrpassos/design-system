import { Meta, StoryObj } from '@storybook/react'

import { Button } from '@ignite-ui/react'

export default {
  title: 'Buttons',
  component: Button,

  args: {
    children: 'Label',
  },
} as Meta

export const Primary: StoryObj = {}
export const Secondary: StoryObj = {}
