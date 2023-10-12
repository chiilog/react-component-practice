import Container from './Container';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Organisms/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: '追加したいクラスを入力する',
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: 'コンテンツ内に表示するアイテム',
  },
};
