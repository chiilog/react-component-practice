import NewsListItem from './NewsListItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/NewsListItem',
  component: NewsListItem,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NewsListItem>;

export default meta;
type Story = StoryObj<typeof NewsListItem>;

export const Default: Story = {
  args: {
    date: '2023/10/04',
    icon: 'アイコン',
  },
};
