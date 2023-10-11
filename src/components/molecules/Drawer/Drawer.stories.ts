import Drawer from './Drawer';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'ドロワーの開閉状態を管理する',
    },
    children: {
      control: false,
      description: 'ドロワー内に表示するアイテム(ReactNode)',
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    children: 'ドロワー内に表示するアイテム',
  },
};
