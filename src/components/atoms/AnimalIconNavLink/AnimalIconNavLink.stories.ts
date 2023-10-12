import AnimalIconNavLink from './AnimalIconNavLink';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/AnimalIconNavLink',
  component: AnimalIconNavLink,
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text', description: 'リンク先' },
    type: {
      control: 'radio',
      description: 'リンクの種類',
      options: ['dog', 'cat', 'other', 'fish'],
    },
    description: { control: 'text', description: '種別の下に表示するテキスト' },
    hasBackground: {
      control: 'boolean',
      description: '背景色を表示するかどうか選択',
    },
  },
} satisfies Meta<typeof AnimalIconNavLink>;

export default meta;
type Story = StoryObj<typeof AnimalIconNavLink>;

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

export const NoBackground: Story = {
  args: {
    href: '#',
    type: 'dog',
    description: 'Find puppy dogs.',
    hasBackground: false,
  },
};
