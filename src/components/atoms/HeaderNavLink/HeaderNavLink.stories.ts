import HeaderNavLink from './HeaderNavLink';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/HeaderNavLink',
  component: HeaderNavLink,
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text', description: 'リンク先' },
    type: {
      control: 'radio',
      description: 'リンクの種類',
      options: ['dog', 'cat', 'other', 'fish'],
    },
    description: { control: 'text', description: '種別の下に表示するテキスト' },
  },
} satisfies Meta<typeof HeaderNavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dog: Story = {
  args: {
    href: '#',
    type: 'dog',
    description: 'Find puppy dogs.',
  },
};

export const Cat: Story = {
  args: {
    href: '#',
    type: 'cat',
    description: 'Find puppy cats.',
  },
};

export const Other: Story = {
  args: {
    href: '#',
    type: 'other',
    description: 'ハムスターや小鳥など',
  },
};

export const Fish: Story = {
  args: {
    href: '#',
    type: 'fish',
    description: '熱帯魚など',
  },
};
