import type { Meta, StoryObj } from '@storybook/react'
import { Calendar, CalendarProps } from '@ignite-ui/react/src/components/Calendar'

export default {
  title: 'Surfaces/Calendar',
  component: Calendar,
  args: {
    month: 9,
    year: 2023
  },
  argTypes: {
  },
} as Meta<CalendarProps>

export const Primary: StoryObj<CalendarProps> = {}
