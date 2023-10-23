import NewsListItem from '@/components/molecules/NewsListItem/NewsListItem';

import NewsList from './NewsList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Organisms/NewsList',
  component: NewsList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NewsList>;

export default meta;
type Story = StoryObj<typeof NewsList>;

export const Default: Story = {
  args: {
    children: (
      <>
        <NewsListItem date="2023/10/04" icon="アイコン">
          tp_petshop1不具合修正。
          <br />
          ページ内リンクが機能しない状態だったので更新。既にご利用中のお客様は、最新のテンプレートのjs/main.js内の「スムーススクロール」ブロックをコピペするか、main.js本体を上書きして下さい。尚、ページ内リンクを使っていなければそのままでも特に動作に問題はありません。
        </NewsListItem>
        <NewsListItem date="2023/09/03" icon="アイコン１">
          tp_petshop1不具合修正。
          <br />
          ページ内リンクが機能しない状態だったので更新。既にご利用中のお客様は、最新のテンプレートのjs/main.js内の「スムーススクロール」ブロックをコピペするか、main.js本体を上書きして下さい。尚、ページ内リンクを使っていなければそのままでも特に動作に問題はありません。
        </NewsListItem>
      </>
    ),
  },
};
