import CautionText from './CautionText';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/CautionText',
  component: CautionText,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CautionText>;

export default meta;
type Story = StoryObj<typeof CautionText>;

export const Default: Story = {
  args: {
    children: '赤文字のテキスト',
  },
};
