---
to: src/components/<%= atomic %>/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.stories.tsx
---
import <%= h.changeCase.pascal(component_name) %> from './<%= h.changeCase.pascal(component_name) %>';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: '<%= h.changeCase.pascal(atomic) %>/<%= h.changeCase.pascal(component_name) %>',
    component: <%= h.changeCase.pascal(component_name) %>,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof <%= h.changeCase.pascal(component_name) %>>;

export default meta;
type Story = StoryObj<typeof <%= h.changeCase.pascal(component_name) %>>;

export const Default: Story = {
  args: {},
};
