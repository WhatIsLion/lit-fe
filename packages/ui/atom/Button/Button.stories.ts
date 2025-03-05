import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: '버튼 안의 텍스트' },
    onClick: { action: 'clicked', description: '클릭 이벤트' },
    disabled: { control: 'boolean', description: '비활성화 여부' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click Me',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};
