import HeaderNavigation from './HeaderNavigation';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/HeaderNavigation',
  component: HeaderNavigation,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HeaderNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nav: [
      {
        href: '/list/',
        type: 'dog',
        description: 'Find puppy dogs.',
      },
      {
        href: '/list/',
        type: 'cat',
        description: 'Find puppy cats.',
      },
      {
        href: '/list/',
        type: 'other',
        description: 'ハムスターや小鳥など',
      },
      {
        href: '/list/',
        type: 'fish',
        description: '熱帯魚など',
      },
    ],
  },
};
