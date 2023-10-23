import SectionDetail from './SectionDetail';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Organisms/SectionDetail',
  component: SectionDetail,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: '追加したいクラスを入力する',
    },
  },
} satisfies Meta<typeof SectionDetail>;

export default meta;
type Story = StoryObj<typeof SectionDetail>;

export const Default: Story = {
  args: {
    children: 'コンテンツ内に表示するアイテム',
  },
};
