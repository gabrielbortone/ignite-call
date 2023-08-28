import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipProps } from '@ignite-ui/react';

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    text: 'TEFSDFSSDSDS'
  },
  argTypes: {
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
