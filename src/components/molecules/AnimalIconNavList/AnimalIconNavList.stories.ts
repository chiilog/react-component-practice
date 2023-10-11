import { AnimalIconNavLinkProps } from '@/components/atoms/AnimalIconNavLink/AnimalIconNavLink';

import AnimalIconNavList from './AnimalIconNavList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/AnimalIconNavList',
  component: AnimalIconNavList,
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
    direction: {
      control: 'radio',
      description: 'ナビを並列にするか直列にするかを選択',
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
} satisfies Meta<typeof AnimalIconNavList>;

export default meta;
type Story = StoryObj<typeof AnimalIconNavList>;

const navItems: AnimalIconNavLinkProps[] = [
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
];

export const Default: Story = {
  args: {
    nav: navItems,
  },
};

export const DirectionVertical: Story = {
  args: {
    nav: navItems,
    direction: 'vertical',
  },
};
