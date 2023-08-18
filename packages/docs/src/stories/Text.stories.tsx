import type { Meta, StoryObj} from "@storybook/react";
import { Text, TextProps } from "@ignite-ui/react";

export default {
    title: 'Typograph/Text',
    component: Text,
    args: {
        children: 'Example text'
    },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong Text',
        as: 'strong'
    }
}