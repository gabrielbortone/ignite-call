import type { Meta, StoryObj} from "@storybook/react";
import { Avatar, AvatarProps } from "@ignite-ui/react";

export default {
    title: 'Data Display/Avatar',
    component: Avatar,
    args: {
        src: '',
        alt: ''
    },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
