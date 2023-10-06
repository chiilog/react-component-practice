import HeaderNavigation from './HeaderNavigation';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/HeaderNavigation',
  component: HeaderNavigation,
  tags: ['autodocs'],
  argTypes: {
    nav: {
      control: 'array',
      description: 'ヘッダー用ナビに表示するリンクの配列',
    },
    className: {
      control: 'text',
      description: 'ページ上でクラスを設定するときに使用',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '内部的に `HeaderNavLink` を使用しています。navに渡す配列の各要素は `HeaderNavLink` の `props` と同じです。',
      },
    },
  },
} satisfies Meta<typeof HeaderNavigation>;

export default meta;
type Story = StoryObj<typeof HeaderNavigation>;

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
