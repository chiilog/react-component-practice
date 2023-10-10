import HamburgerButton from './hamburgerButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/HamburgerButton',
  component: HamburgerButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      control: false,
      description: 'ハンバーガーボタンをクリックした時のイベント',
    },
    isOpen: {
      control: 'boolean',
      description: 'ハンバーガーボタンの開閉状態を管理する',
    },
  },
} satisfies Meta<typeof HamburgerButton>;

export default meta;
type Story = StoryObj<typeof HamburgerButton>;

export const Default: Story = {
  args: {
    // eslint-disable-next-line no-console
    onClick: () => console.log('click'),
  },
};
