import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '@/components/ui/badge'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
    asChild: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
}

export const WithEmoji: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge>🎉 New</Badge>
      <Badge variant="secondary">⭐ Featured</Badge>
      <Badge variant="destructive">🚨 Urgent</Badge>
      <Badge variant="outline">✅ Complete</Badge>
    </div>
  ),
}

export const StatusBadges: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Badge variant="outline">Draft</Badge>
        <Badge variant="secondary">In Progress</Badge>
        <Badge>Published</Badge>
      </div>
      <div className="flex gap-2">
        <Badge variant="secondary">Pending</Badge>
        <Badge>Approved</Badge>
        <Badge variant="destructive">Rejected</Badge>
      </div>
    </div>
  ),
}