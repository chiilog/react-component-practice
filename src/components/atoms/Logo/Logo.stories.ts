import Logo from './Logo';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    className: {
      control: {
        type: 'text',
      },
      description: 'ページで表示するサイズをtailwindcssの値で設定',
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    src: '/images/logo_home.png',
    className:
      'relative z-10 w-[350px] h-[111px] max-sm:w-[150px] max-sm:h-[47px]',
  },
};
