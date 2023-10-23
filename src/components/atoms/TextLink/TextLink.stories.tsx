import TextLink from './TextLink';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/TextLink',
  component: TextLink,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof TextLink>;

export const Default: Story = {
  args: {
    children: 'テキストリンク',
    href: '/',
  },
};
