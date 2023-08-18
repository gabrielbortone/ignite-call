import type { Meta, StoryObj} from "@storybook/react";
import { TextInput, TextInputProps } from "@ignite-ui/react";

export default {
    title: 'Form/Text Input',
    component: TextInput,
    args: {
    },
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Type yout name'
    }
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true
    }
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'cal.com/',
    }
}