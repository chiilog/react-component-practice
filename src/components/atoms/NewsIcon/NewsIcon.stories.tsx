import NewsIcon from './NewsIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/NewsIcon',
  component: NewsIcon,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NewsIcon>;

export default meta;
type Story = StoryObj<typeof NewsIcon>;

export const Default: Story = {
  args: {
    icon: 'アイコン',
  },
};
