import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>

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
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="notifications" defaultChecked />
        <Label htmlFor="notifications">Email notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="marketing" />
        <Label htmlFor="marketing">Marketing emails</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="updates" defaultChecked />
        <Label htmlFor="updates">Product updates</Label>
      </div>
    </div>
  ),
}

export const CheckboxList: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="text-sm font-medium">Select your interests:</div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="tech" />
          <Label htmlFor="tech">Technology</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="design" />
          <Label htmlFor="design">Design</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="business" />
          <Label htmlFor="business">Business</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="science" />
          <Label htmlFor="science">Science</Label>
        </div>
      </div>
    </div>
  ),
}