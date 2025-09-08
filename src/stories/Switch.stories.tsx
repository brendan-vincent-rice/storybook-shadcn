import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
}

export const SettingsExample: Story = {
  render: () => (
    <div className="space-y-4 max-w-sm">
      <div className="flex items-center justify-between">
        <Label htmlFor="notifications-switch">Notifications</Label>
        <Switch id="notifications-switch" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="dark-mode">Dark Mode</Label>
        <Switch id="dark-mode" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="auto-save">Auto Save</Label>
        <Switch id="auto-save" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="beta-features">Beta Features</Label>
        <Switch id="beta-features" />
      </div>
    </div>
  ),
}

export const VerticalAlignment: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-col space-y-2">
        <Label htmlFor="email-notifications">Email Notifications</Label>
        <div className="text-sm text-muted-foreground">Receive notifications via email</div>
        <Switch id="email-notifications" />
      </div>
      <div className="flex flex-col space-y-2">
        <Label htmlFor="push-notifications">Push Notifications</Label>
        <div className="text-sm text-muted-foreground">Receive push notifications on your device</div>
        <Switch id="push-notifications" defaultChecked />
      </div>
    </div>
  ),
}