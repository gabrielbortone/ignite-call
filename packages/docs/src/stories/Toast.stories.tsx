import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProps } from '@ignite-ui/react';

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    title: 'TEFSDFSSDSDS',
    content: 'Quarta-feira, 26 de Setembro às 19h'
  },
  argTypes: {
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
