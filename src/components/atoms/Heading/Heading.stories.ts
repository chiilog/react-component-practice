import Heading from './Heading';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      description: '見出しタグのレベルを指定する。現状h2とh3のみ選択可',
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: '見出しタグ',
  },
};

export const HeadingLevel2: Story = {
  args: {
    level: 'h2',
    children: 'H2の見出しタグ',
  },
};

export const HeadingLevel3: Story = {
  args: {
    level: 'h3',
    children: 'H3の見出しタグ',
  },
};
