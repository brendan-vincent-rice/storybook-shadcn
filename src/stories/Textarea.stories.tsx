import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    rows: {
      control: { type: 'number' },
    },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  ),
}

export const WithText: Story = {
  args: {
    defaultValue: "This is a textarea with some pre-filled text. You can edit this content and see how it behaves.",
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'This textarea is disabled.',
    disabled: true,
  },
}

export const WithRows: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div>
        <Label>Small (2 rows)</Label>
        <Textarea rows={2} placeholder="Small textarea with 2 rows" />
      </div>
      <div>
        <Label>Default (4 rows)</Label>
        <Textarea rows={4} placeholder="Default textarea with 4 rows" />
      </div>
      <div>
        <Label>Large (8 rows)</Label>
        <Textarea rows={8} placeholder="Large textarea with 8 rows" />
      </div>
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="feedback">Feedback</Label>
        <Textarea
          id="feedback"
          placeholder="Tell us what you think..."
          rows={4}
        />
        <p className="text-xs text-muted-foreground">
          Your feedback helps us improve our product.
        </p>
      </div>
      <Button>Submit Feedback</Button>
    </div>
  ),
}

export const CharacterCount: Story = {
  render: function CharacterCountExample() {
    const [value, setValue] = React.useState('')
    const maxLength = 200

    return (
      <div className="space-y-2 w-full max-w-md">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          placeholder="Tell us about yourself..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={maxLength}
          rows={4}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Brief description for your profile</span>
          <span>
            {value.length}/{maxLength}
          </span>
        </div>
      </div>
    )
  },
}

export const ContactForm: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-lg">
      <h3 className="text-lg font-semibold">Contact Us</h3>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Textarea
          id="subject"
          placeholder="What is this about?"
          rows={2}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Please describe your inquiry in detail..."
          rows={6}
        />
      </div>
      <Button>Send Message</Button>
    </div>
  ),
}

export const ResizeVariants: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <Label>Resize None</Label>
        <Textarea
          placeholder="This textarea cannot be resized"
          className="resize-none"
          rows={3}
        />
      </div>
      <div className="space-y-2">
        <Label>Resize Vertical (Default)</Label>
        <Textarea
          placeholder="This textarea can be resized vertically"
          rows={3}
        />
      </div>
      <div className="space-y-2">
        <Label>Resize Both</Label>
        <Textarea
          placeholder="This textarea can be resized in both directions"
          className="resize"
          rows={3}
        />
      </div>
    </div>
  ),
}

export const ErrorState: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="error-textarea">Comment</Label>
        <Textarea
          id="error-textarea"
          placeholder="Your comment..."
          aria-invalid="true"
          className="border-destructive"
          rows={3}
        />
        <p className="text-xs text-destructive">
          This field is required and cannot be empty.
        </p>
      </div>
    </div>
  ),
}