import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from '@/components/ui/separator'

const meta = {
  title: 'UI/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    decorative: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  ),
}

export const InList: Story = {
  render: () => (
    <div className="max-w-md">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>
        <Separator />
        <div>
          <h4 className="font-medium">Profile</h4>
          <p className="text-sm text-muted-foreground">
            Update your profile information.
          </p>
        </div>
        <Separator />
        <div>
          <h4 className="font-medium">Security</h4>
          <p className="text-sm text-muted-foreground">
            Manage your security settings.
          </p>
        </div>
        <Separator />
        <div>
          <h4 className="font-medium">Notifications</h4>
          <p className="text-sm text-muted-foreground">
            Configure your notification preferences.
          </p>
        </div>
      </div>
    </div>
  ),
}

export const InNavigation: Story = {
  render: () => (
    <div className="flex items-center space-x-4 text-sm">
      <a href="#" className="hover:underline">Home</a>
      <Separator orientation="vertical" />
      <a href="#" className="hover:underline">About</a>
      <Separator orientation="vertical" />
      <a href="#" className="hover:underline">Services</a>
      <Separator orientation="vertical" />
      <a href="#" className="hover:underline">Contact</a>
    </div>
  ),
}

export const CustomStyle: Story = {
  render: () => (
    <div className="w-full max-w-xs space-y-4">
      <div>
        <h4 className="text-sm font-medium">Default Separator</h4>
        <Separator className="my-4" />
      </div>
      
      <div>
        <h4 className="text-sm font-medium">Thick Separator</h4>
        <Separator className="my-4 h-0.5" />
      </div>
      
      <div>
        <h4 className="text-sm font-medium">Colored Separator</h4>
        <Separator className="my-4 bg-primary" />
      </div>
      
      <div>
        <h4 className="text-sm font-medium">Dashed Separator</h4>
        <Separator className="my-4 border-dashed border-t border-border bg-transparent h-px" />
      </div>
    </div>
  ),
}

export const InCard: Story = {
  render: () => (
    <div className="max-w-sm rounded-lg border p-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="text-sm text-muted-foreground">
          This is a description for the card content.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-2">
        <h4 className="font-medium">Additional Information</h4>
        <p className="text-sm text-muted-foreground">
          More details about the card content can be placed here.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex justify-between items-center text-sm">
        <span>Total</span>
        <span className="font-semibold">$99.00</span>
      </div>
    </div>
  ),
}